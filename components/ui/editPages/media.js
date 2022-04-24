import { useContext } from "react";
import { FollioContext } from "../../../context/follioContext";
import { layoutStyles } from "../../styles/layout"
import { uiStyles } from "../../styles/ui";

const Media = () => {
    let profileRef;
    let coverRef;
    let videoRef;
    const { coverPhoto, profilePhoto, featuredVideo, handleMediaFiles } = useContext(FollioContext)

    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Photos &amp; videos files</p>

        <p className="opacity-50 mb-3 mt-5">Profile photo</p>
        <div className="flex">
            <label onClick={() => profileRef.click()} className={uiStyles.uploadBox}>+</label>
            {typeof profilePhoto === "object" ? <img className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(profilePhoto)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={profilePhoto} />}
            <input ref={e => profileRef = e} onChange={e => handleMediaFiles(e.target.files[0], "profile-photo")} accept="image/*" type="file" hidden />
        </div>

        <p className="opacity-50 mb-3 mt-5">Cover photo</p>
        <div className="flex">
            <label onClick={() => coverRef.click()} className={uiStyles.uploadBox}>+</label>
            {typeof coverPhoto === "object" ? <img className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(coverPhoto)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={coverPhoto} />}
            <input ref={e => coverRef = e} onChange={e => handleMediaFiles(e.target.files[0], "cover-photo")} accept="image/*" type="file" hidden />
        </div>

        <p className="opacity-50 mb-3 mt-5">Featured video</p>
        <div className="flex">
            <label onClick={() => videoRef.click()} className={uiStyles.uploadBox}>+</label>
            {typeof featuredVideo === "object" ? <video controls className={uiStyles.uploadBoxImg} alt="" src={URL.createObjectURL(featuredVideo)} /> : <img className={uiStyles.uploadBoxImg} alt="" src={featuredVideo} />}
            <input ref={e => videoRef = e} onChange={e => handleMediaFiles(e.target.files[0], "featured-video")} accept="video/*" type="file" hidden />
        </div>
    </div>
}

export default Media