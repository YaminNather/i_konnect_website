import axios, { AxiosResponse } from "axios";
import classNames from "classnames";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, FC, FormEvent, useCallback, useState } from "react";
import { IGoogleReCaptchaConsumerProps, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./get_a_quote_form_styles.module.scss";
import { SendQuotationRequest } from "./send_quotation_request";

export interface GetAQuoteFormProps {
    style?: CSSProperties;
    className?: string;
}

export const GetAQuoteForm: FC<GetAQuoteFormProps> = (props) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [selectedIssues, setIssues] = useState<Issue[]>([]);
    const [model, setModel] = useState<string>("");
    const [brand, setBrand] = useState<string>("");    

    const recaptcha: IGoogleReCaptchaConsumerProps = useGoogleReCaptcha();

    const verifyUsingReCaptcha = useCallback(
        async (): Promise<boolean> => {
            const token: string = await recaptcha.executeRecaptcha!.call("submit");

            const bodyJson: any = {
                "secret": "6LebfFMjAAAAAJ9uMq3iW1xUDTH09TwNJdRNtlcx",
                "response": token
            };
            const response: AxiosResponse = await axios.post("https://api.itkonnect.in/api/verify-google-recaptcha", bodyJson);            

            if(response.status < 200 || response.status > 299) {
                return false;
            }
            
            return true;
        },
        [recaptcha]
    );

    const onSubmitButtonClicked = useCallback(
        async (): Promise<void> => {
            if(name === "" || phone === "" || brand === "" || model === "" || selectedIssues.length === 0) {
                alert("Enter all required fields");
                return;
            }

            const isVerified: boolean = await verifyUsingReCaptcha();

            if(!isVerified) return;

            const sendQuotationRequestBody: SendQuotationRequest = {
                name: name,
                phone: phone,
                brand: brand,
                model: model,
                issues: selectedIssues
            };
            
            let requestStartTime: number = performance.now();            
            const response: AxiosResponse = await axios.post("https://api.itkonnect.in/api/send-quotation", sendQuotationRequestBody);
            let requestTime: number = performance.now() - requestStartTime;
            
            console.log(`Time taken for request = ${requestTime}ms`);

            if(response.status < 200 || response.status > 299) {
                return;
            }

            window.location.href = "/thank-you";
        },
        [name, phone, brand, model, selectedIssues, verifyUsingReCaptcha]
    );

    return (
        <div style={props.style} className={classNames(styles.get_a_quote_form, props.className)}
        >
            <h3>Get a Free Quotation Now!</h3>

            <div className={styles.left_grid_cell}>
                <label htmlFor="name">Name*</label>
                
                <input name="name" value={name} onChange={(event) => setName(event.target.value)} />

                <label htmlFor="brand">Brand*</label>
                
                <input name="brand" value={brand} onChange={(event) => setBrand(event.target.value)} />

                <label htmlFor="model">Model*</label>
                
                <input name="model" value={model} onChange={(event) => setModel(event.target.value)} />
            </div>

            <div className={styles.right_grid_cell}>
                <label className={styles.phone_label}>Phone Number*</label>

                <input name="phone" type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />

                <p className={styles.choose_your_issues_heading}>Choose your issues:*</p>

                <div className={styles.checkboxes_area}>
                    {Object.keys(Issue).map(
                        (issue, index, array) => {
                            return (
                                <div className={styles.checkbox_with_label_container} key={index}>
                                    <input
                                        type="checkbox"
                                        value={issue} 
                                        checked={selectedIssues.includes(issue as Issue)}
                                        onChange={(event) => {
                                            const newSelectedIssues: Issue[] = [...selectedIssues];
                                            if(!newSelectedIssues.includes(issue as Issue)) {
                                                newSelectedIssues.push(issue as Issue);
                                            }
                                            else {
                                                newSelectedIssues.splice(newSelectedIssues.findIndex((value) => value === issue), 1);
                                            }
                                            
                                            setIssues(newSelectedIssues);
                                        }} 
                                    />

                                    <label>{Object.values(Issue)[index]}</label>
                                </div>
                            );
                        }
                    )}
                </div>

                <button onClick={onSubmitButtonClicked}>Submit</button>
            </div>
        </div>
    );
};

enum Issue {
    display = "Display",
    motherboard = "Motherboard",
    laptopOverall = "Laptop Overall",
    cpu = "CPU",
    hardDisk = "Hard Disk",
    softwarePackages = "Software Packages",
    others = "Others"
}

function printFormData(formElement: HTMLFormElement): void {
    const formData: FormData = new FormData(formElement);
    const formValues: { [key: string]: any } = {};

    const keysIterator: IterableIterator<string> = formData.keys();
    let iteratorResult: IteratorResult<string, any> = keysIterator.next();
    while(!iteratorResult.done) {
        const key: string = iteratorResult.value;
        
        if(key.includes("[]")) formValues[key] = formData.getAll(key);
        else formValues[key] = formData.get(key);

        iteratorResult = keysIterator.next();
    }
}