import Header from "../../components/ui/header"
import { layoutStyles } from "../../components/styles/layout"

const Analytics = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <p className={layoutStyles.textLg}>Analytics</p>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Analytics