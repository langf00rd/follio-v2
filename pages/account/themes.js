import Header from "../../components/ui/header"
import { layoutStyles } from "../../components/styles/layout"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"

const Themes = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.mainWrapper}>
                <div className="hidden lg:block"><PageControlLinks /></div>
                <div className="w-full max-w-2xl lg:ml-10">
                    <p className={layoutStyles.textLg}>Themes &amp; designs</p>
                </div>
            </div>
        </div>
    </div>
}

export default Themes