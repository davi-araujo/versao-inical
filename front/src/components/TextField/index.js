import styles from './TextField.module.css';

const TextField = ({ placeholder, bottomSpace=false, type="text", register }) => {
    return (
        <input 
            style={ bottomSpace ? { marginBottom: "16px" } : {} } 
            type={type} 
            className={styles.input} 
            placeholder={placeholder} 
            {...register}
        />
    );
};

export default TextField;