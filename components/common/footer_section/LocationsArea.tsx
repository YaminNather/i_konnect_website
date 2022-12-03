import { FC } from "react";
import styles from "./footer_section_styles.module.scss";
import Image from "next/future/image";

import locationIcon from "../../../public/landing-page/map-location-marker.svg";
import Link from "next/link";
import classNames from "classnames";

import locationsJson from "./locations.json";
import { LocationDetails } from "./location_details/location_details";
import { Location } from "./location";

export const LocationsArea: FC = (props) => {
    return (
        <div className={styles.locations_area}>
            <div className={classNames("container", styles.container)}>
                {locationsJson.map((value, index, array) => <LocationDetails location={value as Location} />)}
            </div>
        </div>
    );
};