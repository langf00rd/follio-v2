import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Introduction = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Introduction</p>
        <input className={inputStyles.input} placeholder="Your name" />
        <input className={inputStyles.input} placeholder="Your work" />
        <textarea className={inputStyles.textarea} placeholder="Introduction text" />
        <textarea className={inputStyles.textarea} placeholder="About you" />
    </div>
}

export default Introduction