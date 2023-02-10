import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  title,
  full,
  icon,
}: {
  title: string;
  full?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button className={[full ? styles.ButtonFull : styles.Button].join(" ")}>
      {title}
      {icon}
    </button>
  );
}
