import classnames from "classnames";
import { FC, ReactNode } from "react";
import styles from "../styles/LandingPage.module.scss";

export const WhyUsSection: FC = (props) => {
    return (
        <section id="why_us_section" className={classnames("container", styles.why_us_section)}>
            <h1>Why us?</h1>

            <h2>Your search for computer services is over!</h2>

            <div className={styles.details_grid}>
                {buildDetailsItem(
                    <>With a diagnosis period of fewer than <strong>180 minutes</strong>, we are quick to get to the root of the problem!</>
                )}

                {buildDetailsItem(
                    <>We have <strong>solutions</strong> for all computer servicing from hardware and software installation to being one of the best data recovery center in Coimbatore.</>
                )}

                {buildDetailsItem(
                    <>Home to <strong>certified & highly trained technicians</strong> who believe in trust and transparency!</>
                )}

                {buildDetailsItem(
                    <>State of the art services that are <strong>light on your pockets!</strong></>
                )}

                {buildDetailsItem(
                    <>Need quick laptop repairs? Courtesy of our (very accessible) <strong>8 locations</strong> spread across Coimbatore, we are open seven days a week!</>
                )}

                {buildDetailsItem(
                    <><strong>Multi-Brand Laptop Service Center:</strong> Dell, Asus, Acer, HP, Lenovo, and many more!</>
                )}
            </div>
        </section>
    );
};

const buildDetailsItem = (text: ReactNode): ReactNode => {
    return (
        <div className={styles.item}>
            <div style={{backgroundColor: "red"}} className={styles.icon} />

            <p>{text}</p>
        </div>
    );
};