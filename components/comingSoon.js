import { layoutStyles } from "./styles/layout"
import { textStyles } from "./styles/textStyles"

const ComingSoon = () => {
    return (
        <>
            <div className={layoutStyles.container}>
                <h1 className={textStyles.comingSoonLabel}>Coming soon 😉</h1>
            </div>
        </>
    )
}

export default ComingSoon