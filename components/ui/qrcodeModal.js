import { QRCodeCanvas } from "qrcode.react"
import { useContext, useState } from "react"
import { FollioContext } from "../../context/follioContext"
import { layoutStyles } from "../styles/layout"
import ReactSwitch from "react-switch"
import Button from "./button"

const QRCodeModal = ({ onCloseModal }) => {
    const { username, cv } = useContext(FollioContext)
    const [showCv, setShowCv] = useState(false)

    const downloadQrCode = () => {
        let canvas = document.getElementsByTagName("canvas")[0]
        const link = document.createElement("a")
        link.href = canvas.toDataURL("image/png")
        link.download = "qrcode.png"
        link.click()
    }

    return <div className={layoutStyles.modalBody}>
        <div className={layoutStyles.modalContainer}>
            <div className="p-5 flex items-center flex-col">
                <p className="text-5xl mt-10 sm:mt-0 cursor-pointer" onClick={onCloseModal}>&times;</p>
                <p className="font-extrabold text-2xl">Share your QR code</p>
                <p className="opacity-50 mb-5 text-center">Visitors can easily visit your portfolio or download your resume by scanning your QR code</p>

                <div className="flex flex-wrap justify-between">
                    {showCv ?
                        cv ? <QRCodeCanvas size={270} value={cv} /> : <p>You have not added your resume/cv</p>
                        : <QRCodeCanvas size={270} value={`${process.env.NEXT_PUBLIC_APP_URL}/${username}`} />}
                </div>

                <div className="my-5 flex justify-start items-center">
                    <p className="opacity-50 mr-2">Show code for CV/resume</p>
                    <ReactSwitch onChange={e => setShowCv(e)} checked={showCv} />
                </div>

                <Button action={downloadQrCode} full={false} label='Download QR code' />
            </div>
        </div>
    </div>
}

export default QRCodeModal