import Button from "./button"

const styles = {
    menuLink: `opacity-80 mb-5 cursor-pointer hover:opacity-100 hover:text-brand user-select-none`,
    sideMenu: `p-5 side-menu shadow-md bg-white fixed border-b border-b-mid w-screen top-18 left-0 z-50`,
}

const SideMenu = () => {
    return <div className={styles.sideMenu}>
        <p className={styles.menuLink}>
            Share QR code
        </p>
        <p className={styles.menuLink}>
            Copy link
        </p>
        <p className={styles.menuLink}>
            Share link
        </p>
        <p className={styles.menuLink}>
            View site
        </p>
        <p className={styles.menuLink}>
            Logout
        </p>

        <Button label="Login" />
    </div>
}

export default SideMenu