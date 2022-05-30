import Link from "next/link"

const MadeWithFollio = ({ show }) => {
    // const { showFollioTag } = useContext(FollioContext)

    if (!show) return null

    return (
        <>
            <div className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <Link href='https://www.follio.app' passHref={true} target="_blank" rel="noreferrer">
                        Made with follio 🚀
                    </Link>
                </div>
            </div>
        </>
    )
}

const styles = {
    section: `py-20`,
    sectionWrapper: `max-w-7xl w-full m-auto flex-row items-center h-full p-3 transition hover:opacity-50 border w-max border-mid rounded-xl cursor-pointer`,
}

export default MadeWithFollio