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
import { textStyles } from "../../styles/textStyles";
import Loader from "../loader";

const Projects = () => {
    let thumbnailRef;
    const { projects, setProjects, uploadFile, setShowLoader, showLoader, isPremiumAccount } = useContext(FollioContext)
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
        try {
            if (name.trim() === "") {
                toast.warn('Please add a project name', toastConfig)
                return
            }

            if (!thumbnailFile) {
                toast.warn('Please add a thumbnail', toastConfig)
                return
            }

            setShowLoader(true)

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
            setShowLoader(false)
            toast.success('Project added successfully! 🎉', toastConfig)
        } catch (e) {
            setShowLoader(false)
        }
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

    if (showLoader) return <Loader image={null} />

    return <div className={layoutStyles.container}>
        {projects.length < 1 ? <div className="opacity-20 font-medium lg:text-xl my-10 mt-0">You havent added any projects yet</div> : null}

        <Button label="Add a project" action={() => {
            if (!isPremiumAccount && projects.length >= 4) {
                toast.error('You can only add 4 projects. Go premium to add more', toastConfig)
                return
            }

            setShowProjectModal(true)
        }} />

        {projects.map((project, i) => {
            return <ProjectCard onRemove={() => removeProject(i)} index={i} editMode={true} link={project.link} name={project.name} key={i} thumbnail={project.thumbnail} description={project.description} />
        })}


        {/* PROJECT MODAL */}
        {showProjectModal ? <div className={layoutStyles.modalBody}>
            <div className={layoutStyles.modalContainer}>
                <div className="m-10 lg:hidden" />
                <p className="font-extrabold text-2xl mb-10">Add your project</p>
                {thumbnailFile ? <img src={URL.createObjectURL(thumbnailFile)} alt="" className="w-full h-44 rounded-md object-cover mb-5" /> : <></>}

                <div>
                    <label className={textStyles.label}>Project name*</label>
                    <input className={inputStyles.input} value={name} onChange={e => setName(e.target.value)} placeholder="My portfolio website" />
                </div>

                <div>
                    <label className={textStyles.label}>Description</label>
                    <input className={inputStyles.input} value={description} onChange={e => setDescription(e.target.value)} placeholder="A simple website for selling electronic appliances" />
                </div>

                <div>
                    <label className={textStyles.label}>Link</label>
                    <input className={inputStyles.input} value={link} onChange={e => setLink(e.target.value)} placeholder="https://www.follio.app" />
                </div>

                <div>
                    <label className={textStyles.label}>Project thumbnail</label>
                    <input ref={e => thumbnailRef = e} accept="image/*" onChange={e => setThumbnailFile(e.target.files[0])} type="file" hidden />
                    <label onClick={() => thumbnailRef.click()} className={uiStyles.uploadBox}>+</label>
                </div>

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