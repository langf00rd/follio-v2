import { useContext } from "react"
import { FollioContext } from "../../../context/follioContext"
import { inputStyles } from "../../styles/input"
import { layoutStyles } from "../../styles/layout"
import { textStyles } from "../../styles/textStyles"

const Payment = () => {
    const { socials, setSocials, isPremiumAccount } = useContext(FollioContext)

    let newSocials = {
        twitter: socials.twitter,
        dev: socials.dev,
        dailydev: socials.dailydev,
        hashnode: socials.hashnode,
        linkedin: socials.linkedin,
        stackoverflow: socials.stackoverflow,
        youtube: socials.youtube,
        dribbble: socials.dribbble,
        twitch: socials.twitch,
        discord: socials.discord,
        behance: socials.behance,
        instagram: socials.instagram,
        github: socials.github,
        coffee: socials.coffee,
        ethAddress: socials.ethAddress,
        paypal: socials.paypal
    }

    const setNewSocials = (value, type) => {
        newSocials[type] = value.trim()
        setSocials(newSocials)
    }

    return <div>
        <div className={layoutStyles.container}>
            <div>
                <label className={textStyles.label}>Buy me a coffee</label>
                <input
                    className={inputStyles.input}
                    value={newSocials.coffee}
                    onChange={e => setNewSocials(e.target.value, "coffee")}
                    placeholder="https://www.buymeacoffee.com/john-doe" />
            </div>

            <div>
                <p className='text-accent mt-[10px] -mb-3'>Go premium to unlock feature</p>
                <div className='opacity-50'>
                    <label className={textStyles.label}>Ethereum wallet address</label>
                    {!isPremiumAccount ? <div className={inputStyles.input}>eg. 0x1...234</div>
                        : <input
                            className={inputStyles.input}
                            value={newSocials.ethAddress}
                            onChange={e => setNewSocials(e.target.value, "ethAddress")}
                            placeholder="eg. 0x1...234" />}
                </div>
            </div>

            <div>
                <p className='text-accent mt-[10px] -mb-3'>Go premium to unlock feature</p>
                <div className='opacity-50'>
                    <label className={textStyles.label}>PayPal</label>
                    {!isPremiumAccount ? <div className={inputStyles.input}>follio@paypal.com</div>
                        : <input
                            type='email'
                            className={inputStyles.input}
                            value={newSocials.paypal}
                            onChange={e => setNewSocials(e.target.value, "paypal")}
                            placeholder="follio@paypal.com" />}
                </div>
            </div>
        </div>
    </div>
}

export default Payment