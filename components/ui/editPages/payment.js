import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"

const Payment = () => {
    const { socials, setSocials } = useContext(FollioContext)

    let newSocials = {
        coffee: socials.coffee,
        ethAddress: socials.ethAddress,
    }

    const setNewSocials = (value, type) => {
        newSocials[type] = value.trim()
        setSocials(newSocials)
    }

    return <div>
        <div className={layoutStyles.container}>
            <p className="mb-7 font-medium">Buy me coffee</p>
            <div className="flex items-center">
                <div className={inputStyles.socialInput}>
                    <label className={inputStyles.label}>buymecoffee.com/</label>
                    <input value={newSocials.coffee} onChange={e => setNewSocials(e.target.value, "coffee")} className={inputStyles.ghostInput} type="text" />
                </div>
            </div>
        </div>
        <div className='m-10' />
        <div className={layoutStyles.container}>
            <p className="mb-7 font-medium">Ethereum wallet address</p>
            <div className="flex items-center">
                <div className={inputStyles.socialInput}>
                    <input value={newSocials.ethAddress} onChange={e => setNewSocials(e.target.value, "ethAddress")} className={inputStyles.ghostInput} type="text" />
                </div>
            </div>
        </div>
    </div>
}

export default Payment