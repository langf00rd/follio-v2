import Header from "../../components/ui/header"
import { layoutStyles } from "../../components/styles/layout"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import EditPageLinks from "../../components/ui/sidebar/editPageLinks"
import Introduction from "../../components/ui/editPages/introduction"
import { FollioContext } from "../../context/follioContext"
import { useContext } from "react"
import Media from "../../components/ui/editPages/media"
import Tools from "../../components/ui/editPages/tools"
import Socials from "../../components/ui/editPages/socials"

const Pages = () => {
    const { viewCount } = useContext(FollioContext)
    switch (viewCount) {
        case 0: return <Introduction />
        case 1: return <Media />
        case 2: return <Tools />
        case 3: return <Socials />
        case 4: return <Introduction />
        case 5: return <Introduction />
        case 6: return <Introduction />
        case 7: return <Introduction />
        default: return <div></div>
    }
}

const Edit = () => {
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

                    {/* <div className="w-screen lg:w-3/5 bg-brand flex overflow-x-scroll">
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div> */}

                    <Pages />
                </div>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Edit