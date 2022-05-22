import { buttonStyles } from "../components/styles/buttonStyles"
import Link from "next/link"
import Logo from "../components/logo"
import PageHead from "../pageHead"

const Landing = () => {
    return (
        <>
            <PageHead title="Follio - Online portfolio builder 🚀" />
            <Header />
            <Hero />
        </>
    )
}

const Header = () => {
    return <header className="fixed top-0 left-0 w-screen lg:px-56 px-5 m-auto flex items-center justify-between h-[60px]">
        <Logo />
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <Link passHref={true} href='#'><p className={styles.link}>Home</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>About</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>Services</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>Contact</p></Link>
            </ul>
        </nav>
        <GetStartedButton />
    </header>
}

const Hero = () => {
    return <div className={styles.hero}>
        <h1 className={styles.h1}>Online Portfolio Builder</h1>
        <p className='my-5'>Get your portfolio website in minutes</p>
        {/* <div className='flex items-center justify-center'><GetStartedButton /></div> */}
    </div>
}

const GetStartedButton = () => {
    return <Link href='/auth' passHref={true}>
        <p className={buttonStyles.brandButton}>Get started</p>
    </Link>
}

const styles = {
    hero: `w-screen lg:px-56 px-5 m-auto border-t border-t-[#f1f1f1] lg:py-44 mt-[63px] py-32 text-center`,
    h1: `h1 lg:text-5xl text-3xl`,
    navLinks: `flex items-center hidden lg:flex`,
    link: `p-3 hover:text-brand cursor-pointer`
}

export default Landing