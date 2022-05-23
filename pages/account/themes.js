import { layoutStyles } from '../../components/styles/layout'
import { useContext, useEffect } from 'react'
import { FollioContext } from '../../context/follioContext'
import Header from '../../components/ui/header'
import PageControlLinks from '../../components/ui/sidebar/pageLinks'
import theme1 from '../../assets/themes/1.png'
import theme2 from '../../assets/themes/2.png'
import theme3 from '../../assets/themes/3.png'
import ThemeCard from '../../components/ui/themeCard'
import PageHead from '../../components/pageHead'
import PreviewComponent from '../../components/previews/preview'
import Loader from '../../components/ui/loader'

const Themes = () => {
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
                    <p className={layoutStyles.textLg}>Themes &amp; styles</p>
                    <div className={styles.themeCardContainer}>
                        <ThemeCard index={1} thumbnail={theme1} />
                        <ThemeCard index={2} thumbnail={theme2} />
                        <ThemeCard index={3} thumbnail={theme3} />
                    </div>
                </div>
                <PreviewComponent />
            </div>
        </div>
    </div>
}

export default Themes

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2`,
}