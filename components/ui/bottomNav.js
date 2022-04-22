import { layoutStyles } from "../styles/layout"
import eye from "../../assets/svg/eye.svg"
import Button from "./buttons/button"

const BottomNav = () => {
    return <div className={layoutStyles.bottomNav}>
        <p className="flex items-center w-5">
            <img src={eye.src} className="mr-1 opacity-50" />
            Preview
        </p>
        <Button label="Publish" full={false} />
    </div>
}

export default BottomNav