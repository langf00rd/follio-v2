import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import { layoutStyles } from "../../components/styles/layout"

const Analytics = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <PageControlLinks />
                <div className="w-full max-w-2xl">
                    <p className={layoutStyles.textLg}>Analytics</p>
                </div>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Analytics