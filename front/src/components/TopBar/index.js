import Coin from "../Coin";
import FitContentButton from "../FitContentButton";
import styles from './TopBarLogOut.module.css';

function TopBar ({ user, to }) {
    return (
        <div className={styles.topBarLogOut}>
            <FitContentButton to={to}>Voltar</FitContentButton>
            <Coin number={user.coin}/>
        </div>
    );
}

export default TopBar;