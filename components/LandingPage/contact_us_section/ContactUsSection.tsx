import classnames from "classnames";
import { FC } from "react";
import styles from "../../../styles/LandingPage.module.scss";
import { SubmitContactDetailsForm } from "./SubmitContactDetailsForm";
import { LocationsArea } from "../../common/footer_section/LocationsArea";

export const ContactUsSection: FC = (props) => {
    return (
        <section id="contact_us_section" className={classnames("container", styles.contact_us_section)}>
            <h1>Get in touch with us</h1>

            <SubmitContactDetailsForm />
        </section>
    );  
};