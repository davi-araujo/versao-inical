import styles from "./Button.module.css";

const styleType = {
    medium: {padding: "12px 24px", fontSize: "24px"},
    large: {padding: "32px 24px", fontSize: "24px"},
    small: {padding: "8px 12px", fontSize: "16px"},
}

const Button = ({ children, type, bottomSpace=false, onClick }) => {
    return (
        <button onClick={onClick} style={ bottomSpace ? { ...styleType[type] , marginBottom: "24px" } : { ...styleType[type] }} className={styles.button}>
                {children}
        </button>
    );
}

export default Button;