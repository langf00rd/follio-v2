const styles = {
    avatarSm: `border border-mid w-10 h-10 object-cover rounded-full cursor-pointer hover:scale-90 transition`,
    avatarMd: `border border-mid w-20 h-20 object-cover rounded-full cursor-pointer hover:scale-90 transition`,
    avatarLg: `border border-mid w-28 h-28 object-cover rounded-full cursor-pointer hover:scale-90 transition`,
}

const Avatar = ({ size = "sm", src, action }) => {
    if (size === "sm") return <img src={src} onClick={action} className={styles.avatarSm} />
    if (size === "md") return <img src={src} onClick={action} className={styles.avatarMd} />
    if (size === "lg") return <img src={src} onClick={action} className={styles.avatarLg} />
}

export default Avatar