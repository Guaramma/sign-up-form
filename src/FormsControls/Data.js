import React from "react";
import styles from "./Data.module.css";

export const Data = ({ input, meta, label, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={styles.FormContol + " " + (hasError ? styles.error : " ")}>
      <input {...input} {...props} style={{ width: "100%" }} />
    </div>
  );
};
