import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { layoutStyles } from "../../styles/layout"
import { textStyles } from "../../styles/textStyles"
import { uiStyles } from "../../styles/ui"

const Media = () => {
    const { coverPhoto, profilePhoto, featuredVideo, handleMediaFiles, logo, setLogo } = useContext(FollioContext)
    let profileRef
    let coverRef
    let videoRef
    let logoRef

    return <div className={layoutStyles.container}>
        <div>
            <label className={textStyles.label}>Profile photo</label>
            <div className="flex">
                <label onClick={() => profileRef.click()} className={uiStyles.uploadBox}>+</label>
                {typeof profilePhoto === "object" ? <img className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(profilePhoto)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={profilePhoto} />}
                <input ref={e => profileRef = e} onChange={e => handleMediaFiles(e.target.files[0], "profile-photo")} accept="image/*" type="file" hidden />
            </div>
        </div>

        <div>
            <label className={textStyles.label}>Logo</label>
            <div className="flex">
                <label onClick={() => logoRef.click()} className={uiStyles.uploadBox}>+</label>
                {typeof logo === "object" ? <img className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(logo)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={logo} />}
                <input ref={e => logoRef = e} onChange={e => handleMediaFiles(e.target.files[0], "logo")} accept="image/*" type="file" hidden />
            </div>
        </div>

        <div>
            <label className={textStyles.label}>Cover photo</label>
            <div className="flex">
                <label onClick={() => coverRef.click()} className={uiStyles.uploadBox}>+</label>
                {typeof coverPhoto === "object" ? <img className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(coverPhoto)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={coverPhoto} />}
                <input ref={e => coverRef = e} onChange={e => handleMediaFiles(e.target.files[0], "cover-photo")} accept="image/*" type="file" hidden />
            </div>
        </div>

        <div>
            <label className={textStyles.label}>Featured video</label>
            <div className="flex">
                <label onClick={() => videoRef.click()} className={uiStyles.uploadBox}>+</label>
                {typeof featuredVideo === "object" ? <video controls className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(featuredVideo)} /> : <video controls className={uiStyles.uploadBoxImg} alt="" src={featuredVideo} />}
                <input ref={e => videoRef = e} onChange={e => handleMediaFiles(e.target.files[0], "featured-video")} accept="video/*" type="file" hidden />
            </div>
        </div>
    </div>
}

export default Media