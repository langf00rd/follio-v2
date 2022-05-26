import { FollioContext } from "../../../context/follioContext"
import { layoutStyles } from "../../styles/layout"
import { inputStyles } from "../../styles/input"
import { useContext } from "react"
import twitter from "../../../assets/svg/twitter.svg"
import github from "../../../assets/svg/github.svg"
import instagram from "../../../assets/svg/instagram.svg"
import discord from "../../../assets/svg/discord.svg"
import dribbble from "../../../assets/svg/dribbble.svg"
import behance from "../../../assets/svg/behance.svg"
import linkedin from "../../../assets/svg/linkedin.svg"
import stackoverflow from "../../../assets/svg/stackoverflow.svg"
import twitch from "../../../assets/svg/twitch.svg"
import youtube from "../../../assets/svg/youtube.svg"

const Socials = () => {
    const { socials, setSocials } = useContext(FollioContext)

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
    }

    const setNewSocials = (value, type) => {
        newSocials[type] = value.trim()
        setSocials(newSocials)
    }

    return <div className={layoutStyles.container}>
        <div className="flex items-center">
            <img src={twitter.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>twitter.com/</label>
                <input value={newSocials.twitter} onChange={e => setNewSocials(e.target.value, "twitter")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={github.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>github.com/</label>
                <input value={newSocials.github} onChange={e => setNewSocials(e.target.value, "github")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={linkedin.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>linkedin.com/in/</label>
                <input value={newSocials.linkedin} onChange={e => setNewSocials(e.target.value, "linkedin")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={behance.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>behance.com/</label>
                <input value={newSocials.behance} onChange={e => setNewSocials(e.target.value, "behance")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={twitch.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>twitch.tv/</label>
                <input value={newSocials.twitch} onChange={e => setNewSocials(e.target.value, "twitch")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={instagram.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>instagram.com/</label>
                <input value={newSocials.instagram} onChange={e => setNewSocials(e.target.value, "instagram")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={stackoverflow.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>stackoverflow.com/user/</label>
                <input value={newSocials.stackoverflow} onChange={e => setNewSocials(e.target.value, "stackoverflow")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={dribbble.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>dribbble.com/</label>
                <input value={newSocials.dribbble} onChange={e => setNewSocials(e.target.value, "dribbble")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={discord.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>discord.com/users/</label>
                <input value={newSocials.discord} onChange={e => setNewSocials(e.target.value, "discord")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={youtube.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput}>
                <label className={inputStyles.label}>youtube.com/c/</label>
                <input value={newSocials.youtube} onChange={e => setNewSocials(e.target.value, "youtube")} className={inputStyles.ghostInput} type="text" />
            </div>
        </div>
    </div>
}

export default Socials

const styles = {
    socialIcon: `mb-5 h-6 w-6 mr-3`,
}