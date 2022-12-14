import { FC } from "react";
import { LocationsArea } from "./LocationsArea";

import styles from "./footer_section_styles.module.scss";

export const FooterSection: FC = (props) => {
    return (
        <footer className={styles.footer}>
            <LocationsArea />

            <div className={styles.trademark}>All rights reserved 2022 by IT Konnect | Powered By Cynfas</div>
        </footer>
    );
};