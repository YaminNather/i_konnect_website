import {FC} from "react";
import styles from "../../styles/LandingPage.module.scss";

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
                    <p>How can we help?*</p>
                    
                    <input />
                </div>

                <div className={styles.social_media_icons_container}>
                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />

                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />
                    
                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />
                    
                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />
                    
                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />

                    <div style={{backgroundColor: "red"}} className={styles.social_media_icon} />
                </div>

                <div>
                    <button>SUBMIT REQUEST</button>
                </div>
            </div>

            <div style={{backgroundColor: "red"}} className={styles.image} />
        </div>
    );
};