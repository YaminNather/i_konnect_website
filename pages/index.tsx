import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { ColoredBanner } from "../components/LandingPage/ColoredBanner";
import { ContactUsSection } from "../components/LandingPage/contact_us_section/ContactUsSection";
import { OurServicesSection } from "../components/LandingPage/OurServicesSection";
import { HeroSection } from "../components/LandingPage/HeroSection";
import { NavBar } from "../components/NavBar";
import { SpecialOffersSection } from "../components/LandingPage/SpecialOffersSection";
import { WhyUsSection } from "../components/LandingPage/WhyUsSection";
import styles  from "../styles/LandingPage.module.scss";
import medalWithTick from "../public/landing-page/medal-with-tick.svg";
import charger from "../public/landing-page/charger.svg";
import Link from "next/link";

const LandingPage: NextPage = () => {
    return (
        <div>
            <Head>
                <meta 
                    name="description" 
                    content="IT Konnect is a trusted laptop service center in Coimbatore, that can help you with any issues you might have with your laptop or desktop."
                />
                <title>Coimbatore&#39;s Most Trusted Laptop Servicing | IT Konnect</title>
            </Head>

            <header>
                <NavBar>
                    <Link href="/#why_us_section"><a>Why Us</a></Link>
                    
                    <Link href="/#contact_us_section"><a>Contact Us</a></Link>
                    
                    <Link href="/#our_services_section"><a>Services</a></Link>
                </NavBar>
            </header>

            <HeroSection />

            <ColoredBanner
                icon={<Image src={medalWithTick} alt="medal-with-tick.svg" width={128} height={128} />}
                text={<>With our up-to-date technology and equipment, repairing your laptops and computers has never been this quick!</>}
            />

            <WhyUsSection />

            <ColoredBanner
                icon={<Image src={charger} alt="charger.svg" width={128} height={128} />}
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