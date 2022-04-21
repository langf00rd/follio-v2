import { inputStyles } from "../../styles/input"

const Introduction = () => {
    return <div className="bg-white shadow-sm h-max p-5 rounded-md border border-mid">
        <p className="mb-7 font-medium">Introduction</p>
        <input className={inputStyles.input} placeholder="Your name" />
        <input className={inputStyles.input} placeholder="Your work" />
        <textarea className={inputStyles.textarea} placeholder="Introduction text" />
        <textarea className={inputStyles.textarea} placeholder="About you" />
    </div>
}

export default Introduction