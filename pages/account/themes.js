import { useContext, useEffect } from 'react'
import { FollioContext } from '../../context/follioContext'
import PreviewLayout from '../../components/layouts/previewLayout'
import theme1 from '../../assets/themes/1.png'
import theme2 from '../../assets/themes/2.png'
import theme3 from '../../assets/themes/3.png'
import theme4 from '../../assets/themes/4.png'
import ThemeCard from '../../components/ui/themeCard'
import Loader from '../../components/ui/loader'
import { textStyles } from '../../components/styles/textStyles'

const Themes = () => {
    const { showLoader, checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [checkIsLoggedIn])

    if (showLoader) return <Loader />

    return (
        <>
            <PreviewLayout metaTitle='Follio - Choose a theme' title='Themes &amp; styles'>
                <div className={styles.themeCardContainer}>
                    <ThemeCard index={1} thumbnail={theme1} />
                    <ThemeCard index={3} thumbnail={theme3} />
                    <ThemeCard index={2} thumbnail={theme2} />
                </div>
                <div className='mt-20 mb-5 font-bold'>
                    <h2 className={textStyles.label}>Designer &amp; photographer</h2>
                    <div className={styles.themeCardContainer}>
                        <ThemeCard index={4} thumbnail={theme4} />
                    </div>
                </div>
            </PreviewLayout>
        </>
    )
}

export default Themes

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2`,
}