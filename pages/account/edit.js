import Header from "../../components/ui/header"
import { layoutStyles } from "../../components/styles/layout"
import { inputStyles } from "../../components/styles/input"
import { editLinks } from "../../components/styles/editLinks"

const Edit = () => {
    return <div>
        <Header />
        <div className={layoutStyles.main}>
            <div className={layoutStyles.previewMainWrapper}>
                <div className="bg-white h-max p-5 rounded-sm shadow-sm hidden sm:block">
                    <p className={editLinks.link}>Edit content</p>
                    <p className={editLinks.link}>Randomize text</p>
                    <p className={editLinks.link}>Edit</p>
                    <p className={editLinks.link}>Edit content</p>
                    <p className={editLinks.link}>Randomize text</p>
                    <p className={editLinks.link}>Edit</p>
                </div>
                <div>
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

                    <div className="bg-white w-full shadow-sm p-5 rounded-md mt-10">
                        <p className="mb-7 font-medium">Introduction</p>
                        <input className={inputStyles.input} placeholder="Your name" />
                        <input className={inputStyles.input} placeholder="Your name" />
                        <textarea className={inputStyles.textarea} placeholder="Your name" />
                    </div>

                    <div className="bg-white w-full shadow-sm p-5 rounded-md mt-10">
                        <p className="mb-7 font-medium">Introduction</p>
                        <input className={inputStyles.input} placeholder="Your name" />
                        <input className={inputStyles.input} placeholder="Your name" />
                        <textarea className={inputStyles.textarea} placeholder="Your name" />
                    </div>
                </div>
                <div className={layoutStyles.preview}></div>
            </div>
        </div>
    </div>
}

export default Edit