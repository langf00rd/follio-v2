import Header from "../../components/ui/header"
import { layoutStyles } from "../../components/styles/layout"
import { inputStyles } from "../../components/styles/input"
import { editLinks } from "../../components/styles/editLinks"
import PageControlLinks from "../../components/ui/sidebar/pageLinks"
import EditPageLinks from "../../components/ui/sidebar/editPageLinks"

const Edit = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="hidden lg:block">
                    <PageControlLinks />
                    <div className="m-5" />
                    <EditPageLinks />
                </div>

                <div className="w-full max-w-2xl">
                    <p className={layoutStyles.textLg}>Edit your page</p>

                    {/* <div className="w-screen lg:w-3/5 bg-brand flex overflow-x-scroll">
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div> */}

                    <div className="bg-white w-full border border-mid p-5 rounded-md mt-10">
                        <p className="mb-7 font-medium">Introduction</p>
                        <input className={inputStyles.input} placeholder="Your name" />
                        <input className={inputStyles.input} placeholder="Your work" />
                        <textarea className={inputStyles.textarea} placeholder="Introduction text" />
                        <textarea className={inputStyles.textarea} placeholder="About you" />
                    </div>

                </div>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Edit