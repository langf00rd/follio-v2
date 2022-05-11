import { useContext, useEffect } from "react"
import { inputStyles } from "../../components/styles/input"
import { layoutStyles } from "../../components/styles/layout"
import Button from "../../components/ui/buttons/button"
import Header from "../../components/ui/header"
import Loader from "../../components/ui/loader"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import { FollioContext } from "../../context/follioContext"
import PageHead from "../../pageHead"

const Settings = () => {
    const { checkIsLoggedIn, setUsername, username, cv, setCv, showLoader, updateUsername } = useContext(FollioContext)

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
                        <div className={layoutStyles.container}>
                            <p className='mb-2 opacity-60'>Change your username</p>
                            <input className={inputStyles.input} value={username} onChange={e => setUsername(e.target.value)} placeholder={username} />
                            <Button action={updateUsername} full={false} label='Change your username' />
                        </div>
                        <div className='m-5' />
                        <div className={layoutStyles.container}>
                            <p className='mb-2 opacity-60'>Upload your resume {cv ? <a target='_blank' className="text-brand" href={cv} rel="noreferrer">[uploaded]</a> : null} </p>
                            <input
                                className={inputStyles.fileInput}
                                accept=".pdf, .doc, .docx, .rtf, .txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                type='file'
                                onChange={e => {
                                    setCv(e.target.files[0])
                                }}
                                placeholder={username} />
                        </div>
                    </div>
                </div>
                <div />
                <div />
                <div />
                {/* <div className={layoutStyles.preview}></div> */}
            </div>
        </div>
    </div >
}

export default Settings