import { FC } from "react";
import Image from "next/future/image";

import styles from "./sales_lead_section_styles.module.scss";

import repairRepairImage from "../../../public/sales-lead-page/sales-lead-section/repair-repair.png";
import { GetAQuoteForm } from "./get_a_quote_form/get_a_quote_form";

import authorizedServiceVector from "../../../public/sales-lead-page/sales-lead-section/authorized-service.svg";
import certifiedTechnicianVector from "../../../public/sales-lead-page/sales-lead-section/certified-technician.svg";
import fastestServiceVector from "../../../public/sales-lead-page/sales-lead-section/fastest-service.svg";
import genuinePartsVector from "../../../public/sales-lead-page/sales-lead-section/genuine-parts.svg";

export const SalesLeadSection: FC = (props) => {
    return (
        <section id="sales_lead_section" className={styles.sales_lead_section}>
            <div className={styles.left_grid_cell}>
                <h1>A complete solution for your laptops</h1>

                <h2>
                    <span className={styles.service_center_count_container}>
                        <b>8</b>
                    </span>
                    Server centers across <b>Coimbatore</b>
                </h2>

                <Image src={repairRepairImage} className={styles.repair_repair_image} />

                <div className={styles.selling_points_grid}>
                    <div className={styles.grid_cell}>
                        <Image src={genuinePartsVector} />

                        <p>Genuine Parts</p>
                    </div>
                    
                    <div className={styles.grid_cell}>
                        <Image src={authorizedServiceVector} />

                        <p>Authorized Service</p>
                    </div>
                    
                    <div className={styles.grid_cell}>
                        <Image src={fastestServiceVector} />

                        <p>Fastest Service</p>
                    </div>
                    
                    <div className={styles.grid_cell}>
                        <Image src={certifiedTechnicianVector} />

                        <p>Certified Technician</p>
                    </div>
                </div>
            </div>

            <div className={styles.right_grid_cell}>
                <GetAQuoteForm className={styles.get_a_quote_form} />
            </div>
        </section>
    );
};