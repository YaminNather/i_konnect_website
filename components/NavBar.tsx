import classnames from "classnames";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import Image from "next/future/image";
import styles from "../styles/NavBar.module.scss";
import companyLogo from "../public/company-logo.png";
import Link from "next/link";

export const NavBar: FC<PropsWithChildren> = (props) => {
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
                {props.children}
            </nav>
        </div>
    );
};
