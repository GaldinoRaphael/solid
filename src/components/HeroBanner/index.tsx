import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";
import { Banner, BannerProps } from "../Banner";

type HeroBannerProps = {
  mainImage?: string;
  children?: ReactNode;
} & BannerProps;

const HeroBanner = ({
  mainImage,
  children,
  ...props
}: HeroBannerProps) => {
  return (
    <Banner {...props}>
      <div className={styles.heroContent}>
        <div className={styles.mainImageWrapper}>
          <img
            src={mainImage}
            alt="Hora de abraças seu lado geek!"
            className={styles.mainImage}
          />
        </div>

        <div className={styles.textContent}>{children}</div>
      </div>
    </Banner>
  );
};

export default HeroBanner;
