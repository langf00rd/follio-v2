const styles = {
    avatarSm: `w-10 h-10 bg-mid object-cover rounded-full cursor-pointer hover:scale-90 transition`,
    avatarMd: `w-20 h-20 bg-mid object-cover rounded-full cursor-pointer hover:scale-90 transition`,
    avatarLg: `w-28 h-28 bg-mid object-cover rounded-full cursor-pointer hover:scale-90 transition`,
}

const Avatar = ({ size = "sm", src, action }) => {
    if (size === "sm") return <img src={src} onClick={action} className={styles.avatarSm} />
    if (size === "md") return <img src={src} onClick={action} className={styles.avatarMd} />
    if (size === "lg") return <img src={src} onClick={action} className={styles.avatarLg} />
}

export default Avatar