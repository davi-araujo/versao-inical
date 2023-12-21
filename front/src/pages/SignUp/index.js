import styles from './SignUp.module.css';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

const SignUp = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Novo cadastro</h1>
            <TextField placeholder="Nome completo" bottomSpace={true} />
            <TextField placeholder="Email" bottomSpace={true} />
            <TextField placeholder="Senha" bottomSpace={true} type="password" />
            <TextField placeholder="Confirme a senha" bottomSpace={true} type="password" />
            <Button type="medium">Cadastrar</Button>
        </div>
    );
};

export default SignUp;