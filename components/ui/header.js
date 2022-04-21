import { useState } from "react"
import Logo from "../logo"
import Link from "next/link"
import Avatar from "./avatar"
import HeaderModal from "./headerModal"
import chevronDown from "../../assets/svg/chevronDown.svg"
import chevronUp from "../../assets/svg/chevronUp.svg"
import menu from "../../assets/svg/menu.svg"
import close from "../../assets/svg/close.svg"
import SideMenu from "./sideMenu"
import Button from "./button"

const styles = {
    header: `bg-white border-b border-b-mid fixed top-0 left-0 w-screen`,
    headerWrapper: `flex items-center p-3 justify-between px-5 lg:px-20 mx-auto`,
    link: `m-2 opacity-80 cursor-pointer hover:text-brand`,
    nav: `flex items-center hidden lg:flex`,
    chevron: `w-4 ml-1 opacity-50`,
    menuBtn: `p-2 bg-mid lg:hidden rounded-md opacity-60 mr-5 cursor-pointer hover:scale-90 transition`,
}

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu)
    }

    return <div className={styles.header}>
        <div className={styles.headerWrapper}>
            <div className="flex items-center">
                {!showSideMenu ? <img src={menu.src} onClick={toggleSideMenu} className={styles.menuBtn} />
                    : <img src={close.src} onClick={toggleSideMenu} className={styles.menuBtn} />}
                <Logo />
            </div>
            <nav className={styles.nav}>
                <Link passHref={true} href="/">
                    <p className={styles.link}>Analytics</p>
                </Link>

                <Link passHref={true} href="/">
                    <p className={styles.link}>Designs</p>
                </Link>

                <Link passHref={true} href="/">
                    <p className={styles.link}>Upgrade</p>
                </Link>
            </nav>
            <div className="flex items-center">
                <div className="hidden lg:block"><Button label="Upgrade" full={false} /></div>

                <div onClick={toggleModal} className="flex items-center">
                    <div className="lg:ml-5">
                        <Avatar />
                    </div>
                    {!showModal ?
                        <img src={chevronDown.src} className={styles.chevron} />
                        : <img src={chevronUp.src} className={styles.chevron} />}
                </div>
            </div>
        </div>

        {showModal ? <HeaderModal /> : null}
        {showSideMenu ? <SideMenu /> : null}
    </div>
}

export default Header