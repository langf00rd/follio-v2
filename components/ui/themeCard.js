import { useContext } from "react"
import { FollioContext } from "../../context/follioContext"

const styles = {
    themeCard: `object-cover mb-3 border border-mid w-full bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer`,
    activeThemeCard: `object-cover mb-3 w-full sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer border-4 border-brand`
}

const ThemeCard = ({ index = 1, thumbnail = "" }) => {
    const { } = useContext(FollioContext)
    return <img src={thumbnail.src} alt="" className={styles.themeCard} />
}

export default ThemeCard