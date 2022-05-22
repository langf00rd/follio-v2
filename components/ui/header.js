import { useContext, useState } from "react"
import Logo from "../logo"
import Link from "next/link"
import Avatar from "./avatar"
import HeaderModal from "./headerModal"
import chevronDown from "../../assets/svg/chevronDown.svg"
import chevronUp from "../../assets/svg/chevronUp.svg"
import menu from "../../assets/svg/menu.svg"
import close from "../../assets/svg/close.svg"
import Button from "./buttons/button"
import Nav from "./header/nav"
import { FollioContext } from "../../context/follioContext"
import { headerStyles } from "../styles/headerStyles"
import { useSession } from "next-auth/react"
import HeaderMenu from "./headerMenu"

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)
    const { profilePhoto, updateAccount } = useContext(FollioContext)
    const { data: session } = useSession()

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu)
    }

    return <div className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <div className="flex items-center">
                {!showSideMenu ? <img src={menu.src} onClick={toggleSideMenu} className={headerStyles.menuBtn} />
                    : <img src={close.src} onClick={toggleSideMenu} className={headerStyles.menuBtn} />}
                <Logo />
            </div>
            <Nav />
            <div className="flex items-center">
                <div className="hidden lg:block">
                    <Button label="Save &amp; publish" full={false} action={updateAccount} />
                </div>

                {session ? <div onClick={toggleModal} className="flex items-center">
                    <div className="lg:ml-5">
                        <Avatar src={session.user.image} />
                    </div>
                    {!showModal ?
                        <img src={chevronDown.src} className={headerStyles.chevron} />
                        : <img src={chevronUp.src} className={headerStyles.chevron} />}
                </div> : null}
            </div>
        </div>

        {showModal ? <HeaderModal /> : null}
        {showSideMenu ? <HeaderMenu /> : null}
    </div >
}

export default Header