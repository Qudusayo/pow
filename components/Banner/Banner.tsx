import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

import styles from "./Banner.module.scss";
import { BsFillStarFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerContent}>
        <Image src={"/pp.png"} width={120} height={120} alt="profile-pic" />
        <div className={styles.BannerContentUser}>
          <div>
            <h2>Qudusayo</h2>
            <span>FrontEnd Developer</span>
          </div>
          <div className={styles.BannerContentUserReview}>
            <div>
              <BsFillStarFill fill="#dcc157" />
              <span>4.0 (1 review)</span>
            </div>
            <div>
              <HiOutlineLocationMarker />
              <span>New York</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BannerContent}>
        <Button title="Invite" />
        <Button title="Message" />
      </div>
    </div>
  );
}
