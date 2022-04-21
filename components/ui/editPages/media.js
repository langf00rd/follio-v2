import { inputStyles } from "../../styles/input"

const Media = () => {
    return <div className="bg-white shadow-sm h-max p-5 rounded-md border border-mid">
        <p className="mb-7 font-medium">Add media files</p>
        <input className={inputStyles.input} type="file" />
        <input className={inputStyles.input} type="file" />
    </div>
}

export default Media