import { layoutStyles } from "../styles/layout"
import 'react-toastify/dist/ReactToastify.css';

const ProjectCard = ({ editMode, customStyle, onRemove, name, index, description, thumbnail, link }) => {
    return <div className={customStyle ? customStyle : layoutStyles.projectCard}>
        {editMode ? <p onClick={onRemove} className="cursor-pointer w-min hover:text-red text-md flex items-center mb-3"><div className='mr-2'>&times;</div> remove</p> : null}
        {thumbnail ? <img className={layoutStyles.projectThumbnail} src={thumbnail} alt="" /> : null}
        <p className="font-[CalFonts] mt-5">{name}</p>
        <p>{description}</p>
        {link ? <a href={link} target="_blank" rel="noreferrer" className="text-brand block w-max">{editMode ? `${link}` : "View site"} &rarr;</a> : null}
    </div>
}

export default ProjectCard