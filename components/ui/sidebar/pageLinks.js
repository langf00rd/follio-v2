import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { editLinks } from "../../styles/editLinks"
import Link from "next/link"
import QRCodeModal from "../qrcodeModal"

const PageControlLinks = () => {
    const { copyLink, shareLink, logout, username } = useContext(FollioContext)
    const [showQrCode, setShowQrCode] = useState(false)

    return <div>
        <div className="bg-white lg:shadow-sm h-max lg:p-5 rounded-lg lg:border lg:border-borderColor">
            <p className={editLinks.link} onClick={() => setShowQrCode(true)}>👨‍💻 Share QR code</p>
            <p className={editLinks.link} onClick={copyLink}>📝 Copy link</p>
            <p className={editLinks.link} onClick={shareLink}>🌍 Share link</p>
            <p className={editLinks.link}><Link href={`https://follio.app/${username}`}>👀 View published site</Link> </p>
            <p className={editLinks.link}>
                <Link href="mailto:follioap@gmail.com" passHref>
                    💁 Leave a review
                </Link>
            </p>
            <p className={editLinks.logoutLink} onClick={logout}>❌ Logout</p>
        </div>
        {showQrCode ? <QRCodeModal onCloseModal={() => setShowQrCode(false)} /> : null}
    </div>
}

export default PageControlLinks