import { FC } from "react";
import styles from "../../../styles/LandingPage.module.scss";
import Image from "next/future/image";

import locationIcon from "../../../public/map-location-marker.svg";

export const LocationsArea: FC = (props) => {
    return (
        <div className={styles.locations_area}>
            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>No 170A, Near Karpagam Complex,<br/>Coimbatore,<br/>641012</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>74c, 100 Feet Road,<br/> Gandhipuram,<br/>Coimbatore  641012</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>1939, Trichy Road,<br/>Ramanathapuram,<br/>Coimbatore  641045</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>No 2, 3rd floor,<br/>Avinashi Road, Fun Republic Mall,<br/>Peelamedu,<br/>Coimbatore 641004</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>45, Raja Complex,<br/>New Scheme Road,<br/>Opp. Tamilnadu Mercantile Bank Limited,<br/>Pollachi  642001</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>Prozone Mall,<br/>Old Sivananda Mills,<br/>Sivanandapuram,<br/>Sathy Road,<br/>Coimbatore  641035</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>No 15, Sarojini Street,<br/>Coimbatore  641009</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} className={styles.icon} />
                </div>

                <p className={styles.address}>T6, 3rd Floor,<br/>Brooke Fields Plaza, 67/71,<br/>Krishnasamy Road,<br/>Coimbatore  641001</p>
            </div>
        </div>
    );
};