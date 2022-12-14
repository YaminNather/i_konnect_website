import classnames from "classnames";
import { FC, ReactNode } from "react";
import styles from "../../styles/LandingPage.module.scss";

import headphoneWithMicIcon from "../../public/landing-page/why-us-section/headphone-with-mic.png";
import mapIcon from "../../public/landing-page/why-us-section/map.png";
import medalIcon from "../../public/landing-page/why-us-section/medal.png";
import multiCompanyServiceIcon from "../../public/landing-page/why-us-section/multi-company-service.png";
import piggyBankIcon from "../../public/landing-page/why-us-section/piggy-bank.png";
import stopwatchIcon from "../../public/landing-page/why-us-section/stopwatch.png";
import Image, { StaticImageData } from "next/future/image";
import Link from "next/link";

export const WhyUsSection: FC = (props) => {
    return (
        <section id="why_us_section" className={classnames("container", styles.why_us_section)}>
            <h1>Why us?</h1>

            <h2>Your search for computer services is over!</h2>

            <div className={styles.details_grid}>
                {buildDetailsItem(
                    stopwatchIcon,
                    "Fastest laptop service center in Coimbatore",
                    <>With a diagnosis period of fewer than <strong>180 minutes</strong>, we are quick to get to the root of the problem!</>
                )}

                {buildDetailsItem(
                    headphoneWithMicIcon,
                    "Data recovery centre in Coimbatore",
                    <>We have <strong>solutions</strong> for all computer servicing from hardware and software installation to being one of the best data recovery center in Coimbatore.</>
                )}

                {buildDetailsItem(
                    medalIcon,
                    "Authorized service center in Coimbatore",
                    <>Home to <strong>certified & highly trained technicians</strong> who believe in 
                    <Link href="/blogs/looking-for-a-trusted-laptop-service-centre-in-coimbatore"><a className={styles.hidden_link}> trust and transparency</a></Link>!</>
                )}

                {buildDetailsItem(
                    piggyBankIcon,
                    "Sell old laptop in Coimbatore",
                    <>State of the art services that are <strong>light on your pockets!</strong></>
                )}

                {buildDetailsItem(
                    mapIcon,
                    "Laptop repair services in Coimbatore",
                    <>Need quick laptop repairs? Courtesy of our (very accessible) <strong>8 locations</strong> spread across Coimbatore, we are open seven days a week!</>
                )}

                {buildDetailsItem(
                    multiCompanyServiceIcon,
                    "Authorized HP service center in Coimbatore",
                    <>
                    <strong>Multi-Brand Laptop Service Center:</strong> Dell, Asus, Acer, 
                    <Link href="/blogs/list-of-hp-authorized-service-centres-in-coimbatore"><a className={styles.hidden_link}> HP</a></Link>, Lenovo, and many more!
                    </>
                )}
            </div>
        </section>
    );
};

const buildDetailsItem = (image: StaticImageData, alt: string, text: ReactNode): ReactNode => {
    return (
        <div className={styles.item}>
            {/* <div style={{backgroundColor: "red"}} className={styles.icon} /> */}
            <Image src={image} alt={alt} height={128} className={styles.icon} />

            <p>{text}</p>
        </div>
    );
};