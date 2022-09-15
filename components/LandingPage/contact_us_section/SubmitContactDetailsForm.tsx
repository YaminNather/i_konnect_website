import {FC, useState} from "react";
import Link from "next/link";
import Image from "next/future/image";
import styles from "../../../styles/LandingPage.module.scss";

import contactUsImage from "../../../public/landing-page/contact-us.png";

import instagramLogo from "../../../public/landing-page/social-media-logos/instagram.svg";
import facebookLogo from "../../../public/landing-page/social-media-logos/facebook.svg";
// import twitterLogo from "../../../public/landing-page/social-media-logos/twitter.svg";
// import linkedinLogo from "../../../public/landing-page/social-media-logos/linkedin.svg";
// import youtubeLogo from "../../../public/landing-page/social-media-logos/youtube.svg";
import googleMapsLogo from "../../../public/landing-page/social-media-logos/google-maps.svg";
import { RequestServiceRequestBody, Service } from "../../../pages/api/request-service";

export const SubmitContactDetailsForm: FC = (props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [howCanWeHelp, setHowCanWeHelp] = useState<Service | undefined>(undefined);

    return (
        <div className={styles.submit_contact_details_form}>
            <div className={styles.input_fields_area}>
                <div className={styles.input_field_container}>
                    <p>Phone*</p>
                    
                    <input type={"number"} value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                    <p>Name*</p>
                    
                    <input value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                    <p>Email*</p>
                    
                    <input type={"email"} value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                    <p>How can we help?</p>
                    
                    <input />
                </div>

                <div className={styles.social_media_icons_container}>
                    <Link href="https://www.instagram.com/it_konnect/" target="_blank">
                        <a className={styles.social_media_icon}><Image src={instagramLogo} alt="Instagram Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="https://www.facebook.com/itkonnect1" target="_blank">
                        <a className={styles.social_media_icon}><Image src={facebookLogo} alt="Facebook Logo" width={32} height={32} /></a>
                    </Link>
                    
                    {/* <Link href="" target="_blank">
                        <a className={styles.social_media_icon}><Image src={twitterLogo} alt="Twitter Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/" target="_blank">
                        <a className={styles.social_media_icon}><Image src={linkedinLogo} alt="Linkedin Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/" target="_blank">
                        <a className={styles.social_media_icon}><Image src={youtubeLogo} alt="Youtube Logo" width={32} height={32} /></a>
                    </Link> */}
                    
                    <Link href="https://goo.gl/maps/sqqwdBB1Fn85z5MK8" target="_blank">
                        <a className={styles.social_media_icon}><Image src={googleMapsLogo} alt="Google Maps Logo" width={32} height={32} /></a>
                    </Link>
                </div>

                <div>
                    <button 
                        onClick={async () => {
                            const requestBody: RequestServiceRequestBody = {
                                phoneNumber: phoneNumber,
                                name: name,
                                email: email,
                                service: undefined
                            };

                            const response: Response = await fetch(
                                "api/request-service",
                                {
                                    method: "POST",
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(requestBody, null, 2)
                                }
                            );

                            if(response.status != 202) {
                                alert("Error sending email");
                                return;
                            }

                            alert("Your request has been sent");
                        }}
                    >
                        SUBMIT REQUEST
                    </button>
                </div>
            </div>

            <div className={styles.image_container}>
                <Image src={contactUsImage} alt="Laptop service prices in Coimbatore" width={256} height={256} />
            </div>
        </div>
    );
};