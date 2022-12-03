import { FC, ReactNode, useCallback } from "react";
import Image from "next/future/image";

import styles from "./location_details_styles.module.scss";
import Link from "next/link";

import locationIcon from "../../../../public/landing-page/map-location-marker.svg";
import { Location } from "../location";

export interface LocationDetailsProps {
    location: Location;
}

export const LocationDetails: FC<LocationDetailsProps> = ({location}) => {
    const buildAddress = useCallback(
        (): ReactNode => {
            if(location.mapsLink === "") {
                return (
                    <p className={styles.address}>
                        {location.address.split(", ").map( 
                            (value, index, array) => (
                                <>{value}{(index !== array.length - 1) ? <>,<br/></> : undefined}</>
                            )
                        )}
                    </p>
                );
            }
            else {
                return (
                    <Link href={location.mapsLink as string}>
                        <a className={styles.address}>
                            {location.address.split(", ").map( 
                                (value, index, array) => (
                                    <>{value}{(index !== array.length - 1) ? <>,<br/></> : undefined}</>
                                )
                            )}
                        </a>
                    </Link>
                );
            }
        },
        [location]
    );
    
    return (
        <div className={styles.location_container}>
            <div className={styles.icon_container}>
                <Image src={locationIcon} alt="location-icon.png" className={styles.icon} />

            </div>
            
            <div className={styles.main_content}>
                {buildAddress()}

                <p className={styles.phone_number}>Phone: {location.phoneNumber}</p>
            </div>
        </div>
    );
};