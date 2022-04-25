import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import { layoutStyles } from "../../components/styles/layout"

const Settings = () => {
    return <div>
        <Header />
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