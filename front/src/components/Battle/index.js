import styles from "./Battle.module.css";

function Battle ({ nome, nota, espaco = false }) {
    return (
        <div className={styles.area} style={ espaco ? { marginBottom: "16px" } : {} }>
            <p>{nome}</p>
            <div className={styles.divisoria}></div>
            <p>{nota}</p>
        </div>
    )
}

export default Battle;