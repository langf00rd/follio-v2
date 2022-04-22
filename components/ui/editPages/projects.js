import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import Button from "../buttons/button"
import GhostButton from "../buttons/ghostButton"

const Projects = () => {
    const { projects, setProjects, uploadFile, setShowLoader, } = useContext(FollioContext)
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [thumbnailFile, setThumbnailFile] = useState("")
    const [showProjectModal, setShowProjectModal] = useState(false)

    const addProject = async () => {
        if (name.trim() === "") return
        if (!thumbnailFile && thumbnailFile) return
        try {
            let newProject = {
                name: name,
                link: link,
                description: description,
                thumbnail: await uploadFile(thumbnailFile)
            }
            setProjects([...projects, newProject])
            setShowProjectModal(false)
            setShowLoader(false)
        }
        catch (e) {
            console.log(e.message)
            setShowLoader(false)
        }
    }

    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Your projects</p>
        <Button label="Add a project" action={() => setShowProjectModal(true)} />

        {showProjectModal ? <div className={layoutStyles.modalBody}>
            <div className={layoutStyles.modalContainer}>
                <p className="font-extrabold text-2xl mb-10">Add a project</p>
                {thumbnailFile ? <img src={URL.createObjectURL(thumbnailFile)} alt="" className="w-full h-44 rounded-md object-cover mb-5" /> : <></>}
                <input className={inputStyles.input} placeholder="Project name*" />
                <input className={inputStyles.input} placeholder="Project description" />
                <input className={inputStyles.input} placeholder="Link" />
                <input className={inputStyles.input} accept="image/*" type="file" onChange={e => setThumbnailFile(e.target.files[0])} />
                <div className="flex items-center">
                    <Button label="Add project" full={false} />
                    <div className="m-3" />
                    <GhostButton label="Cancel" action={() => setShowProjectModal(false)} full={false} />
                </div>
            </div>
        </div> : null}
    </div>
}

export default Projects