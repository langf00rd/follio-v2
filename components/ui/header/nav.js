import Link from "next/link"
import { useEffect, useState } from "react"
import { headerStyles } from "../../styles/headerStyles"

const Nav = () => {
    const [route, setRoute] = useState("/")

    useEffect(() => {
        setRoute(window.location.pathname)
    }, [route])

    return <nav className={headerStyles.nav}>
        <Link passHref={true} href="/account/analytics">
            <p className={route === "/account/analytics" ? headerStyles.active : headerStyles.link}>Analytics</p>
        </Link>
        <Link passHref={true} href="/account/edit">
            <p className={route === "/account/edit" ? headerStyles.active : headerStyles.link}>Edit</p>
        </Link>
        <Link passHref={true} href="/account/themes">
            <p className={route === "/account/themes" ? headerStyles.active : headerStyles.link}>Themes</p>
        </Link>
        <Link passHref={true} href="/account/settings">
            <p className={route === "/account/settings" ? headerStyles.active : headerStyles.link}>Settings</p>
        </Link>
    </nav>
}

export default Nav