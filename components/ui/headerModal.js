const styles = {
    modalContent: `border border-mid p-3 rounded-md shadow-md bg-white w-max fixed right-5 sm:right-10 top-12`,
    modalLink: `opacity-80 mb-2 cursor-pointer hover:opacity-100 hover:text-brand user-select-none`,
}

const HeaderModal = () => {
    return <div className={styles.modalContent}>
        <p className={styles.modalLink}>
            Share QR code
        </p>
        <p className={styles.modalLink}>
            Copy link
        </p>
        <p className={styles.modalLink}>
            Share link
        </p>
        <p className={styles.modalLink}>
            View site
        </p>
        <p className={styles.modalLink}>
            Logout
        </p>
    </div>
}

export default HeaderModal