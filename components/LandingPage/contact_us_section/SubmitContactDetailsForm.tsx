import {FC} from "react";
import Link from "next/link";
import Image from "next/future/image";
import styles from "../../../styles/LandingPage.module.scss";

import contactUsImage from "../../../public/landing-page/contact-us.png";

import instagramLogo from "../../../public/landing-page/social-media-logos/instagram.svg";
import facebookLogo from "../../../public/landing-page/social-media-logos/facebook.svg";
import twitterLogo from "../../../public/landing-page/social-media-logos/twitter.svg";
import linkedinLogo from "../../../public/landing-page/social-media-logos/linkedin.svg";
import youtubeLogo from "../../../public/landing-page/social-media-logos/youtube.svg";
import googleMapsLogo from "../../../public/landing-page/social-media-logos/google-maps.svg";

export const SubmitContactDetailsForm: FC = (props) => {
    return (
        <div className={styles.submit_contact_details_form}>
            <div className={styles.input_fields_area}>
                <div className={styles.input_field_container}>
                    <p>Phone*</p>
                    
                    <input type={"number"} />
                </div>

                <div className={styles.input_field_container}>
                    <p>Name*</p>
                    
                    <input />
                </div>

                <div className={styles.input_field_container}>
                    <p>Email*</p>
                    
                    <input type={"email"} />
                </div>

                <div className={styles.input_field_container}>
                    <p>How can we help?</p>
                    
                    <input />
                </div>

                <div className={styles.social_media_icons_container}>
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={instagramLogo} alt="Instagram Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={facebookLogo} alt="Facebook Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={twitterLogo} alt="Twitter Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={linkedinLogo} alt="Linkedin Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={youtubeLogo} alt="Youtube Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.social_media_icon}><Image src={googleMapsLogo} alt="Google Maps Logo" width={32} height={32} /></a>
                    </Link>
                </div>

                <div>
                    <button>SUBMIT REQUEST</button>
                </div>
            </div>

            <div className={styles.image_container}>
                <Image src={contactUsImage} alt="Contact Us" width={256} height={256} />
            </div>
        </div>
    );
};