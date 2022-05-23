import { useContext } from "react"
import { FollioContext } from "../../context/follioContext"
import Theme1 from "../themes/theme1"
import Theme2 from "../themes/theme2"
import Theme3 from "../themes/theme3"
import BottomNav from "../ui/bottomNav"

const PreviewComponent = () => {
    const { theme, showPreview } = useContext(FollioContext)

    return <div>
        {showPreview ? <div className="modal-content lg:hidden w-screen h-screen pt-20 bg-white fixed top-0 left-0">
            {theme === 1 ? <Theme1 editMode={true} /> : null}
            {theme === 2 ? <Theme2 editMode={true} /> : null}
            {theme === 3 ? <Theme3 editMode={true} /> : null}
        </div > : null}

        <BottomNav />

        <div className="hidden lg:block">
            {theme === 1 ? <Theme1 editMode={true} /> : null}
            {theme === 2 ? <Theme2 editMode={true} /> : null}
            {theme === 3 ? <Theme3 editMode={true} /> : null}
        </div>
    </div>
}

export default PreviewComponent