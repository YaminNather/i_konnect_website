import Link from "next/link";
import { CSSProperties, FC } from "react";
import { ServiceCentreLocationInfo } from "../ServiceCentreLocationInfo";
import blogStyles from "../../../styles/Blog.module.scss";
import classNames from "classnames";

export interface ServiceCentreLocationsTableProps {
    style?: CSSProperties;
    className?: string;
}

export const ServiceCentreLocationsTable: FC<ServiceCentreLocationsTableProps> = (props) => {
    return (
        <div style={props.style} className={classNames(blogStyles.table_container, props.className)}>
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        
                        <th>Contact Number</th>

                        <th>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {locationsInfo.map(
                        (value, index) => (
                            <tr key={index}>
                                <td>{value.address}</td>
                                
                                <td>{value.contactNumber}</td>
                                
                                <td><Link href={value.link} target="_blank"><a>Open in Map</a></Link></td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

const locationsInfo: ServiceCentreLocationInfo[] = [
    {
        address: "100 FEET Road",
        contactNumber: "9894759600",
        link: "https://goo.gl/maps/hYzW11BADb1fvnARA"
    },
    {
        address: "Ram Nagar",
        contactNumber: "9597561777",
        link: "https://goo.gl/maps/ctxANQXwG2uggVHEA"
    },
    {
        address: "Fun Mall",
        contactNumber: "8645087777",
        link: "https://goo.gl/maps/PY7Vy2A5f35rNbvQA"
    },
    {
        address: "Brook Fields",
        contactNumber: "9566501777",
        link: "https://goo.gl/maps/CqKKujiHyvAtke167"
    },
    {
        address: "100 Feet road",
        contactNumber: "9629439477",
        link: "https://goo.gl/maps/sqqwdBB1Fn85z5MK8"
    },
    {
        address: "Pollachi",
        contactNumber: "9043613077",
        link: ""
    },
    {
        address: "Prozone Mall",
        contactNumber: "9789111877",
        link: ""
    },
];