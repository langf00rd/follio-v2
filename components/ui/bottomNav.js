import { layoutStyles } from "../styles/layout"
import eye from "../../assets/svg/eye.svg"
import Button from "./buttons/button"
import { useContext } from "react"
import { FollioContext } from "../../context/follioContext"

const BottomNav = () => {
    const { showPreview, setShowPreview, updateAccount } = useContext(FollioContext)

    return <div className={layoutStyles.bottomNav}>
        {!showPreview ? <p className="flex items-center w-5" onClick={() => setShowPreview(!showPreview)}>
            <img src={eye.src} className="mr-1 opacity-50" />
            Preview
        </p> : <p className="flex items-center" onClick={() => setShowPreview(!showPreview)}>
            &times; Close preview
        </p>}
        <Button action={updateAccount} label="Publish" full={false} />
    </div>
}

export default BottomNav