import { FC } from "react";
import { testimonials } from "./testimonials";
import { TestimonialCard } from "./testimonial_card";
import styles from "./testimonial_section_styles.module.scss";

export const TestimonialSection: FC = (props) => {
    return (
        <section id="testimonial_section" className={styles.testimonial_section}>
            <h1>What our customers say about us...</h1>

            <div className={styles.testimonials_grid}>
                {testimonials.map( (value, index, array) => <TestimonialCard {...value} /> )}
            </div>
        </section>
    );
};