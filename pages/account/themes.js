import { layoutStyles } from "../../components/styles/layout"
import Header from "../../components/ui/header"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import theme1 from "../../assets/themes/1.png"
import ThemeCard from "../../components/ui/themeCard"

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2`,
}

const Themes = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.mainWrapper}>
                <div className="hidden lg:block"><PageControlLinks /></div>
                <div className="w-full lg:ml-10">
                    <p className={layoutStyles.textLg}>Themes &amp; designs</p>
                    <div>
                        <p className="mb-3 mt-5 font-bold  opacity-50">Simple themes</p>
                        <div className={styles.themeCardContainer}>
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                        </div>
                    </div>

                    <div className="mt-20">
                        <p className="mb-3 mt-5 font-bold  opacity-50">Complex website designs</p>
                        <div className={styles.themeCardContainer}>
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                        </div>
                    </div>

                    <div className="mt-20">
                        <p className="mb-3 mt-5 font-bold  opacity-50">Simple themes</p>
                        <div className={styles.themeCardContainer}>
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                            <ThemeCard index={1} thumbnail={theme1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Themes