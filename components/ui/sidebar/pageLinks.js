import { useContext, useState } from "react"
import { FollioContext } from "../../../context/follioContext"
import { editLinks } from "../../styles/editLinks"
import QRCodeModal from "../qrcodeModal"

const PageControlLinks = () => {
    const { copyLink, shareLink, username, cv } = useContext(FollioContext)
    const [showCv, setShowCv] = useState(false)
    const [showQrCode, setShowQrCode] = useState(false)

    return <div>
        <div className="bg-white shadow-sm h-max p-5 rounded-md border border-mid">
            <p className={editLinks.link} onClick={() => setShowQrCode(true)}>👨‍💻 Share QR code</p>
            <p className={editLinks.link} onClick={copyLink}>📝 Copy link</p>
            <p className={editLinks.link} onClick={shareLink}>🌍 Share link</p>
            <p className={editLinks.link}>👀 View your site</p>
        </div>
        {showQrCode ? <QRCodeModal onCloseModal={() => setShowQrCode(false)} /> : null}
    </div>
}

export default PageControlLinks