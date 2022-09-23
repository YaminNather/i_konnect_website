import classnames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from "../../styles/LandingPage.module.scss";

export interface ColoredBannerProps {
    icon: ReactNode;
    text: ReactNode;
}

export const ColoredBanner: FC<ColoredBannerProps> = (props) => {
    return (
        <div className={classnames(styles.colored_banner)}>
            <div className={classnames("container", styles.container)}>
                {props.icon}

                <h2>{props.text}</h2>
            </div>
        </div>
    );
};