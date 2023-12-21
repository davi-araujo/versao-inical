import Coin from "../Coin";
import FitContentButton from "../FitContentButton";
import LogOutButton from "../LogOutButton";
import styles from './TopBarLogOut.module.css';

function TopBarLogOut ({ setIsLogged, user, to, text }) {
    return (
        <div className={styles.topBarLogOut}>
            <FitContentButton to={to}>{text}</FitContentButton>
            <LogOutButton setIsLogged={setIsLogged}>Sair</LogOutButton>
            <Coin number={user.coin}/>
        </div>
    );
}

export default TopBarLogOut;