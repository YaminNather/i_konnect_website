import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from "../styles/LandingPage.module.scss";

export interface ColoredBannerProps {
    icon: ReactNode;
    text: ReactNode;
}

export const ColoredBanner: FC<ColoredBannerProps> = (props) => {
    return (
        <div className={classNames("container", styles.colored_banner)}>
            {props.icon}

            <h2 className={styles.text_container}>{props.text}</h2>
        </div>
    );
};