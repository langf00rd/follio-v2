import { useContext, useEffect } from "react"
import { FollioContext } from "../../context/follioContext"
import { layoutStyles } from "../../components/styles/layout"
import { inputStyles } from "../../components/styles/input"
import { textStyles } from "../../components/styles/textStyles"
import PrimaryButton from "../../components/ui/buttons/primaryButton"
import PreviewLayout from "../../components/layouts/previewLayout"
import Button from "../../components/ui/buttons/button"
import Loader from "../../components/ui/loader"
import LockableInput from "../../components/lockableInput"
import ReactSwitch from "react-switch"

const Settings = () => {
    const { checkIsLoggedIn, showFollioTag, setshowFollioTag, setUsername, username, cv, loader, handleMediaFiles, setCv, isPremiumAccount, favIcon, showLoader, updateUsername, uploadResume, uploadPageLoader, uploadFavicon } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    })

    if (showLoader) return <Loader />

    return (
        <>
            <PreviewLayout metaTitle='Follio - Settings' title='Settings'>
                <LockableInput label='Change your username' unlock>
                    <div className="flex items-center">
                        <div className={inputStyles.socialInput}>
                            <label className={inputStyles.label}>follio.app/</label>
                            <input value={username} onChange={e => setUsername(e.target.value)} className={inputStyles.ghostInput} type="text" />
                        </div>
                        <div className="relative -top-2 left-3">
                            <Button action={updateUsername} full={false} label='Save' />
                        </div>
                    </div>
                </LockableInput>

                <LockableInput unlock>
                    <div>
                        <p className={textStyles.label}>Upload your resume {cv ? <a target='_blank' className="text-brand" href={cv} rel="noreferrer">[view]</a> : null} </p>
                        <input
                            className={inputStyles.fileInput}
                            accept=".pdf, .doc, .docx, .rtf, .txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            type='file'
                            onChange={e => {
                                handleMediaFiles(e.target.files[0], 'cv')
                            }} />
                    </div>
                </LockableInput>

                <LockableInput unlock={isPremiumAccount} label='Hide "Made with follio" tag' description='Display the tag on your website to help spread the word about follio.'>
                    <ReactSwitch checked={!isPremiumAccount ? null : !showFollioTag} onChange={e => !isPremiumAccount ? null : setshowFollioTag(!e)} />
                </LockableInput>

                <LockableInput previewLink={loader} unlock={isPremiumAccount} label='Custom page loader' description='Replace the default page loader with an image/gif of your choice.'>
                    {!isPremiumAccount
                        ? <input className={inputStyles.fileInput} type='file' disabled />
                        : <input
                            className={inputStyles.fileInput}
                            accept="image/*, .gif, .png"
                            type='file'
                            onChange={e => {
                                handleMediaFiles(e.target.files[0], 'loader')
                            }} />}
                </LockableInput>

                <LockableInput previewLink={favIcon} unlock={isPremiumAccount} label='Website favicon' description='Upload an image (or logo) that will show in the browser title bar'>
                    {!isPremiumAccount
                        ? <input className={inputStyles.fileInput} type='file' disabled />
                        : <input
                            className={inputStyles.fileInput}
                            disabled={!isPremiumAccount ? true : false}
                            accept=".ico"
                            type='file'
                            onChange={e => {
                                handleMediaFiles(e.target.files[0], 'fav-icon')
                            }} />}
                </LockableInput>

                <PrimaryButton label='Go premium' action={() => window.alert('Feature coming soon 🤞')} full={false} />
            </PreviewLayout>
        </>
    )
}

export default Settings