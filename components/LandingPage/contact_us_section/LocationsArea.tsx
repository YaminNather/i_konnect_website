import { FC } from "react";
import styles from "../../../styles/LandingPage.module.scss";
import Image from "next/future/image";

import locationIcon from "../../../public/landing-page/map-location-marker.svg";
import Link from "next/link";

export const LocationsArea: FC = (props) => {
    return (
        <div className={styles.locations_area}>
            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <Link href="https://goo.gl/maps/hYzW11BADb1fvnARA"><a className={styles.address}>No 170A, Near Karpagam Complex,<br/>Coimbatore,<br/>641012</a></Link>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <Link href="https://goo.gl/maps/sqqwdBB1Fn85z5MK8"><a className={styles.address}>74c, 100 Feet Road,<br/> Gandhipuram,<br/>Coimbatore  641012</a></Link>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <p className={styles.address}>1939, Trichy Road,<br/>Ramanathapuram,<br/>Coimbatore  641045</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <Link href="https://goo.gl/maps/PY7Vy2A5f35rNbvQA">
                    <a className={styles.address}>No 2, 3rd floor,<br/>Avinashi Road, Fun Republic Mall,<br/>Peelamedu,<br/>Coimbatore 641004</a>
                </Link>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <p className={styles.address}>45, Raja Complex,<br/>New Scheme Road,<br/>Opp. Tamilnadu Mercantile Bank Limited,<br/>Pollachi  642001</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <p className={styles.address}>Prozone Mall,<br/>Old Sivananda Mills,<br/>Sivanandapuram,<br/>Sathy Road,<br/>Coimbatore  641035</p>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <Link href="https://goo.gl/maps/ctxANQXwG2uggVHEA"><a className={styles.address}>No 15, Sarojini Street,<br/>Coimbatore  641009</a></Link>
            </div>

            <div className={styles.location_container}>
                <div className={styles.icon_container}>
                    <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />
                </div>

                <Link href="https://goo.gl/maps/CqKKujiHyvAtke167">
                    <a className={styles.address}>T6, 3rd Floor,<br/>Brooke Fields Plaza, 67/71,<br/>Krishnasamy Road,<br/>Coimbatore  641001</a>
                </Link>
            </div>
        </div>
    );
};