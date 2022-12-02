import classNames from "classnames";
import Image, { StaticImageData } from "next/future/image";
import { CSSProperties, FC } from "react";

import styles from "./testimonial_card_styles.module.scss";

import doubleQuotesImage from "../../../public/landing-page/testimonial-section/double-quotes.png";

export interface TestimonialCardProps {
    style?: CSSProperties;
    className?: string;
    image: StaticImageData;
    name: string;
    testimonial: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = (props) => {
    return (
        <div style={props.style} className={classNames(styles.testimonial_card, props.className)}>
            <div className={styles.image_container}>
                <Image src={props.image} />
            </div>

            <p className={styles.name}>{props.name}</p>

            <p className={styles.testimonial}>{props.testimonial}</p>

            <Image src={doubleQuotesImage} className={styles.double_quotes} />
        </div>
    );
};