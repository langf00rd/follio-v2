import { useContext, useEffect } from "react"
import { layoutStyles } from "../../components/styles/layout"
import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import { FollioContext } from "../../context/follioContext"
import PageHead from "../../pageHead"

const Settings = () => {
    const { checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [])

    return <div>
        <Header />
        <PageHead title="Follio - Settings" />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block"><PageControlLinks /></div>
                <div className="w-full max-w-xl">
                    <p className={layoutStyles.textLg}>Settings</p>
                </div>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Settings