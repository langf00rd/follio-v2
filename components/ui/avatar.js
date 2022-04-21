const styles = {
    avatarSm: `w-10 h-10 bg-mid rounded-full cursor-pointer hover:scale-90 transition`,
    avatarMd: `w-20 h-20 bg-mid rounded-full cursor-pointer hover:scale-90 transition`,
    avatarLg: `w-28 h-28 bg-mid rounded-full cursor-pointer hover:scale-90 transition`,
}

const Avatar = ({ size = "sm", src, action }) => {
    if (size === "sm") return <div onClick={action} className={styles.avatarSm}></div>
    if (size === "md") return <div onClick={action} className={styles.avatarMd}></div>
    if (size === "lg") return <div onClick={action} className={styles.avatarLg}></div>
}

export default Avatar