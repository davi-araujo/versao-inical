import { useContext } from "react";
import { UserContext } from "../../router";

import TopBar from "../../components/TopBar";

import styles from "./EnemyPage.module.css";
import Battle from "../../components/Battle";
import Button from "../../components/Button";

function EnemyPage ({ adversario }) {
    const {user, login} = useContext(UserContext);
    
    let notaTotal = 0;
    let pesoTotal = 0;

    function defineBoss () {
        const newUser = structuredClone(user);
        newUser.adversarios.map(adversarioMap => {
            if (adversarioMap.boss === true) {
                fetch(`http://localhost:3001/adversario/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: adversarioMap.id, boss: false }) });
                adversarioMap.boss = false;
            }
            return adversarioMap;
        })
        fetch(`http://localhost:3001/adversario/update`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: adversario.id, boss: true }) });
        newUser.adversarios.map(adversarioMap => {
            if (adversarioMap.id === adversario.id) {
                adversarioMap.boss = true;
            }
            return adversarioMap;
        })
        login(newUser);
    }

    return (
        <div>
            <TopBar user={user} to={"/adversarios"}/>
            <div className={styles.container}>
                <h1>{adversario.nome}</h1>
                {adversario.batalhas.map(batalha => {
                    notaTotal += batalha.nota * batalha.peso;
                    pesoTotal += batalha.peso;
                    return <Battle key={batalha.id} nome={batalha.nome} nota={batalha.nota} espaco={true}/>
                })}
                <Battle nome={"Resultado"} nota={(notaTotal / pesoTotal).toFixed(2)} espaco={true}/>

                <Button type="small" bottomSpace={true} onClick={() => defineBoss()}>Definir como boss</Button>
                <Button type="small" bottomSpace={true}>Histórico</Button>
                <Button type="small" bottomSpace={true}>Alterar resultado das batalhas</Button>
                <Button type="small">Adicionar batalha</Button>
            </div>
        </div>
    )
}

export default EnemyPage;