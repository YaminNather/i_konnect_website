import classnames from "classnames";
import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/LandingPage.module.scss";
import companyLogo from "../public/company-logo.png";

export const NavBar: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    
    useEffect(
        () => {
            const a = () => {
                if(isVisible && window.scrollY >= 100) 
                    setIsVisible(false);
                else if(!isVisible && window.scrollY < 100) 
                    setIsVisible(true);

                console.log(`scrollY = ${window.scrollY}, isVisible = ${isVisible}`);
            };

            window.addEventListener("scroll", a);

            return () => window.removeEventListener("scroll", a);
        },
        [isVisible]
    );

    return (
        <div style={{opacity: (isVisible) ? "1.0" : "0.0"}} className={classnames("container", styles.navbar)}>            
            <Image src={companyLogo} alt="company-logo.png" />
        </div>
    );
};
