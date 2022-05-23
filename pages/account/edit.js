import { useContext, useEffect } from "react"
import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import EditSideMenu from "../../components/ui/sidebar/editSideMenu"
import Introduction from "../../components/ui/editPages/introduction"
import Media from "../../components/ui/editPages/media"
import Tools from "../../components/ui/editPages/tools"
import Socials from "../../components/ui/editPages/socials"
import EditPageTabs from "../../components/ui/editPageTabs"
import Projects from "../../components/ui/editPages/projects"
import Loader from "../../components/ui/loader"
import PageHead from "../../components/pageHead"
import PreviewComponent from "../../components/previews/preview"
import Payment from "../../components/ui/editPages/payment"
import Shop from "../../components/ui/editPages/shop"

const Pages = () => {
    const { viewCount } = useContext(FollioContext)
    switch (viewCount) {
        case 0: return <Introduction />
        case 1: return <Media />
        case 2: return <Tools />
        case 3: return <Socials />
        case 4: return <Projects />
        // case 5: return <Styles />
        case 6: return <Payment />
        default: return <Shop />
    }
}

const Edit = () => {
    const { showLoader, checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [checkIsLoggedIn])

    if (showLoader) return <Loader />

    return <div>
        <Header />
        <PageHead title="Follio - Edit Your Page" />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block">
                    <PageControlLinks />
                    <div className="m-5" />
                    <EditSideMenu />
                </div>

                <div className="w-full max-w-xl">
                    <p className={layoutStyles.textLg}>Edit your page</p>
                    <EditPageTabs />
                    <Pages />
                </div>

                <PreviewComponent />
            </div>
        </div>
    </div>
}

export default Edit