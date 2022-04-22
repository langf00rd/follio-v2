import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import Button from "../buttons/button"

const styles = {
    tool: `border border-mid flex flex-center m-2 p-1 px-2 rounded-full bg-[#F8FAFC] hover:scale-90 hover:border-b-[#00000000] transition items-center cursor-pointer hover:bg-[#ff8a82]`
}

const Tools = () => {
    const { skills, setSkills } = useContext(FollioContext)
    const [newSkill, setNewSkill] = useState("")

    /** Remove a skill */
    const removeSkill = (index) => {
        let prevSkills = [...skills]

        for (let i = 0; i < prevSkills.length; i++) {
            const element = prevSkills[i];
            if (element === prevSkills[index]) {
                prevSkills.splice(index, 1)
                setSkills(prevSkills)
                return
            }
        }
    }

    /** Add new skill */
    const addSkill = () => {
        if (newSkill.trim() === "") return
        setSkills([...skills, newSkill.trim()])
        setNewSkill("")
    }

    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Tools &amp; skills</p>
        <ul className="flex items-center flex-wrap mb-10">
            {skills.map((skill, index) => {
                return <li key={index} className={styles.tool} onClick={() => removeSkill(index)}>
                    <div className="mr-2">&times;</div>
                    {skill}
                </li>
            })}
        </ul>

        {skills.length < 1 ? <div className="opacity-50 my-10">You havent added any skills yet</div> : null}

        <div>
            <input list="skiils-list" name="browser" className={inputStyles.input} value={newSkill} onChange={e => setNewSkill(e.target.value)} placeholder="JavaScript" />
            <datalist id="skiils-list">
                <option value="📦 HTML" />
                <option value="💅 CSS" />
                <option value="✅ NodeJs" />
                <option value="☘️ MongoDB" />
                <option value="SQL" />
                <option value="Postgres" />
                <option value="MySQL" />
                <option value="🧠 JavaScript" />
                <option value="📱 React" />
                <option value="🌋Angular" />
                <option value="Vue" />
                <option value="💾 AWS" />
                <option value="⚡️ NextJs" />
                <option value="☁ Google Cloud" />
                <option value="🎨 UI design" />
                <option value="UX design" />
                <option value="🛠 UX and UX" />
                <option value="📷 Photoshop" />
                <option value="💨 Tailwind CSS" />
                <option value="CSS" />
                <option value="Chakra UI" />
                <option value="🐳 Docker" />
                <option value="👨‍💻 Flutter" />
                <option value="Android" />
                <option value="iOS" />
                <option value="Cross-platform apps" />
            </datalist>
            <Button label="Add skill" action={addSkill} />
        </div>
    </div>
}

export default Tools