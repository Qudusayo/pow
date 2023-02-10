import Image from "next/image";
import React from "react";
import styles from "./StatCard.module.scss";

export default function StatCard() {
  return (
    <div className={styles.StatCard}>
      <div className={styles.StatCardSector}>
        <Image
          className={styles.StatCardSectorIcon}
          src="/target.svg"
          width={50}
          height={50}
          alt="target"
        />
        <div>
          <h2>Project Success</h2>
          <span>0</span>
        </div>
      </div>
      <div className={styles.StatCardSector}>
        <Image
          className={styles.StatCardSectorIcon}
          src="/rating.svg"
          width={50}
          height={50}
          alt="target"
        />
        <div>
          <h2>Total Services</h2>
          <span>0</span>
        </div>
      </div>
      <div className={styles.StatCardSector}>
        <Image
          className={styles.StatCardSectorIcon}
          src="/target.svg"
          width={50}
          height={50}
          alt="target"
        />
        <div>
          <h2>Completed Service</h2>
          <span>0</span>
        </div>
      </div>
      <div className={styles.StatCardSector}>
        <Image
          className={styles.StatCardSectorIcon}
          src="/verify-receipt.svg"
          width={50}
          height={50}
          alt="target"
        />
        <div>
          <h2>In Queue Service</h2>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
