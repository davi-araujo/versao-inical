import { useContext } from "react";
import { UserContext } from "../../router";

import styles from "./DoingMission.module.css";
import TopBar from "../../components/TopBar";
import Stopwatch from "../../components/Stopwatch";

function DoingMission () {
    const {user} = useContext(UserContext);

    return (
        <div>
            <TopBar user={user} to={"/missoes"}/>
            <div className={styles.container}>
                <h1>Hora de focar!</h1>
                <h4>Está na hora de se concentrar 100% na atividade para não perder vida!</h4>
                <Stopwatch />
            </div>
        </div>
    )
}

export default DoingMission;