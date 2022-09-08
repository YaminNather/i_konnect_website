import classnames from "classnames";
import { FC } from "react";
import styles from "../styles/LandingPage.module.scss";

export const SpecialOffersSection: FC = (props) => {
    return (
        <section id="special_offers_section" className={classnames("container", styles.special_offers_section)}>
            <h1>Look to sell your old laptops?</h1>

            <h2>Get a quote today with an attractive price!</h2>

            <button>GET DEVICE VALUE</button>
        </section>
    );
};