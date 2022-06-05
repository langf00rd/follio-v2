import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { editLinks } from "../../styles/editLinks"

const EditSideMenu = () => {
    let { viewCount, setViewCount, theme } = useContext(FollioContext)

    return <div className="bg-white shadow-sm h-max p-5 rounded-lg border border-borderColor hidden sm:block">
        <p onClick={() => setViewCount(0)} className={viewCount === 0 ? editLinks.active : editLinks.link}>⚡ Introduction</p>
        <p onClick={() => setViewCount(1)} className={viewCount === 1 ? editLinks.active : editLinks.link}>📷 Media</p>
        {theme === 5 ? null : <p onClick={() => setViewCount(2)} className={viewCount === 2 ? editLinks.active : editLinks.link}>💛 Skills &amp; tools</p>}
        <p onClick={() => setViewCount(3)} className={viewCount === 3 ? editLinks.active : editLinks.link}>🔗 Socials</p>
        <p onClick={() => setViewCount(4)} className={viewCount === 4 ? editLinks.active : editLinks.link}>💪 Projects &amp; works</p>
        <p onClick={() => setViewCount(6)} className={viewCount === 6 ? editLinks.active : editLinks.link}>💸 Payments</p>
        <p onClick={() => setViewCount(7)} className={viewCount === 7 ? editLinks.active : editLinks.link}>💳 Shop</p>
        {/* <p onClick={() => setViewCount(5)} className={viewCount === 5 ? editLinks.active : editLinks.link}>🎨 Styles &amp; colors</p> */}
    </div>
}

export default EditSideMenu