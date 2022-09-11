import classnames from "classnames";
import { FC, useEffect, useState } from "react";
import Image from "next/future/image";
import styles from "../styles/navBar.module.scss";
import companyLogo from "../public/company-logo.png";
import Link from "next/link";

export const NavBar: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    
    useEffect(
        () => {
            const a = () => {
                if(isVisible && window.scrollY >= 100) 
                    setIsVisible(false);
                else if(!isVisible && window.scrollY < 100) 
                    setIsVisible(true);
            };

            window.addEventListener("scroll", a);

            return () => window.removeEventListener("scroll", a);
        },
        [isVisible]
    );

    return (
        <div style={{opacity: (isVisible) ? "1.0" : "0.0"}} className={classnames("container", styles.navbar)}>            
            <Image src={companyLogo} alt="company-logo.png" className={styles.logo} />

            <nav>
                <Link href="/#why_us_section"><a>Why Us</a></Link>
                
                <Link href="/#contact_us_section"><a>Contact Us</a></Link>
                
                <Link href="/#our_services_section"><a>Services</a></Link>
            </nav>
        </div>
    );
};
