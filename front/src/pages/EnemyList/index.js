import { useContext } from "react";
import { UserContext } from "../../router";
import LinkButton from "../../components/LinkButton";
import TopBar from "../../components/TopBar";

import styles from "./EnemyList.module.css";
import FitContentButton from "../../components/FitContentButton";

function EnemyList () {
    const {user} = useContext(UserContext);
    
    return (
        <div>
            <TopBar user={user} to={"/"}/>
            <div className={styles.container}>
                {user.adversarios.map(adversario => {
                    return <LinkButton key={adversario.nome} type={"medium"} bottomSpace={true} to={`/adversario/${adversario.nome}`}>{adversario.nome}</LinkButton>
                })}
                <FitContentButton>Adicionar adversário</FitContentButton>
            </div>
        </div>
    );
}

export default EnemyList;