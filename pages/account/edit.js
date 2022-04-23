import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import { useContext } from "react"
import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import EditPageLinks from "../../components/ui/sidebar/editPageLinks"
import Introduction from "../../components/ui/editPages/introduction"
import Media from "../../components/ui/editPages/media"
import Tools from "../../components/ui/editPages/tools"
import Socials from "../../components/ui/editPages/socials"
import EditPageTabs from "../../components/ui/editPageTabs"
import Button from "../../components/ui/buttons/button"
import Projects from "../../components/ui/editPages/projects"
import BottomNav from "../../components/ui/bottomNav"
import Styles from "../../components/ui/editPages/styles"
import Theme1 from "../../components/themes/theme1"

const Pages = () => {
    const { viewCount } = useContext(FollioContext)
    switch (viewCount) {
        case 0: return <Introduction />
        case 1: return <Media />
        case 2: return <Tools />
        case 3: return <Socials />
        case 4: return <Projects />
        case 5: return <Styles />
        case 6: return <Introduction />
        case 7: return <Introduction />
        default: return <div></div>
    }
}

const Edit = () => {
    const { showPreview, setShowPreview } = useContext(FollioContext)

    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block">
                    <PageControlLinks />
                    <div className="m-5" />
                    <EditPageLinks />
                </div>

                <div className="w-full max-w-xl">
                    <p className={layoutStyles.textLg}>Edit your page</p>
                    <EditPageTabs />
                    <Pages />
                    <BottomNav />
                </div>

                {showPreview ? <div className="lg:hidden w-screen h-screen pt-20 bg-white fixed top-0 left-0">
                    <Theme1 editMode={true} />
                    <BottomNav />
                </div> : null}

                <div className="hidden lg:block">
                    <Theme1 editMode={true} />
                </div>
            </div>
        </div>
    </div>
}

export default Edit