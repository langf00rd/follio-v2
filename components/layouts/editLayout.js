import PageHead from "../pageHead"
import PreviewComponent from "../previews/preview"
import { layoutStyles } from "../styles/layout"
import Introduction from "../ui/editPages/introduction"
import Media from "../ui/editPages/media"
import Payment from "../ui/editPages/payment"
import Projects from "../ui/editPages/projects"
import Shop from "../ui/editPages/shop"
import Socials from "../ui/editPages/socials"
import Tools from "../ui/editPages/tools"
import EditPageTabs from "../ui/editPageTabs"
import FAB from "../ui/fab"
import Header from "../ui/header"
import EditSideMenu from "../ui/sidebar/editSideMenu"
import PageControlLinks from "../ui/sidebar/pageLinks"

const EditLayout = ({ children }) => {
    return (
        <>

            <div>
                <Header />
                <PageHead title="Follio - Edit Your Page" />
                <FAB />
                <div className={layoutStyles.main}>
                    <div className={layoutStyles.previewMainWrapper}>
                        <div className="hidden lg:block">
                            <PageControlLinks />
                            <div className="m-5" />
                            <EditSideMenu />
                        </div>

                        <div className="w-full max-w-xl">
                            <p className={layoutStyles.textLg}>Edit your page</p>
                            {children}
                            {/* <p className={layoutStyles.textLg}>Edit your page</p>
                            <EditPageTabs />
                            <Pages /> */}
                        </div>

                        <PreviewComponent />
                    </div>
                </div>
            </div>


            {/* <div>
                <Header />
                <PageHead title={title} />
                <FAB />
                <div className={layoutStyles.main}>
                    <div className={layoutStyles.previewMainWrapper}>
                        <div className="hidden lg:block"><PageControlLinks /></div>
                        <div className="w-full max-w-xl">
                            {children}
                        </div>
                        <PreviewComponent />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default EditLayout