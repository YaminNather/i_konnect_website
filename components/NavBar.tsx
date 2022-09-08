import classnames from "classnames";
import { FC } from "react";
import styles from "../styles/LandingPage.module.scss";

export const NavBar: FC = () => {
    return (
        <div className={classnames("container", styles.navbar)}>
            <div style={{width: "128px", height: "60px", backgroundColor: "red"}} />
        </div>
    );
};
