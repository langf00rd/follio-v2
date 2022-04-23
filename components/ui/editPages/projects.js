import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../buttons/button"
import GhostButton from "../buttons/ghostButton"
import ProjectCard from "../projectCard";

const Projects = () => {
    const { projects, setProjects, uploadFile } = useContext(FollioContext)
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
            toast.info('Project added successfully! 🎉', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setName("")
            setLink("")
            setDescription("")
            setThumbnailFile()
            setShowProjectModal(false)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    const removeProject = (index) => {
        console.log('index', index)
        let prevProjects = [...projects]
        for (let i = 0; i < prevProjects.length; i++) {
            const element = prevProjects[i];
            if (element === prevProjects[index]) {
                prevProjects.splice(index, 1)
                setProjects(prevProjects)
                toast.info('Project removed!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }
        }
    }

    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Your projects</p>

        {projects.length < 1 ? <div className="opacity-20 font-medium lg:text-xl my-10 mt-0">You havent added any projects yet</div> : null}

        {projects.map((project, i) => {
            return <ProjectCard onRemove={() => removeProject(i)} index={i} editMode={true} link={project.link} name={project.name} key={i} thumbnail={project.thumbnail} description={project.description} />
        })}

        <Button label="Add a project" action={() => setShowProjectModal(true)} />

        {showProjectModal ? <div className={layoutStyles.modalBody}>
            <div className={layoutStyles.modalContainer}>
                <p className="font-extrabold text-2xl mb-10">Add your project</p>
                {thumbnailFile ? <img src={URL.createObjectURL(thumbnailFile)} alt="" className="w-full h-44 rounded-md object-cover mb-5" /> : <></>}
                <input className={inputStyles.input} value={name} onChange={e => setName(e.target.value)} placeholder="Project name*" />
                <input className={inputStyles.input} value={description} onChange={e => setDescription(e.target.value)} placeholder="Project description" />
                <input className={inputStyles.input} value={link} onChange={e => setLink(e.target.value)} placeholder="Link" />
                <p className="opacity-50 my-3">Add project thumbnail</p>
                <input className={inputStyles.fileInput} accept="image/*" type="file" onChange={e => setThumbnailFile(e.target.files[0])} />
                <div className="flex items-center mt-5">
                    <Button label="Add project" action={addProject} full={false} />
                    <div className="m-3" />
                    <GhostButton label="Cancel" action={() => setShowProjectModal(false)} full={false} />
                </div>
            </div>
        </div> : null}

        <ToastContainer />
    </div>
}

export default Projects