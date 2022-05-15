import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import { useRouter } from 'next/router'
import { useContext, useEffect } from "react"
import { useSession } from "next-auth/react"
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
import Loader from "../../components/ui/loader"
import PageHead from "../../pageHead"
import PreviewComponent from "../../components/previews/preview"
import Payment from "../../components/ui/editPages/payment"
// import Payment from "../../components/ui/editPages/payment"

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
        default: return <div></div>
    }
}

const Edit = () => {
    const { showPreview, theme, showLoader, checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [])

    if (showLoader) return <Loader />

    return <div>
        <Header />
        <PageHead title="Follio - Edit Your Page" />
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
                </div>

                <PreviewComponent />

                {/* {showPreview ? <div className="modal-content lg:hidden w-screen h-screen pt-20 bg-white fixed top-0 left-0">
                    {theme === 3 ? <Theme1 editMode={true} /> : null}
                </div> : null}

                <BottomNav />

                <div className="hidden lg:block">
                    {theme === 3 ? <Theme1 editMode={true} /> : null}
                </div> */}
            </div>
        </div>
    </div>
}

export default Edit