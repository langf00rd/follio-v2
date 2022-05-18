import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import { textStyles } from "../../styles/textStyles"

const Introduction = () => {
    const { about, setAbout, fullname, setFullname, work, setWork, tagline, setTagline } = useContext(FollioContext)

    return <div>
        <div className={layoutStyles.container}>
            <div>
                <label className={textStyles.label}>Your name</label>
                <input className={inputStyles.input} value={fullname} onChange={e => setFullname(e.target.value)} placeholder="John Doe" />
            </div>

            <div>
                <label className={textStyles.label}>Your work</label>
                <input className={inputStyles.input} value={work} onChange={e => setWork(e.target.value)} placeholder="Web developer" />
            </div>

            <div>
                <label className={textStyles.label}>Tagline</label>
                <textarea className={inputStyles.textarea} value={tagline} onChange={e => setTagline(e.target.value)} placeholder="I help you turn your dreams into a reality" />
            </div>

            <div>
                <label className={textStyles.label}>About</label>
                <textarea className={inputStyles.textarea} value={about} onChange={e => setAbout(e.target.value)} placeholder="Hello world, and i love music, building stuff, and making art" />
            </div>
        </div>
    </div>
}

export default Introduction