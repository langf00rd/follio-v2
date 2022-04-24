import Link from "next/link"
import { headerStyles } from "../../styles/headerStyles"

const Nav = () => {
    return <nav className={headerStyles.nav}>
        <Link passHref={true} href="/account/analytics">
            <p className={headerStyles.link}>Analytics</p>
        </Link>
        <Link passHref={true} href="/account/edit">
            <p className={headerStyles.link}>Edit</p>
        </Link>
        <Link passHref={true} href="/account/themes">
            <p className={headerStyles.link}>Themes</p>
        </Link>
        <Link passHref={true} href="/account/settings">
            <p className={headerStyles.link}>Settings</p>
        </Link>
    </nav>
}

export default Nav