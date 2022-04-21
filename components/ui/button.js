const styles = {
    button: `bg-brand hover:scale-90 transition text-white p-2 rounded-md`,
    buttonFull: `bg-brand hover:scale-90 transition text-white p-2 rounded-md w-full`,
}

const Button = ({ full = true }) => {
    if (full) return <button className={styles.buttonFull}>Login</button>
    return <button className={styles.button}>Login</button>
}

export default Button