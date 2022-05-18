import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { FollioContext } from "../../context/follioContext"
import Button from "./buttons/button"
// import { headerStyles } from "../styles/headerStyles"
// import Nav from "./header/nav"
// import PageControlLinks from "./sidebar/pageLinks"

const styles = {
    menuLink: `opacity-80 mb-5 cursor-pointer hover:opacity-100 hover:text-brand user-select-none`,
    active: `opacity-80 mb-5 cursor-pointer hover:opacity-100 text-brand user-select-none`,
    sideMenu: `p-5 side-menu bg-white fixed border-b border-b-mid w-screen top-18 left-0 z-50`,
}

const SideMenu = () => {
    const [route, setRoute] = useState("/")
    const { logout } = useContext(FollioContext)

    useEffect(() => {
        setRoute(window.location.pathname)
    }, [route])

    return <div className={styles.sideMenu}>
        <Link passHref={true} href="/account/analytics">
            <p className={route === "/account/analytics" ? styles.active : styles.menuLink}>
                Analytics
            </p>
        </Link>
        <Link passHref={true} href="/account/edit">
            <p className={route === "/account/edit" ? styles.active : styles.menuLink}>
                Edit
            </p>
        </Link>
        <Link passHref={true} href="/account/themes">
            <p className={route === "/account/themes" ? styles.active : styles.menuLink}>
                Themes
            </p>
        </Link>
        <Link passHref={true} href="/account/settings">
            <p className={route === "/account/settings" ? styles.active : styles.menuLink}>
                Settings
            </p>
        </Link>
        <Button label="Logout" action={logout} />
    </div>
}

export default SideMenu