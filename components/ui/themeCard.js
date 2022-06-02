import { useContext } from "react"
import { FollioContext } from "../../context/follioContext"

const ThemeCard = ({ index = 1, thumbnail = "" }) => {
    const { changeThemeInlocalStorage, theme } = useContext(FollioContext)
    return <img src={thumbnail.src} alt="" onClick={() => changeThemeInlocalStorage(index)} className={index === theme ? styles.activeThemeCard : styles.themeCard} />
}

export default ThemeCard

const styles = {
    themeCard: `object-cover mb-3 border border-mid w-full bg-gray-300 w-full h-80 rounded-2xl cursor-pointer hover:border-[#000] hover:border-[3px] transition`,
    activeThemeCard: `object-cover mb-3 border border-mid w-full bg-gray-300 w-full h-80 rounded-2xl cursor-pointer border-[3px] border-brand transition`,
    // themeCard: `object-cover mb-3 border border-mid w-full bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer hover:shadow-2xl transition`,
    // activeThemeCard: `object-cover mb-3 w-full sm:mr-5 sm:mb-5 bg-gray-300 sm:w-[1000px] h-80 rounded-2xl cursor-pointer border-[3px] shadow-2xl transition border-brand`
    // activeThemeCard: `object-cover mb-3 w-full sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer border-[3px] shadow-2xl transition border-brand`
}