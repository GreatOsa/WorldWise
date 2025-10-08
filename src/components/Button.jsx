import styles from "./Button.module.css";

export default function Button({ children, onClick, Type }) {
  return (
    <button className={`${styles.btn} ${styles[Type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
