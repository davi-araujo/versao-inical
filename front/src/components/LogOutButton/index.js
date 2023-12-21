import { Link } from 'react-router-dom';
import styles from './LogOutButton.module.css';

function LogOutButton ({ setIsLogged }) {
    return (
        <Link className={styles.button} to={"/"} onClick={() => setIsLogged(false)}>Sair</Link>
    );
};

export default LogOutButton;
