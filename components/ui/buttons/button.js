import { buttonStyles } from "../../styles/buttonStyles"

const Button = ({ full = true, label, action }) => {
    if (full) return <button onClick={action} className={buttonStyles.buttonFull}>{label}</button>
    return <button onClick={action} className={buttonStyles.button}>{label}</button>
}

export default Button