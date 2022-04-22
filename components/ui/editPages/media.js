import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Media = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Photos &amp; videos files</p>

        <p className="opacity-50 mb-3 mt-5">Profile photo</p>
        <input className={inputStyles.input} accept="image/*" type="file" />

        <p className="opacity-50 mb-3 mt-5">Cover photo</p>
        <input className={inputStyles.input} accept="image/*" type="file" />

        <p className="opacity-50 mb-3 mt-5">Featured video</p>
        <input className={inputStyles.input} accept="video/*" type="file" />
    </div>
}

export default Media