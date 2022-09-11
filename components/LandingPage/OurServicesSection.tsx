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
                        <div className={styles.service_card}>
                            {/* <div style={{backgroundColor: "red"}} className={styles.image} /> */}

                            <Image src={value.image} className={styles.image} alt={value.image.src} />

                            <div className={styles.content}>
                                <p>{value.description}</p>
                                
                                <button>{value.buttonText}</button>
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
    description: string;
    buttonText: string;
    linkTo: string;
}


const serviceCardsInfo: ServiceCardInfo[] = [
    {
        image: getServiceHelpImage,
        description: "Full Laptop, Desktop and CPU servicing: Routine serving for your tech",
        buttonText: "Get Service Help",
        linkTo: "/"
    },
    
    {
        image: getRepairHelpImage,
        description: "Motherboard and Hard disk repairs: Replaced only with genuine parts",
        buttonText: "Get Repair Help",
        linkTo: "/"
    },

    {
        image: getACallbackImage,
        description: "Laptop refurbishing and maintenance: Get your laptop feeling brand new again",
        buttonText: "Get a Call back",
        linkTo: "/"
    },

    {
        image: recoverYourDataImage,
        description: "Data recovery and backup: Recover lost data and troubleshoot problems",
        buttonText: "Recover Your Data",
        linkTo: "/"
    },

    {
        image: getAQuoteImage,
        description: "Buy back old laptops: Bring it in for an evaluation",
        buttonText: "Get A Quote",
        linkTo: "/"
    },

    {
        image: softwarePackagesImage,
        description: "Software packages: Stop by to learn more",
        buttonText: "Read More",
        linkTo: "/"
    },

    {
        image: accessoriesImage,
        description: "Accessories for your Tech: Wide collection to choose from",
        buttonText: "Check It Out",
        linkTo: "/"
    },

    {
        image: upgradesImage,
        description: "Upgrades and SSD Upgrades: Speed up your tech with latest upgrades",
        buttonText: "Read More",
        linkTo: "/"
    },
    {
        image: displayIssuesImage,
        description: "Display Issues: Broken displays, repairs and more",
        buttonText: "Get a Quote",
        linkTo: "/"
    },    
    {
        image: antivirusImage,
        description: "Antivirus: Install and safeguard your laptops and computers",
        buttonText: "Get Protected",
        linkTo: "/"
    },
];