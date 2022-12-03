import classNames from "classnames";
import { CSSProperties, FC } from "react";
import styles from "./get_a_quote_form_styles.module.scss";

export interface GetAQuoteFormProps {
    style?: CSSProperties;
    className?: string;
}

export const GetAQuoteForm: FC<GetAQuoteFormProps> = (props) => {
    return (
        <form style={props.style} className={classNames(styles.get_a_quote_form, props.className)}>
            <h2>Get a Free Quotation Now!</h2>

            <label htmlFor="name" className={styles.name_label}>Name</label>
            
            <input name="name" />

            <p className={styles.choose_your_issues_heading}>Choose your issues:</p>

            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_display" name="issues" value="Display" />

                <label htmlFor="issue_display">Display</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_motherboard" name="issues" value="Motherboard" />

                <label htmlFor="issue_motherboard">Motherboard</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_laptop_overall" name="issues" value="Laptop Overall" />

                <label htmlFor="issue_laptop_overall">Laptop Overall</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="CPU" name="issues" value="CPU" />

                <label htmlFor="CPU">CPU</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_hard_disk" name="issues" value="Hard Disk" />

                <label htmlFor="issue_hard_disk">Hard Disk</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_software_packages" name="issues" value="Software Packages" />

                <label htmlFor="issue_software_packages">Software Packages</label>
            </div>
            
            <div className={styles.checkbox_with_label_container}>
                <input type="checkbox" id="issue_others" name="issues" value="Others" />

                <label htmlFor="issue_others">Others</label>
            </div>

            <label htmlFor="phone" className={styles.phone_label}>Phone</label>
            
            <input name="phone" type="number" />

            <button>Submit</button>
        </form>
    );
};