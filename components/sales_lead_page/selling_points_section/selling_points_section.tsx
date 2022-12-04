import classNames from "classnames";
import { FC } from "react";
import Image from "next/future/image";

import styles from "./selling_points_section_styles.module.scss";

import backgroundImage from "../../../public/sales-lead-page/selling-points-section/background.webp";

export const SellingPointsSection: FC = (props) => {
    return (
        <section id="selling_points_section" className={styles.selling_points_section}>
            <Image src={backgroundImage} className={styles.background_image} />

            <div className={styles.main_content}>
                <div className={classNames("container", styles.container)}>
                    <div className={styles.grid_cell}>
                        <strong>Diagonised in less than 4 hours</strong>

                        <p>IT Konnect offers top of the line services and spares some of the most well-known brands across Coimbatore</p>
                    </div>
                    
                    <div className={styles.grid_cell}>
                        <strong>Very accessible</strong>

                        <p>We are spread accross 8 locations in Coimbatore and we are open seven days in a week</p>
                    </div>
                </div>
            </div>
        </section>
    );
};