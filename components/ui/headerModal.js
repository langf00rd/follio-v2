import PageControlLinks from "./sidebar/pageLinks"

const styles = {
    modalContent: `modal-content p-3 rounded-md shadow-md bg-white w-max fixed right-5 lg:right-10 top-12`,
    modalLink: `opacity-80 mb-5 cursor-pointer hover:opacity-100 hover:text-brand user-select-none`,
}

const HeaderModal = () => {
    return <div className={styles.modalContent}>
        <PageControlLinks />
        {/* <p className={styles.modalLink}>
            👨‍💻 Share QR code
        </p>
        <p className={styles.modalLink}>
            📝 Copy link
        </p>
        <p className={styles.modalLink}>
            🌍 Share link
        </p>
        <p className={styles.modalLink}>
            👀 View your site
        </p> */}
    </div>
}

export default HeaderModal