import React from "react";
import styles from "./Input.module.css";

export const Input = ({ input, meta, label, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={styles.FormContol + " " + (hasError ? styles.error : " ")}>
      <label>{label}</label>
      {hasError && <span>{meta.error}</span>}
      <input {...input} {...props} style={{ width: "100%" }} />
    </div>
  );
};
