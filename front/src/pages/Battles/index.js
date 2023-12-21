import { useContext } from "react";
import { UserContext } from "../../router";

import styles from "./Battles.module.css";
import TopBar from "../../components/TopBar";
import Mission from "../../components/Mission";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";

function Battles () {
    const {user} = useContext(UserContext);

    return (
        <div>
            <TopBar user={user} to={"/"}/>
            <div className={styles.container}>
                <h1>Missões diárias</h1>
                {user.adversarios.map(adversario => adversario.missoes.map(missao => <Mission key={`${adversario.id}/${missao.id}`} missao={missao}/>))}
                <Button type="small" bottomSpace={true}>Adicionar missão</Button>
                <LinkButton type="small" to={"/realizando-missao"} bottomSpace={true}>Realizar missão</LinkButton>
                <Button type="small" bottomSpace={true}>Calendário</Button>
                <Button type="small" bottomSpace={true}>Histórico</Button>
            </div>
        </div>
    )
}

export default Battles