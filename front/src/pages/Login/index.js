import { useContext, useState } from "react";
import Button from "../../components/Button";
import FitContentButton from "../../components/FitContentButton";
import TextField from "../../components/TextField";
import styles from "./Login.module.css";

import { useForm } from "react-hook-form";
import { UserContext } from "../../router";

const Login = ({ setIsLogged }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState(false);

    const user = useContext(UserContext);

    async function buscandoUsuario (data) {
        const response = await fetch(`http://localhost:3001/getaluno/${data.email}`)
        .then(((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }))
        .catch((error) => {
            setLoginError(true);
        });

        if (response.senha === data.senha) {
            console.log(user);
            user.login(response);
            setIsLogged(true);
        } else {
            setLoginError(true);
        }
    }

    return (
        <div style={styles}>
            <div className={styles.container}>
                <h1>Bem vindo! Faça seu login.</h1>
                <form onSubmit={handleSubmit(buscandoUsuario)}>
                    <TextField placeholder="Email" bottomSpace={true} register={register("email", { required: true })} />
                    {errors.email && <span>Insira seu email</span>}
                    <TextField placeholder="Senha" bottomSpace={true} type="password" register={register("senha", { required: true })} />
                    {errors.senha && <span>Insira sua senha</span>}
                    {loginError && <span>Credenciais inválidas</span>} 
                    <Button type="medium" bottomSpace={true}>Login</Button>
                </form>
                <FitContentButton to="/cadastro">Novo cadastro</FitContentButton>
            </div>
        </div>
    );
};

export default Login;