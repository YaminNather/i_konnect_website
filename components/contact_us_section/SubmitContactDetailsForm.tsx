import {FC} from "react";
import Link from "next/link";
import Image from "next/future/image";
import styles from "../../styles/LandingPage.module.scss";

import contactUsImage from "../../public/contact-us.png";

import instagramLogo from "../../public/social-media-logos/instagram.svg";
import facebookLogo from "../../public/social-media-logos/facebook.svg";
import twitterLogo from "../../public/social-media-logos/twitter.svg";
import linkedinLogo from "../../public/social-media-logos/linkedin.svg";
import youtubeLogo from "../../public/social-media-logos/youtube.svg";
import tiktokLogo from "../../public/social-media-logos/tiktok.svg";

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
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={instagramLogo} width={32} height={32} />
                    </Link>
                    
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={facebookLogo} width={32} height={32} />
                    </Link>
                    
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={twitterLogo} width={32} height={32} />
                    </Link>
                    
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={linkedinLogo} width={32} height={32} />
                    </Link>
                    
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={youtubeLogo} width={32} height={32} />
                    </Link>
                    
                    <Link href="/" className={styles.social_media_icon}>
                        <Image src={tiktokLogo} width={32} height={32} />
                    </Link>
                </div>

                <div>
                    <button>SUBMIT REQUEST</button>
                </div>
            </div>

            <div className={styles.image_container}>
                <Image src={contactUsImage} width={256} height={256} />
            </div>
        </div>
    );
};