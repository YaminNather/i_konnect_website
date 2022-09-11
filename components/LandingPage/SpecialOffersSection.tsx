import classnames from "classnames";
import { FC, useEffect, useState } from "react";
import Image from "next/future/image";
import styles from "../../styles/LandingPage.module.scss";

import specialOffersImage from "../../public/special-offers-section.png";

export const SpecialOffersSection: FC = (props) => {
    return (typeof window == "undefined" || window.innerWidth <= 599.0) ? <SpecialOffersSectionSmall /> : <SpecialOffersSectionLarge />;
};

const SpecialOffersSectionSmall: FC = (props) => {
    return <SpecialOffersSectionCommon imageOffset={0} />;
};


const SpecialOffersSectionLarge: FC = (props) => {
    const [imageOffset, setImageOffset] = useState<number>(0);

    useEffect(
        () => {
            const a = () => {
                setImageOffset(window.scrollY / window.innerHeight / 5);
            };

            window.addEventListener("scroll", a);

            return () => window.removeEventListener("scroll", a);
        }
    );

    return <SpecialOffersSectionCommon imageOffset={imageOffset} />;
};


interface SpecialOffersSectionCommonProps {
    imageOffset: number;
}

export const SpecialOffersSectionCommon: FC<SpecialOffersSectionCommonProps> = (props) => {    
    const imageOffset: number = props.imageOffset * 100;
    console.log(`Scroll = ${imageOffset}`);
    
    return (
        <section id="special_offers_section" className={classnames("container", styles.special_offers_section)}>
            <Image src={specialOffersImage} style={{top: `-${imageOffset}%`}} className={styles.background_image} />

            <h1>Look to sell your old laptops?</h1>

            <h2>Get a quote today with an attractive price!</h2>

            <button>GET DEVICE VALUE</button>
        </section>
    );
}