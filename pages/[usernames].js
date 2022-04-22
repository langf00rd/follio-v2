import Image from "next/image"
import Link from "next/link"
import menu from "../assets/svg/menu.svg"
import { Socials } from "../components/ui/themes/socials"

const styles = {
    headerWrapper: `h-full flex items-center justify-between max-w-7xl m-auto p-5`,
    header: `border-b border-b-[#cccccc44] h-16`,
    headerLink: `ml-10 cursor-pointer hover:opacity-50 transition`,

    hero: `lg:py-32 py-20`,
    heroWrapper: `max-w-7xl m-auto flex flex-col lg:flex-row items-center h-full p-5`,

    textLg: `lg:text-6xl text-5xl font-bold my-8 leading-tight`,

    projectCard: `m-5`,

    tool: `border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`
}

const PageHeader = () => {
    return <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <p>JL</p>
            <nav className="lg:flex items-center hidden">
                <Link passHref={true} href="#home">
                    <p className={styles.headerLink}>About</p>
                </Link>
                <Link passHref={true} href="#home">
                    <p className={styles.headerLink}>Portfolio</p>
                </Link>
                <Link passHref={true} href="#home">
                    <p className={styles.headerLink}>Collaborations</p>
                </Link>
                <Link passHref={true} href="#home">
                    <p className={styles.headerLink}>Contacts</p>
                </Link>
            </nav>
            <img src={menu.src} alt="menu button" className="lg:hidden" />
        </div>
    </header>
}

const Hero = () => {
    return <section className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div>
                <p>Hi! I am Jonathan Iverson and</p>
                <p className={styles.textLg}>I will help you Build Your Dream</p>
                <p className="opacity-50">Self-sabotage undermines your success despite your own wishes,
                    dreams or values. It often stems from low self-esteem, negative
                    self-talk, and related negative ...</p>
                <a href="#contact" className="text-xl mt-10 block pb-2 border-b-2 border-b-brand w-max text-brand">Connect with me &rarr;</a>
            </div>
            <img className="lg:w-1/2 w-full lg:ml-5 mt-20 lg:mt-0" src="https://www.nme.com/wp-content/uploads/2021/09/ROCKLAHOMA_SLIPKNOT-1.jpg" alt="" />
        </div>
    </section>
}

const About = () => {
    return <section className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div>
                <p className={styles.textLg}>About me</p>
                <p className="opacity-50">Self-sabotage undermines your success despite your own wishes,
                    dreams or values.elf-sabotage undermines your success despite your own wishes,
                    dreams or values.elf-sabotage undermines your success despite your own wishes,
                    dreams or values.elf-sabotage undermines your success despite your own wishes,
                    dreams or values.    It often stems from low self-esteem, negative
                    self-talk, and related negative ...</p>
            </div>
        </div>
    </section>
}

const Projects = () => {
    return <section className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div>
                <p className={styles.textLg}>My portfolio</p>
                <ul className="grid lg:grid-cols-2 grid-cols-1">
                    <li className={styles.projectCard}>
                        <img src="https://www.nme.com/wp-content/uploads/2021/09/ROCKLAHOMA_SLIPKNOT-1.jpg" alt="" />
                        <p className="font-bold my-3">Hello world!</p>
                        <p>Self-sabotage undermines your success despite your own wishes,
                            dreams or values.elf-sabotage</p>
                        <a href="#project-link" className="text-brand border-b-2 border-b-brand mt-5 block w-max">View site &rarr;</a>
                    </li>
                    <li className={styles.projectCard}>
                        <img src="https://www.nme.com/wp-content/uploads/2021/09/ROCKLAHOMA_SLIPKNOT-1.jpg" alt="" />
                        <p className="font-bold my-3">Hello world!</p>
                        <p>Self-sabotage undermines your success despite your own wishes,
                            dreams or values.elf-sabotage</p>
                        <a href="#project-link" className="text-brand border-b-2 border-b-brand mt-5 block w-max">View site &rarr;</a>
                    </li>
                    <li className={styles.projectCard}>
                        <img src="https://www.nme.com/wp-content/uploads/2021/09/ROCKLAHOMA_SLIPKNOT-1.jpg" alt="" />
                        <p className="font-bold my-3">Hello world!</p>
                        <p>Self-sabotage undermines your success despite your own wishes,
                            dreams or values.elf-sabotage</p>
                        <a href="#project-link" className="text-brand border-b-2 border-b-brand mt-5 block w-max">View site &rarr;</a>
                    </li>
                    <li className={styles.projectCard}>
                        <img src="https://www.nme.com/wp-content/uploads/2021/09/ROCKLAHOMA_SLIPKNOT-1.jpg" alt="" />
                        <p className="font-bold my-3">Hello world!</p>
                        <p>Self-sabotage undermines your success despite your own wishes,
                            dreams or values.elf-sabotage</p>
                        <a href="#project-link" className="text-brand border-b-2 border-b-brand mt-5 block w-max">View site &rarr;</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}

const Tools = () => {
    return <section className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div>
                <p className={styles.textLg}>Tools &amp; skills</p>
                <ul className="flex flex-wrap">
                    <p className={styles.tool}>HTML</p>
                    <p className={styles.tool}>CSS</p>
                    <p className={styles.tool}>JavaScript</p>
                    <p className={styles.tool}>React</p>
                    <p className={styles.tool}>Tailwind CSS</p>
                    <p className={styles.tool}>Python</p>
                    <p className={styles.tool}>Docker</p>
                    <p className={styles.tool}>HTML</p>
                    <p className={styles.tool}>CSS</p>
                    <p className={styles.tool}>JavaScript</p>
                    <p className={styles.tool}>React</p>
                    <p className={styles.tool}>Tailwind CSS</p>
                    <p className={styles.tool}>Python</p>
                    <p className={styles.tool}>Docker</p>
                </ul>
            </div>
        </div>
    </section>
}

const FindMe = () => {
    return <section className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div>
                <p className={styles.textLg}>Connect with me</p>
                <Socials />
            </div>
        </div>
    </section>
}

const Page = () => {
    return <div className="text-[1.2rem]">
        <PageHeader />
        <Hero />
        <About />
        <Projects />
        <Tools />
        <FindMe />
    </div>
}

export default Page