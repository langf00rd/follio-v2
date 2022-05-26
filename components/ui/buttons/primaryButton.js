import { buttonStyles } from "../../styles/buttonStyles"

const PrimaryButton = ({ full = true, label, action }) => {
    if (full) return <button onClick={action} className={buttonStyles.brandButtonFull}>{label}</button>
    return <button onClick={action} className={buttonStyles.brandButton}>{label}</button>
}

export default PrimaryButton