import { useContext } from "react";
import { UserContext } from "../../router";
import styles from "./Profile.module.css";

import fotoDePerfil from "./assets/perfil.png";
import TopBarLogOut from "../../components/TopBarLogOut";

function Profile ({ setIsLogged }) {
    const {user} = useContext(UserContext);
    return (
        <div>
            <TopBarLogOut setIsLogged={setIsLogged} user={user} to="/" text="Voltar"/>
            <section className={styles.container}>
                <img alt={`Foto de perfil de ${user.nome}`} src={fotoDePerfil}/>
                <h1>{user.nome}</h1>
            </section>
        </div>
    )
}

export default Profile;