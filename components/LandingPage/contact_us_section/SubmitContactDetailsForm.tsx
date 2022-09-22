import { FC, useState } from "react";
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

interface RequestServiceRequest {
    phone: string;
    name: string;
    email: string;
    requestedService: string;
}

export const SubmitContactDetailsForm: FC = (props) => {
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [requestedService, setRequestedService] = useState<string>("");

    return (
        <div className={styles.submit_contact_details_form}>
            <div className={styles.input_fields_area}>
                <div className={styles.input_field_container}>
                    <label htmlFor="phone">Phone*</label>                    
                    
                    <input required={true} name="phone" type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                    <label htmlFor="name">Name*</label>
                    
                    <input required={true} name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                    <label htmlFor="email">Email*</label>
                    
                    <input required={true} name="email" type={"email"} value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className={styles.input_field_container}>
                <label htmlFor="email">How can we help?</label>
                    
                    <input name="requestedService" value={requestedService} onChange={(event) => setRequestedService(event.target.value)} />
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
                            if(phone.length == 0 || name.length == 0 || email.length == 0 || requestedService.length == 0) {
                                alert("Please enter all fields");
                                return;
                            }                            

                            const requestBody: RequestServiceRequest = {
                                phone: phone,
                                name: name,
                                email: email,
                                requestedService: requestedService
                            };

                            try {
                                const response: Response = await fetch(
                                    "https://itkonnect.in/request-service.php",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        } as any,
                                        body: JSON.stringify(requestBody, null, 2)
                                    }
                                );
                                
                                if(response.status < 200 || response.status > 299) {
                                    alert("Server error. Please try again in some time.");
                                    return;
                                }

                                alert("Thank you for contacting us.");
                            }
                            catch(error) {
                                alert("Server error. Please try again in some time.");
                                return;
                            }
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