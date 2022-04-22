import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Styles = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Styles &amp; colors</p>
        <div className="flex item-center">
            <p className="opacity-50 mb-3 mt-5">Primary/brand color</p>
            <input className={inputStyles.colorInput} type="color" />
        </div>
        <div className="flex item-center">
            <p className="opacity-50 mb-3 mt-5">Accent/secondary color</p>
            <input className={inputStyles.colorInput} type="color" />
        </div>
    </div>
}

export default Styles