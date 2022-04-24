import { useContext } from "react"
import { Socials } from "../ui/themes/socials"
import { FollioContext } from "../../context/follioContext"
import menu from "../../assets/svg/menu.svg"
import ProjectCard from "../ui/projectCard"
import Head from "next/head"
import Link from "next/link"

const PageHeader = ({ customStyle }) => {
    return <header className={customStyle.header}>
        <div className={customStyle.headerWrapper}>
            <p>JL</p>
            <nav className="lg:flex items-center hidden">
                <Link passHref={true} href="#home">
                    <p className={customStyle.headerLink}>About</p>
                </Link>
                <Link passHref={true} href="#projects">
                    <p className={customStyle.headerLink}>Portfolio</p>
                </Link>
                <Link passHref={true} href="#tools">
                    <p className={customStyle.headerLink}>Tools &amp; skills</p>
                </Link>
                <Link passHref={true} href="#contact">
                    <p className={customStyle.headerLink}>Contact</p>
                </Link>
            </nav>
            <img src={menu.src} alt="menu button" className={customStyle.menuBtn} />
        </div>
    </header>
}

const Hero = ({ customStyle, greeting, tagline, work, profilePhoto, socials }) => {
    return <section className={customStyle.hero} id="hero">
        <div className={customStyle.heroWrapper}>
            <div>
                <p>{greeting}</p>
                <p className={customStyle.textLg}>{tagline}</p>
                <p className="opacity-50">{work}</p>
                {socials ? <a href="#contact" className="text-xl mt-10 block pb-2 border-b-2 border-b-brand w-max text-brand">Connect with me &rarr;</a> : null}
            </div>
            {profilePhoto && (typeof profilePhoto === "object")
                ? <img className={customStyle.heroImg} alt="" src={URL.createObjectURL(profilePhoto)} />
                : <img className={customStyle.heroImg} alt="" src={profilePhoto} />}
        </div>
    </section>
}

const About = ({ about, customStyle }) => {
    if (!about) return null
    return <section className={customStyle.hero} id="about">
        <div className={customStyle.heroWrapper}>
            <div>
                <p className={customStyle.textLg}>About me</p>
                <p className="opacity-50">{about}</p>
            </div>
        </div>
    </section>
}

const Projects = ({ customStyle, projects = [] }) => {
    if (projects.length < 1) return null
    return <section className={customStyle.hero} id="projects">
        <div className={customStyle.heroWrapper}>
            <div>
                <p className={customStyle.textLg}>My portfolio</p>
                <ul className={customStyle.grid}>
                    {projects.map((project, i) => {
                        return <ProjectCard link={project.link} customStyle={customStyle.projectCard} name={project.name} key={i} thumbnail={project.thumbnail} description={project.description} />
                    })}
                </ul>
            </div>
        </div>
    </section>
}

const Tools = ({ customStyle, tools = [] }) => {
    if (tools.length < 1) return null
    return <section className={customStyle.hero} id="tools">
        <div className={customStyle.heroWrapper}>
            <div>
                <p className={customStyle.textLg}>Tools &amp; skills</p>
                <ul className="flex flex-wrap">
                    {tools.map((tool, i) => {
                        return <p key={i} className={customStyle.tool}>{tool}</p>
                    })}
                </ul>
            </div>
        </div>
    </section>
}

const FindMe = ({ customStyle, socials }) => {
    if (!socials) return null
    return <section className={customStyle.hero} id="contact">
        <div className={customStyle.heroWrapper}>
            <div>
                <p className={customStyle.textLg}>Connect with me</p>
                <Socials socials={socials} />
            </div>
        </div>
    </section>
}

const HeadMetadata = () => {
    return <Head>
        <title>Jonathan Iverson</title>
        <meta name="description" content="{data.about}" />
        <link rel="icon" href="convert-user-logo-to-ico" />
    </Head>
}

const styles = {
    headerWrapper: `h-full flex items-center justify-between max-w-7xl m-auto p-5`,
    header: `border-b border-b-[#cccccc44] h-16`,
    headerLink: `ml-10 cursor-pointer hover:opacity-50 transition`,
    hero: `lg:py-32 py-20`,
    grid: `grid lg:grid-cols-2 grid-cols-1`,
    body: `text-[1.2rem]`,
    heroWrapper: `max-w-7xl w-full m-auto flex flex-col lg:flex-row items-center h-full p-5`,
    textLg: `lg:text-6xl text-4xl font-bold my-8 leading-tight`,
    projectCard: `m-5 mx-0 lg:mx-5`,
    heroImg: `rounded-md w-full h-96 lg:h-full object-cover lg:ml-5 mt-20 lg:mt-0`,
    menuBtn: `lg:hidden`,
    tool: `border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`
}

const mobileStyles = {
    headerWrapper: `h-full flex items-center justify-between max-w-7xl m-auto p-5`,
    header: `border-b border-b-[#cccccc44] h-16`,
    headerLink: `hidden`,
    hero: `py-20`,
    grid: `grid grid-cols-1`,
    body: `lg:min-w-xl w-screen lg:w-[23vw] text-[1.1rem] lg:h-[80vh] h-[100vh] bg-white lg:border lg:border-borderColor rounded-xl z-30 pb-44 lg:pb-0 overflow-y-scroll`,
    emptyBody: `p-56 bg-white border border-borderColor rounded-xl`,
    heroWrapper: `max-w-7xl w-full m-auto flex-row items-center h-full p-5`,
    textLg: `text-3xl font-bold my-8 leading-tight`,
    projectCard: `m-5 mx-0 mx-5`,
    heroImg: `rounded-md w-full h-96 object-cover mt-20`,
    tool: `border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`
}

const Theme1 = ({ data = {}, editMode = false }) => {
    const { skills, about, tagline, profilePhoto, work, projects } = useContext(FollioContext)

    if (editMode) return <div className={mobileStyles.body}>
        <PageHeader customStyle={mobileStyles} />
        <Hero profilePhoto={profilePhoto} tagline={tagline} work={work} customStyle={mobileStyles} />
        <About customStyle={mobileStyles} about={about} />
        <Projects customStyle={mobileStyles} projects={projects} />
        <Tools customStyle={mobileStyles} tools={skills} />
        <FindMe customStyle={mobileStyles} />
    </div>

    if (!editMode) return <div className={styles.body}>
        <HeadMetadata />
        <PageHeader customStyle={styles} />
        <Hero profilePhoto={data.profilePhoto} tagline={data.tagline} work={data.work} customStyle={styles} />
        <About customStyle={styles} about={data.about} />
        <Projects customStyle={styles} projects={data.projects} />
        <Tools customStyle={styles} tools={data.skills} />
        <FindMe customStyle={styles} socials={data.socials} />
    </div>

    return null
}

export default Theme1