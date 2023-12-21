import styles from "./Coin.module.css";

import coin from './assets/moeda.png'

function Coin ({ number }) {
    return (
        <div className={styles.container}>
            <p className={styles.number}>{number}</p>
            <img alt='Moeda' src={coin} className={styles.coin}/>
        </div>
    );
}

export default Coin;