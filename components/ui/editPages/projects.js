import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../buttons/button"
import GhostButton from "../buttons/ghostButton"
import ProjectCard from "../projectCard";
import { uiStyles } from "../../styles/ui";

const Projects = () => {
    let thumbnailRef;
    const { projects, setProjects, uploadFile } = useContext(FollioContext)
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [thumbnailFile, setThumbnailFile] = useState()
    const [showProjectModal, setShowProjectModal] = useState(false)
    let toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const addProject = async () => {
        if (name.trim() === "") {
            toast.warn('Please add a project name', toastConfig)
            return
        }

        if (!thumbnailFile) {
            toast.warn('Please add a photo', toastConfig)
            return
        }

        let _thumbnail = await uploadFile(thumbnailFile)

        if (!_thumbnail) {
            toast.error('An error occured. Try again', toastConfig)
            setShowProjectModal(false)
            return
        }

        let newProject = {
            name: name,
            link: link,
            description: description,
            thumbnail: _thumbnail
        }

        setProjects([...projects, newProject])
        setName("")
        setLink("")
        setDescription("")
        setThumbnailFile()
        setShowProjectModal(false)
        toast.success('Project added successfully! 🎉', toastConfig)
    }

    const removeProject = (index) => {
        let confirmation = confirm("Do you want to remove this project?")
        if (!confirmation) return

        let prevProjects = [...projects]
        for (let i = 0; i < prevProjects.length; i++) {
            const element = prevProjects[i];
            if (element === prevProjects[index]) {
                prevProjects.splice(index, 1)
                setProjects(prevProjects)
                toast.success('Project removed!', toastConfig);
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

                {/* <input className={inputStyles.fileInput} accept="image/*" type="file" onChange={e => setThumbnailFile(e.target.files[0])} /> */}

                <p className="opacity-50 my-3">Add project thumbnail</p>
                <label onClick={() => thumbnailRef.click()} className={uiStyles.uploadBox}>+</label>
                <input ref={e => thumbnailRef = e} accept="image/*" onChange={e => setThumbnailFile(e.target.files[0])} type="file" hidden />

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