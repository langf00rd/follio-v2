import { useContext, useEffect } from "react"
import PreviewComponent from "../../components/previews/preview"
import { inputStyles } from "../../components/styles/input"
import { layoutStyles } from "../../components/styles/layout"
import { textStyles } from "../../components/styles/textStyles"
import Button from "../../components/ui/buttons/button"
import Header from "../../components/ui/header"
import Loader from "../../components/ui/loader"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import { FollioContext } from "../../context/follioContext"
import PageHead from "../../pageHead"

const Settings = () => {
    const { checkIsLoggedIn, setUsername, username, cv, handleMediaFiles, setCv, favIcon, showLoader, updateUsername, uploadResume, uploadPageLoader, uploadFavicon } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    })

    if (showLoader) return <Loader />

    return <div>
        <Header />
        <PageHead title="Follio - Settings" />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block"><PageControlLinks /></div>
                <div className="w-full max-w-xl">
                    <p className={layoutStyles.textLg}>Settings</p>
                    <div>
                        <div className="mb-[30px]">
                            <p className={textStyles.label}>Change your username</p>
                            <div className="flex items-center">
                                <div className={inputStyles.socialInput}>
                                    <label className={inputStyles.label}>follio.app/</label>
                                    <input value={username} onChange={e => setUsername(e.target.value)} className={inputStyles.ghostInput} type="text" />
                                </div>
                                <div className="relative -top-2 left-3">
                                    <Button action={updateUsername} full={false} label='Save' />
                                </div>
                            </div>
                        </div>


                        <div className="mb-[30px]">
                            <p className={textStyles.label}>Upload your resume {cv ? <a target='_blank' className="text-brand" href={cv} rel="noreferrer">[view]</a> : null} </p>
                            <input
                                className={inputStyles.fileInput}
                                accept=".pdf, .doc, .docx, .rtf, .txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                type='file'
                                onChange={e => {
                                    handleMediaFiles(e.target.files[0], 'cv')
                                }}
                                placeholder={username} />
                        </div>

                        <div className="mb-[30px]">
                            <p className={textStyles.label}>Custom page loader</p>
                            <p className={textStyles.labelDescription}>Can be a gif or any other image format</p>
                            <input
                                className={inputStyles.fileInput}
                                accept="image/*, .gif"
                                type='file'
                                onChange={e => {
                                    handleMediaFiles(e.target.files[0], 'loader')
                                }}
                                placeholder={username} />
                        </div>

                        <div className="mb-[30px]">
                            <p className={textStyles.label}>Page favicon {favIcon ? <a target='_blank' className="text-brand" href={favIcon} rel="noreferrer">[view]</a> : null} </p>
                            <p className={textStyles.labelDescription}>Add an image that shows up in the title bar of your browser</p>
                            <input
                                className={inputStyles.fileInput}
                                accept=".ico"
                                type='file'
                                onChange={e => {
                                    handleMediaFiles(e.target.files[0], 'fav-icon')
                                }}
                                placeholder={username} />
                        </div>
                    </div>
                </div>
                <PreviewComponent />
            </div>
        </div>
    </div >
}

export default Settings