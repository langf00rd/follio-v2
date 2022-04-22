import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Media = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Add media files</p>
        <input className={inputStyles.input} type="file" />
        <input className={inputStyles.input} type="file" />
    </div>
}

export default Media