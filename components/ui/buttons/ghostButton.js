import { buttonStyles } from "../../styles/buttonStyles"

const GhostButton = ({ full = true, label, action }) => {
    if (full) return <button onClick={action} className={buttonStyles.ghostButtonFull}>{label}</button>
    return <button onClick={action} className={buttonStyles.ghostButton}>{label}</button>
}

export default GhostButton