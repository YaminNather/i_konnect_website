import classNames from "classnames";
import { FC } from "react";
import styles from "../styles/LandingPage.module.scss";

export const HeroSection: FC = (props) => {
    return (
        <section id="hero_section" className={classNames("container", styles.hero_section)}>
            <div className={styles.text_area}>
                <div className={styles.text_container}>
                    <h1>Coimbatore's Most Trusted Laptop Servicing</h1>

                    <h2>With our experienced and trained engineers, we are the best laptop service center in Coimbatore!</h2>

                    <button>CONSULT EXPERT</button>
                </div>
            </div>

            <div style={{ backgroundColor: "red" }} className={styles.image} />
        </section>
    );
};