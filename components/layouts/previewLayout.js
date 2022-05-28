import PageHead from "../pageHead"
import PreviewComponent from "../previews/preview"
import { layoutStyles } from "../styles/layout"
import FAB from "../ui/fab"
import Header from "../ui/header"
import PageControlLinks from "../ui/sidebar/pageLinks"

const PreviewLayout = ({ title, metaTitle, children }) => {
    return (
        <>
            <div>
                <Header />
                <PageHead title={metaTitle} />
                <FAB />
                <div className={layoutStyles.main}>
                    <div className={layoutStyles.previewMainWrapper}>
                        <div className="hidden lg:block"><PageControlLinks /></div>
                        <div className="w-full max-w-xl">
                            <p className={layoutStyles.textLg}>{title}</p>
                            {children}
                        </div>
                        <PreviewComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviewLayout