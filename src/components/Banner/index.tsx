import { ReactNode } from "react";
import styles from "./Banner.module.css"

export type BannerProps = {
  backgroundImage?: string;
  children?: ReactNode;
}

export const Banner = ({ children, backgroundImage }: BannerProps) => (
    <section className={styles.heroBanner}>
        <div
        className={styles.gridOverlay}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {children}
    </section>
)