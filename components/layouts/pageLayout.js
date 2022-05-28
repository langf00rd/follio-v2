import PageHead from "../pageHead"
import PreviewComponent from "../previews/preview"
import { layoutStyles } from "../styles/layout"
import FAB from "../ui/fab"
import Header from "../ui/header"
import PageControlLinks from "../ui/sidebar/pageLinks"

const PageLayout = ({ title, metatitle, children }) => {
    return (
        <>
            <div>
                <Header />
                <PageHead title={metatitle} />
                <FAB />
                <div className={layoutStyles.main}>
                    <div className={layoutStyles.mainWrapper}>
                        <div className="hidden lg:block"><PageControlLinks /></div>
                        <div className="w-full lg:ml-10">
                            <p className={layoutStyles.textLg}>{title}</p>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageLayout