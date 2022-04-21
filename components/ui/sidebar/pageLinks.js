import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { editLinks } from "../../styles/editLinks"

const PageControlLinks = () => {
    const { copyLink, shareLink } = useContext(FollioContext)

    return <div className="bg-white shadow-sm h-max p-5 rounded-md border border-mid hidden sm:block">
        <p className={editLinks.link}>👨‍💻 Share QR code</p>
        <p className={editLinks.link} onClick={copyLink}>📝 Copy link</p>
        <p className={editLinks.link} onClick={shareLink}>🌍 Share link</p>
        <p className={editLinks.link}>👀 View your site</p>
    </div>
}

export default PageControlLinks