import classnames from "classnames";
import Image, { StaticImageData } from "next/future/image";
import { FC } from "react";
import styles from "../../styles/LandingPage.module.scss";

import getServiceHelpImage from "../../public/landing-page/our-services-section/get-service-help.png";
import getRepairHelpImage from "../../public/landing-page/our-services-section/get-repair-help.png";
import getACallbackImage from "../../public/landing-page/our-services-section/get-a-callback.png";
import recoverYourDataImage from "../../public/landing-page/our-services-section/recover-your-data.png";
import getAQuoteImage from "../../public/landing-page/our-services-section/get-a-quote.png";
import softwarePackagesImage from "../../public/landing-page/our-services-section/software-packages.png";
import accessoriesImage from "../../public/landing-page/our-services-section/accessories.png";
import upgradesImage from "../../public/landing-page/our-services-section/upgrades.png";
import displayIssuesImage from "../../public/landing-page/our-services-section/display-issues.png";
import antivirusImage from "../../public/landing-page/our-services-section/antivirus.png";
import Link from "next/link";

export const OurServicesSection: FC = (props) => {
    return (
        <section id="our_services_section" className={classnames("container", styles.our_services_section)}>
            <h1>Our Services</h1>

            <h2>
                We can help you with all types of issues you are facing with your tech!
                <br/>From hardware and software to display cables, have a look!
            </h2>

            <div className={styles.services_area}>
                {serviceCardsInfo.map(
                    (value, index, array) => (
                        <div key={index} className={styles.service_card}>
                            {/* <div style={{backgroundColor: "red"}} className={styles.image} /> */}

                            <Image src={value.image} className={styles.image} alt={value.alt} />

                            <div className={styles.content}>
                                <p>{value.description}</p>
                                
                                <Link href="/#contact_us_section"><button>{value.buttonText}</button></Link>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

interface ServiceCardInfo {
    image: StaticImageData;
    alt: string;
    description: string;
    buttonText: string;
    linkTo: string;
}


const serviceCardsInfo: ServiceCardInfo[] = [
    {
        image: getServiceHelpImage,
        alt: "Laptop and desktop services in Coimbatore",
        description: "Full Laptop, Desktop and CPU servicing: Routine serving for your tech",
        buttonText: "Get Service Help",
        linkTo: "/"
    },
    
    {
        image: getRepairHelpImage,
        alt: "Chip-level services",
        description: "Motherboard and Hard disk repairs: Replaced only with genuine parts",
        buttonText: "Get Repair Help",
        linkTo: "/"
    },

    {
        image: getACallbackImage,
        alt: "Laptop display services in Coimbatore",
        description: "Laptop refurbishing and maintenance: Get your laptop feeling brand new again",
        buttonText: "Get a Call back",
        linkTo: "/"
    },

    {
        image: recoverYourDataImage,
        alt: "Data recovery and backup services",
        description: "Data recovery and backup: Recover lost data and troubleshoot problems",
        buttonText: "Recover Your Data",
        linkTo: "/"
    },

    {
        image: getAQuoteImage,
        alt: "Sell your old laptops in Coimbatore",
        description: "Buy back old laptops: Bring it in for an evaluation",
        buttonText: "Get A Quote",
        linkTo: "/"
    },

    {
        image: softwarePackagesImage,
        alt: "Install software packages",
        description: "Software packages: Stop by to learn more",
        buttonText: "Read More",
        linkTo: "/"
    },

    {
        image: accessoriesImage,
        alt: "Shop computer accessories in Coimbatore",
        description: "Accessories for your Tech: Wide collection to choose from",
        buttonText: "Check It Out",
        linkTo: "/"
    },

    {
        image: upgradesImage,
        alt: "Upgrade your old laptop",
        description: "Upgrades and SSD Upgrades: Speed up your tech with latest upgrades",
        buttonText: "Read More",
        linkTo: "/"
    },
    {
        image: displayIssuesImage,
        alt: "Fix display issues",
        description: "Display Issues: Broken displays, repairs and more",
        buttonText: "Get a Quote",
        linkTo: "/"
    },    
    {
        image: antivirusImage,
        alt: "Install antivirus in Coimbatore",
        description: "Antivirus: Install and safeguard your laptops and computers",
        buttonText: "Get Protected",
        linkTo: "/"
    },
];