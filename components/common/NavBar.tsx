import classnames from "classnames";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import Image from "next/future/image";
import styles from "../../styles/NavBar.module.scss";
import companyLogo from "../../public/itkonnectcoimbatore.png";
import Link from "next/link";
import classNames from "classnames";

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
        <div style={{opacity: (isVisible) ? "1.0" : "0.0"}} className={styles.navbar}>
            <div className={classNames("container", styles.container)}>
                <Link href="/">
                    <a className={styles.logo_container}><Image src={companyLogo} alt="company-logo.png" className={styles.logo} /></a>
                </Link>

                <nav>
                    {props.children}
                </nav>
            </div>
        </div>
    );
};
