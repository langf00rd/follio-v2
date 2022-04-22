import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Media = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Add media files</p>

        <p className="opacity-50 mb-3 mt-5">Profile photo</p>
        <input className={inputStyles.input} type="file" />

        <p className="opacity-50 mb-3 mt-5">Cover photo</p>
        <input className={inputStyles.input} type="file" />
    </div>
}

export default Media