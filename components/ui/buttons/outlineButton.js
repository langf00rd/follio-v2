import { buttonStyles } from "../../styles/buttonStyles"

const OutlineButton = ({ full = true, label, action }) => {
    if (full) return <button onClick={action} className={buttonStyles.outlineButtonFull}>{label}</button>
    return <button onClick={action} className={buttonStyles.outlineButton}>{label}</button>
}

export default OutlineButton