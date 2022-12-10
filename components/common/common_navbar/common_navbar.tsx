import Link from "next/link";
import { FC } from "react";
import { NavBar } from "../NavBar";

export const CommonNavBar: FC = (props) => {
    return (
        <NavBar>
            <Link href="/#why_us_section"><a>Why Us</a></Link>
            
            <Link href="/#contact_us_section"><a>Contact Us</a></Link>
            
            <Link href="/#our_services_section"><a>Services</a></Link>
        </NavBar>
    );
};