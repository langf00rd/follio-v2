import { editLinks } from "../../styles/editLinks"

const PageControlLinks = () => {
    return <div className="bg-white h-max p-5 rounded-md border border-mid hidden sm:block">
        <p className={editLinks.link}>👨‍💻 Share QR code</p>
        <p className={editLinks.link}>📝 Copy link</p>
        <p className={editLinks.link}>🌍 Share link</p>
        <p className={editLinks.link}>👀 View your site</p>
    </div>
}

export default PageControlLinks