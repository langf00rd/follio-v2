import Link from "next/link"
import { headerStyles } from "../styles/headerStyles"
import Button from "./buttons/button"
import Nav from "./header/nav"
import PageControlLinks from "./sidebar/pageLinks"

const styles = {
    menuLink: `opacity-80 mb-5 cursor-pointer hover:opacity-100 hover:text-brand user-select-none`,
    sideMenu: `p-5 side-menu bg-white fixed border-b border-b-mid w-screen top-18 left-0 z-50`,
}

const SideMenu = () => {
    return <div className={styles.sideMenu}>
        <Link passHref={true} href="/account/analytics">
            <p className={styles.menuLink}>
                Analytics
            </p>
        </Link>
        <Link passHref={true} href="/account/edit">
            <p className={styles.menuLink}>
                Edit
            </p>
        </Link>
        <Link passHref={true} href="/account/themes">
            <p className={styles.menuLink}>
                Themes
            </p>
        </Link>
        <Link passHref={true} href="/account/settings">
            <p className={styles.menuLink}>
                Settings
            </p>
        </Link>
        <Button label="Login" />
    </div>
}

export default SideMenu