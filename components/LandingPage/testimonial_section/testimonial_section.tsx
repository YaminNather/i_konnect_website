import { FC } from "react";
import Image from "next/future/image";
import { testimonials } from "./testimonials";
import { TestimonialCard } from "./testimonial_card";
import styles from "./testimonial_section_styles.module.scss";

import backgroundImage from "../../../public/landing-page/testimonial-section/background.webp";

export const TestimonialSection: FC = (props) => {
    return (
        <section id="testimonial_section" className={styles.testimonial_section}>
            <div className={styles.background}>
                <Image src={backgroundImage} />

                <div className={styles.background_tint} />
            </div>

            <div className={styles.main_content}>
                <h1>What our customers say about us...</h1>

                <div className={styles.testimonials_grid}>
                    {testimonials.map( (value, index, array) => <TestimonialCard key={index} {...value} /> )}
                </div>
            </div>
        </section>
    );
};