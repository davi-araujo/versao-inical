import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const styleType = {
    medium: {padding: "12px 24px", fontSize: "24px"},
    large: {padding: "32px 24px", fontSize: "24px"},
    small: {padding: "8px 12px", fontSize: "16px"},
}

const LinkButton = ({ children, type, bottomSpace=false, to }) => {
    return (
        <Link style={ bottomSpace ? { ...styleType[type] , marginBottom: "24px" } : { ...styleType[type] }} className={styles.button} to={to}>
                {children}
        </Link>
    );
}

export default LinkButton;