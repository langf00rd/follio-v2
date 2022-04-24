import { useRef } from "react"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import { uiStyles } from "../../styles/ui";

const Media = () => {
    let profileRef;
    let coverRef;
    let videoRef;

    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Photos &amp; videos files</p>

        <p className="opacity-50 mb-3 mt-5">Profile photo</p>
        <label onClick={() => profileRef.click()} className={uiStyles.uploadBox}>+</label>
        <input ref={e => profileRef = e} accept="image/*" type="file" hidden />

        <p className="opacity-50 mb-3 mt-5">Cover photo</p>
        <label onClick={() => coverRef.click()} className={uiStyles.uploadBox}>+</label>
        <input ref={e => coverRef = e} accept="image/*" type="file" hidden />

        <p className="opacity-50 mb-3 mt-5">Featured video</p>
        <label onClick={() => videoRef.click()} className={uiStyles.uploadBox}>+</label>
        <input ref={e => videoRef = e} accept="video/*" type="file" hidden />
    </div>
}

export default Media