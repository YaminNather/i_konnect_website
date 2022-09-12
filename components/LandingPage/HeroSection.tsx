import classNames from "classnames";
import { FC, useState, useEffect } from "react";
import Image from "next/future/image";
import styles from "../../styles/LandingPage.module.scss";
import heroImage from "../../public/landing-page/hero.jpeg";
import Link from "next/link";

export const HeroSection: FC = (props) => {
    return (typeof window == "undefined" || window.innerWidth > 599) ? <LargeBreakpointHeroSection /> : <ExtraSmallBreakpointHeroSection />;
};

const LargeBreakpointHeroSection: FC = (props) => {
    const [imageOffset, setImageOffset] = useState<number>(0);

    useEffect(
        () => {
            window.addEventListener( "scroll", (event) => setImageOffset(window.scrollY / 2) );
        },
        []
    );

    return <CommonHeroSection imageOffset={imageOffset} />;
};

const ExtraSmallBreakpointHeroSection: FC = (props) => {
    return <CommonHeroSection imageOffset={0} />;
};



interface CommonHeroSectionProps {
    imageOffset: number;
}

export const CommonHeroSection: FC<CommonHeroSectionProps> = (props) => {
    return (
        <section id="hero_section" className={classNames(styles.hero_section)}>
            <div className={styles.text_area}>
                <div className={styles.text_container}>
                    <h1>Coimbatore&#39;s Most Trusted Laptop Servicing</h1>

                    <h2>
                        With our experienced and trained engineers, we are the 
                        <Link href="/blogs/find-the-best-laptop-service-centre-in-coimbatore"><a className={styles.hidden_link}> best laptop service center in Coimbatore!</a></Link>
                    </h2>
                    
                    <Link href="/#contact_us_section"><button>CONSULT EXPERT</button></Link>
                </div>                            
            </div>

            <div className={styles.image_container}>
                <Image 
                    src={heroImage} alt="Coimbatore's best laptop service center"
                    loading={"eager"} 
                    // style={{transform: `translate(0px, +${props.imageOffset}px)`}} 
                    className={styles.image} 
                />
            </div>
        </section>
    );
};