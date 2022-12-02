import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import styles from "../../../styles/LandingPage.module.scss";

import contactUsImage from "../../../public/landing-page/contact-us.png";

import instagramLogo from "../../../public/social-media-logos/instagram.svg";
import facebookLogo from "../../../public/social-media-logos/facebook.svg";
// import twitterLogo from "../../../public/social-media-logos/twitter.svg";
// import linkedinLogo from "../../../public/social-media-logos/linkedin.svg";
// import youtubeLogo from "../../../public/social-media-logos/youtube.svg";
import googleMapsLogo from "../../../public/social-media-logos/google-maps.svg";

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
        <form className={styles.submit_contact_details_form} method="POST" action="/contact-us.php">
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
                    <button id="submit-request-button">SUBMIT REQUEST</button>
                </div>
            </div>

            <div className={styles.image_container}>
                <Image src={contactUsImage} alt="Laptop service prices in Coimbatore" width={256} height={256} />
            </div>
        </form>
    );
};