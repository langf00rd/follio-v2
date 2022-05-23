import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import { useContext, useEffect } from "react"
import { textStyles } from "../../components/styles/textStyles"
import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import PageHead from "../../components/pageHead"
import PreviewComponent from "../../components/previews/preview"
import Loader from "../../components/ui/loader"

const Analytics = () => {
    const { showLoader, checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [checkIsLoggedIn])

    if (showLoader) return <Loader />

    return <div>
        <Header />
        <PageHead title="Follio - Analytics" />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block"><PageControlLinks /></div>
                <div className="w-full max-w-xl">
                    <p className={layoutStyles.textLg}>Analytics</p>
                    <div className={layoutStyles.container}>
                        <h1 className={textStyles.comingSoonLabel}>Coming soon 😉</h1>
                    </div>
                </div>
                <PreviewComponent />
            </div>
        </div>
    </div>
}

export default Analytics