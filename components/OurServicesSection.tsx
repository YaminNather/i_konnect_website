import classnames from "classnames";
import { FC } from "react";
import styles from "../styles/LandingPage.module.scss";

export const OurServicesSection: FC = (props) => {
    return (
        <section id="our_services_section" className={classnames("container", styles.our_services_section)}>
            <h1>Our Services</h1>

            <h2>
                We can help you with all types of issues you are facing with your tech!
                <br/>From hardware and software to display cables, have a look!
            </h2>

            <div className={styles.services_area}>
                {[...Array(10)].map(
                    () => (
                        <div className={styles.service_card}>
                            <div style={{backgroundColor: "red"}} className={styles.image} />

                            <div className={styles.content}>
                                <p>Full laptop, Desktop & CPU servicing. Routine serving for your tech</p>
                                
                                <button>Get Service Help</button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};