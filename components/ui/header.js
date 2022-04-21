import Logo from "../logo"
import Link from "next/link"
import Avatar from "./avatar"
import { useState } from "react"
import HeaderModal from "./headerModal"

const styles = {
    header: `bg-white border-b border-b-mid`,
    headerWrapper: `flex items-center p-3 justify-between px-5 sm:px-20 mx-auto`,
    link: `m-2 cursor-pointer font-medium hover:text-brand`,
    nav: `flex items-center hidden lg:flex`,
}

const Header = () => {
    const [showModal, setShowModal] = useState(false)

    return <div className={styles.header}>
        <div className={styles.headerWrapper}>
            <Logo />
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
            <Avatar action={() => setShowModal(!showModal)} />
        </div>

        {showModal ? <HeaderModal /> : null}
    </div>
}

export default Header