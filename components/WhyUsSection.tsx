import classnames from "classnames";
import { FC, ReactNode } from "react";
import styles from "../styles/LandingPage.module.scss";

import headphoneWithMicIcon from "../public/why-us-section/headphone-with-mic.png";
import mapIcon from "../public/why-us-section/map.png";
import medalIcon from "../public/why-us-section/medal.png";
import multiCompanyServiceIcon from "../public/why-us-section/multi-company-service.png";
import piggyBankIcon from "../public/why-us-section/piggy-bank.png";
import stopwatchIcon from "../public/why-us-section/stopwatch.png";
import Image, { StaticImageData } from "next/image";

export const WhyUsSection: FC = (props) => {
    return (
        <section id="why_us_section" className={classnames("container", styles.why_us_section)}>
            <h1>Why us?</h1>

            <h2>Your search for computer services is over!</h2>

            <div className={styles.details_grid}>
                {buildDetailsItem(
                    stopwatchIcon,
                    <>With a diagnosis period of fewer than <strong>180 minutes</strong>, we are quick to get to the root of the problem!</>
                )}

                {buildDetailsItem(
                    headphoneWithMicIcon,
                    <>We have <strong>solutions</strong> for all computer servicing from hardware and software installation to being one of the best data recovery center in Coimbatore.</>
                )}

                {buildDetailsItem(
                    medalIcon,
                    <>Home to <strong>certified & highly trained technicians</strong> who believe in trust and transparency!</>
                )}

                {buildDetailsItem(
                    piggyBankIcon,
                    <>State of the art services that are <strong>light on your pockets!</strong></>
                )}

                {buildDetailsItem(
                    mapIcon,
                    <>Need quick laptop repairs? Courtesy of our (very accessible) <strong>8 locations</strong> spread across Coimbatore, we are open seven days a week!</>
                )}

                {buildDetailsItem(
                    multiCompanyServiceIcon,
                    <><strong>Multi-Brand Laptop Service Center:</strong> Dell, Asus, Acer, HP, Lenovo, and many more!</>
                )}
            </div>
        </section>
    );
};

const buildDetailsItem = (image: StaticImageData, text: ReactNode): ReactNode => {
    const splitSrc: string[] = image.src.split("/");

    return (
        <div className={styles.item}>
            {/* <div style={{backgroundColor: "red"}} className={styles.icon} /> */}
            <Image src={image} alt={splitSrc[splitSrc.length - 1]} height="128px" className={styles.icon} />

            <p>{text}</p>
        </div>
    );
};