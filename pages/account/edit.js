import { useContext, useEffect } from "react"
import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import Introduction from "../../components/ui/editPages/introduction"
import Media from "../../components/ui/editPages/media"
import Tools from "../../components/ui/editPages/tools"
import Socials from "../../components/ui/editPages/socials"
import EditPageTabs from "../../components/ui/editPageTabs"
import Projects from "../../components/ui/editPages/projects"
import Loader from "../../components/ui/loader"
import Payment from "../../components/ui/editPages/payment"
import Shop from "../../components/ui/editPages/shop"
import EditLayout from "../../components/layouts/editLayout"

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

    return (
        <>
            <EditLayout>
                <EditPageTabs />
                <Pages />
            </EditLayout>
        </>
    )
}

export default Edit