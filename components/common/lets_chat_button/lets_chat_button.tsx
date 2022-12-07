import { FC } from "react";
import Image from "next/future/image";

import styles from "./lets_chat_button_styles.module.scss";

import speechBubbleImage from "../../../public/speech-bubble.svg";

export const LetsChatButton: FC = (props) => {
    return (
        <a href="https://wa.link/3nfbur" target="_blank" rel="noreferrer">
            <button className={styles.lets_chat_button}>
                <Image src={speechBubbleImage} />
                Let&apos;s Chat!
            </button>
        </a>
    );
};