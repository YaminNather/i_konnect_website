import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ColoredBanner } from "../components/ColoredBanner";
import { ContactUsSection } from "../components/contact_us_section/ContactUsSection";
import { OurServicesSection } from "../components/OurServicesSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { SpecialOffersSection } from "../components/SpecialOffersSection";
import { WhyUsSection } from "../components/WhyUsSection";
import styles  from "../styles/LandingPage.module.scss";
import medalWithTick from "../public/static/medal-with-tick.svg";
import charger from "../public/static/charger.svg";

const LandingPage: NextPage = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/get0gzv.css" />
            </Head>

            <header>
                <NavBar />
            </header>

            <HeroSection />

            <ColoredBanner
                icon={<Image src={medalWithTick} alt="medal-with-tick.svg" width="128px" height="128px" />}
                text={<>With our up-to-date technology and equipment, repairing your laptops and computers has never been this quick!</>}
            />

            <WhyUsSection />

            <ColoredBanner
                icon={<Image src={charger} alt="charger.svg" width="128px" height="128px" />}
                text={<>We can help you with all types of issues you are facing with your tech. From hardware to software, display cables, have a look!</>}
            />

            <OurServicesSection />            

            <SpecialOffersSection />

            <ContactUsSection />

            <footer className={styles.footer}>All rights reserved 2022 bt IT Konnect</footer>
        </div>
    );
};

export default LandingPage;