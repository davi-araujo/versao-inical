import { UserContext } from "../../router";
import { useContext } from "react";

import styles from "./Mission.module.css";

function Mission ({ missao }) {
    const {user, login} = useContext(UserContext);

    function fazendoMissao () {
        const newUser = structuredClone(user);

        if (missao.feita) {
            fetch(`http://localhost:3001/missao/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: missao.id, feita: false }) });
            fetch(`http://localhost:3001/updatealuno/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: missao.id, coin: newUser.coin - 5 }) });
            newUser.coin -= 5;
            newUser.adversarios.map(adversarioMap => adversarioMap.missoes.map(missaoMap => {
                if (missaoMap.id === missao.id) {
                    missaoMap.feita = false;
                }
                return missaoMap;
            }));
        } else {
            fetch(`http://localhost:3001/missao/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: missao.id, feita: true }) });
            fetch(`http://localhost:3001/updatealuno/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: missao.id, coin: newUser.coin + 5 }) });
            newUser.coin += 5;
            newUser.adversarios.map(adversarioMap => adversarioMap.missoes.map(missaoMap => {
                if (missaoMap.id === missao.id) {
                    missaoMap.feita = true;
                }
                return missaoMap;
            }));
        }
        console.log("teste");

        login(newUser);
    }

    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" onChange={() => fazendoMissao()} value={missao.feita} checked={missao.feita}/>
                <span className={styles.checkmark}></span>
                {missao.nome}
            </label>
        </div>
    )
}

export default Mission;