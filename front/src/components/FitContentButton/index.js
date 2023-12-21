import { Link } from 'react-router-dom';
import styles from './FitContentButton.module.css';

const FitContentButton = ({ children, to }) => {
    return (
        <Link className={styles.button} to={to}>{children}</Link>
    );
};

export default FitContentButton;