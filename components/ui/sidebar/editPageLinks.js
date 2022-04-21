import { editLinks } from "../../styles/editLinks"

const EditPageLinks = () => {
    return <div className="bg-white h-max p-5 rounded-md border border-mid hidden sm:block">
        <p className={editLinks.link}>⚡ Introduction</p>
        <p className={editLinks.link}>📺 Photos &amp; videos</p>
        <p className={editLinks.link}>💛 Skills &amp; tools</p>
        <p className={editLinks.link}>🔗 Socials</p>
        <p className={editLinks.link}>💪 Projects &amp; works</p>
        <p className={editLinks.link}>🎨 Styles &amp; colors</p>
        <p className={editLinks.link}>💳 Shop &amp; payments</p>
    </div>
}

export default EditPageLinks