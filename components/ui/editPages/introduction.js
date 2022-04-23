import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Introduction = () => {
    const { about, setAbout, fullname, setFullname, work, setWork, tagline, setTagline } = useContext(FollioContext)

    return <div>
        <div className={layoutStyles.container}>
            <p className="mb-7 font-medium">Introduction</p>
            <input className={inputStyles.input} value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Your name" />
            <input className={inputStyles.input} value={work} onChange={e => setWork(e.target.value)} placeholder="Your work" />
            <textarea className={inputStyles.textarea} value={tagline} onChange={e => setTagline(e.target.value)} placeholder="Tagline" />
        </div>
        <div className="my-5" />
        <div className={layoutStyles.container}>
            <p className="mb-7 font-medium">About</p>
            <textarea className={inputStyles.textarea} value={about} onChange={e => setAbout(e.target.value)} placeholder="About you" />
        </div>
    </div>
}

export default Introduction