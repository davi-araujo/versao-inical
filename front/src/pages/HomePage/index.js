import { useContext } from "react";
import { UserContext } from "../../router";
import Button from "../../components/Button";

import styles from "./HomePage.module.css";
import TopBarLogOut from "../../components/TopBarLogOut";
import LinkButton from "../../components/LinkButton";

function HomePage({ setIsLogged }) {
    const {user} = useContext(UserContext);
    let boss = user.adversarios.filter(adversario => adversario.boss === true);
    let botao

    if (boss.length === 0) {
        botao = <Button type="large" bottomSpace={true}>Progresso contra o Boss</Button>
    } else {
        botao = <LinkButton type={"medium"} bottomSpace={true} to={`/adversario/${boss[0].nome}`}>Progresso contra o Boss</LinkButton>
    }



    return (
        <div className={styles.page}>
            <TopBarLogOut user={user} setIsLogged={setIsLogged} to="/perfil" text="Perfil"/>

            <div className={styles.button_container}>
                <LinkButton type="large" to={"/missoes"} bottomSpace={true}>Missões Diárias</LinkButton>
                {botao}
                <LinkButton type="large" to={"/adversarios"}>Progresso contra os adversários</LinkButton>
            </div>

            <div className={styles.buttons}>
                <Button type="large" bottomSpace={true}>Loja</Button>
                <Button type="large" bottomSpace={true}>Vida: {user.vida}</Button>
            </div>
        </div>
    )
}

export default HomePage;