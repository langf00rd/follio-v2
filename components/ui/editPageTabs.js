import { useContext } from "react"
import { FollioContext } from "../../context/follioContext"
import { tabStyles } from "../styles/tabStyles"

const EditPageTabs = () => {
    const { viewCount, setViewCount } = useContext(FollioContext)
    return <div className={tabStyles.tabBar}>
        <p onClick={() => setViewCount(0)} className={viewCount === 0 ? tabStyles.activeTab : tabStyles.tab}>⚡ Introduction</p>
        <p onClick={() => setViewCount(1)} className={viewCount === 1 ? tabStyles.activeTab : tabStyles.tab}>📺 Photos &amp; videos</p>
        <p onClick={() => setViewCount(2)} className={viewCount === 2 ? tabStyles.activeTab : tabStyles.tab}>💛 Skills &amp; tools</p>
        <p onClick={() => setViewCount(3)} className={viewCount === 3 ? tabStyles.activeTab : tabStyles.tab}>🔗 Socials</p>
        <p onClick={() => setViewCount(4)} className={viewCount === 4 ? tabStyles.activeTab : tabStyles.tab}>💪 Projects &amp; works</p>
        <p onClick={() => setViewCount(6)} className={viewCount === 6 ? tabStyles.activeTab : tabStyles.tab}>💳 Shop &amp; payments</p>
        {/* <p onClick={() => setViewCount(5)} className={viewCount === 5 ? tabStyles.activeTab : tabStyles.tab}>🎨 Styles &amp; colors</p> */}
    </div>
}

export default EditPageTabs