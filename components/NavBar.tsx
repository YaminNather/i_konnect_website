import classnames from "classnames";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/LandingPage.module.scss";
import companyLogo from "../public/company-logo.png";

export const NavBar: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);    
    
    useEffect(
        () => {
            window.addEventListener(
                "scroll", 
                (event) => {
                    if(isVisible && window.scrollY >= 100) setIsVisible(false);
                    else if(!isVisible && window.scrollY < 100) setIsVisible(true);
                }
            );
        },
        []
    );

    return (
        <div style={{opacity: (isVisible) ? "1.0" : "0.0"}} className={classnames("container", styles.navbar)}>            
            <Image src={companyLogo} />
        </div>
    );
};
