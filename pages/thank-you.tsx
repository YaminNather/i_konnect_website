import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/ThankYouPageStyles.module.scss";

import instagramLogo from "../public/social-media-logos/instagram.svg";
import facebookLogo from "../public/social-media-logos/facebook.svg";
import googleMapsLogo from "../public/social-media-logos/google-maps.svg";
import Link from "next/link";
import Head from "next/head";

const ThankYouPage: NextPage = () => {
    return (
        <>
            <Head>
                {/* <!-- Google Tag Manager --> */}
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PG2HL6K');
                        `
                    }}
                />
                {/* <!-- End Google Tag Manager --> */}
            </Head>

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
                <iframe 
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PG2HL6K"
                    height="0" width="0" style={{display: "none", visibility: "hidden"}} />
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}

        <div className={classNames("container", styles.thank_you_page)}>
            <h1>Thanks! We have notified our nearest technician!</h1>

            <p>We look forward to helping you out</p>

            <Link href="/"><a><button>Back to home page</button></a></Link>

            <h2>Let&#39;s Connect</h2>

            <div className={styles.social_media_icons_container}>
                    <Link href="https://www.instagram.com/it_konnect/" target="_blank">
                        <a className={styles.social_media_icon}><Image src={instagramLogo} alt="Instagram Logo" width={32} height={32} /></a>
                    </Link>
                    
                    <Link href="https://www.facebook.com/itkonnect1" target="_blank">
                        <a className={styles.social_media_icon}><Image src={facebookLogo} alt="Facebook Logo" width={32} height={32} /></a>
                    </Link>

                    <Link href="https://goo.gl/maps/sqqwdBB1Fn85z5MK8" target="_blank">
                        <a className={styles.social_media_icon}><Image src={googleMapsLogo} alt="Google Maps Logo" width={32} height={32} /></a>
                    </Link>
                </div>
        </div>
        </>
    );
};

export default ThankYouPage;