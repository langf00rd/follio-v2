const styles = {
    button: `bg-brand hover:scale-90 transition text-white p-2 px-3 rounded-md`,
    buttonFull: `bg-brand hover:scale-90 transition text-white p-2 px-3 rounded-md w-full`,
}

const Button = ({ full = true, label, action }) => {
    if (full) return <button onClick={action} className={styles.buttonFull}>{label}</button>
    return <button onClick={action} className={styles.button}>{label}</button>
}

export default Button