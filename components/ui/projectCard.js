import { layoutStyles } from "../styles/layout"
import 'react-toastify/dist/ReactToastify.css';

const ProjectCard = ({ editMode, customStyle, onRemove, name, index, description, thumbnail, link }) => {
    return <div className={customStyle ? customStyle : layoutStyles.projectCard}>
        {editMode ? <p onClick={onRemove} className="cursor-pointer w-min hover:text-[#ff0000] text-5xl">&times;</p> : null}
        {thumbnail ? <img className={layoutStyles.projectThumbnail} src={thumbnail} alt="" /> : null}
        <p className="font-bold my-3">{name}</p>
        <p className="opacity-30">{description}</p>
        {link ? <a href={link} target="_blank" rel="noreferrer" className="text-brand mt-5 block w-max">{editMode ? `${link}` : "View site"} &rarr;</a> : null}
    </div>
}

export default ProjectCard