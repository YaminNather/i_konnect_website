import classnames from "classnames";
import { FC } from "react";
import styles from "../../styles/LandingPage.module.scss";

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
                            <div style={{backgroundColor: "red"}} className={styles.image} />

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
    image: string;
    description: string;
    buttonText: string;
    linkTo: string;
}


const serviceCardsInfo: ServiceCardInfo[] = [
    {
        image: "",
        description: "Full Laptop, Desktop and CPU servicing: Routine serving for your tech",
        buttonText: "Get Service Help",
        linkTo: "/"
    },
    
    {
        image: "",
        description: "Motherboard and Hard disk repairs: Replaced only with genuine parts",
        buttonText: "Get Repair Help",
        linkTo: "/"
    },

    {
        image: "",
        description: "Laptop refurbishing and maintenance: Get your laptop feeling brand new again",
        buttonText: "Get a Call back",
        linkTo: "/"
    },

    {
        image: "",
        description: "Data recovery and backup: Recover lost data and troubleshoot problems",
        buttonText: "Recover Your Data",
        linkTo: "/"
    },

    {
        image: "",
        description: "Buy back old laptops: Bring it in for an evaluation",
        buttonText: "Get A Quote",
        linkTo: "/"
    },

    {
        image: "",
        description: "Software packages: Stop by to learn more",
        buttonText: "Read More",
        linkTo: "/"
    },

    {
        image: "",
        description: "Accessories for your Tech: Wide collection to choose from",
        buttonText: "Check It Out",
        linkTo: "/"
    },

    {
        image: "",
        description: "Upgrades and SSD Upgrades: Speed up your tech with latest upgrades",
        buttonText: "Read More",
        linkTo: "/"
    }
];