import { FC, ReactNode } from "react";
import styles from "./footer_section_styles.module.scss";
import classNames from "classnames";

import locationsJson from "./locations.json";
import { LocationDetails } from "./location_details/location_details";
import { Location } from "./location";

export const LocationsArea: FC = (props) => {
    let details: ReactNode[] = locationsJson.map(
        (value, index, array) => {
            return (
                <LocationDetails key={index} location={value as Location} className={styles.location_detail} />
            );
        }
    );

    let lastRow: ReactNode[] = details.splice(details.length - 4, 4);

    return (
        <div className={styles.locations_area}>
            <div className={classNames("container", styles.container)}>
                {details}

                <div className={styles.last_row}>
                    {lastRow}
                </div>
            </div>
        </div>
    );
};