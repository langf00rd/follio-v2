import { useContext } from "react"
import { Socials } from "../ui/themes/socials"
import { FollioContext } from "../../context/follioContext"
import CoffeeButton from "../ui/coffeeButton"
import ProjectCard from "../ui/projectCard"
import Head from "next/head"
import Link from "next/link"
import MadeWithFollio from "../ui/themes/madeWithFollio"

const Hero = ({ cv, customStyle, greeting, tagline, work, profilePhoto, socials, email }) => {
    return <section className={customStyle.section} id="hero">
        <div className={customStyle.sectionWrapper}>
            <div className="-mt-20 mt-5">
                {profilePhoto && (typeof profilePhoto === "object")
                    ? <img className={customStyle.heroImg} alt="profile photo" src={URL.createObjectURL(profilePhoto)} />
                    : <img className={customStyle.heroImg} alt="profile photo" src={profilePhoto} />}
            </div>
            <p className={customStyle.textLg}>{tagline}</p>
            <p>{greeting}</p>
            <p className="opacity-50">{work}</p>
            {/* <div className="flex items-center justify-center mt-5"> */}
            <div className="flex items-center flex-col">
                <Socials socials={socials} email={email} />
                {cv ? <div className="lg:block hidden mt-5">
                    <a href={cv} className={customStyle.button}>Download Resume</a>
                </div> : null}
                <div className="flex items-center lg:hidden mt-3">
                    {cv ? <a href={cv} className={customStyle.button}>Download Resume</a> : null}
                </div>
            </div>
            {/* </div> */}
        </div>
    </section>
}

const About = ({ about, customStyle }) => {
    if (!about) return null
    return <section className={customStyle.section} id="about">
        <div className={customStyle.sectionWrapper}>
            <p className={customStyle.textLg}>About me</p>
            <p>{about}</p>
        </div>
    </section>
}

const Projects = ({ customStyle, projects = [] }) => {
    if (projects.length < 1) return null
    return <section className={customStyle.section} id="projects">
        <div className={customStyle.sectionWrapper}>
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
    return <section className={customStyle.section} id="tools">
        <div className={customStyle.sectionWrapper}>
            <div>
                <p className={customStyle.textLg}>Tools &amp; skills</p>
                <ul className="flex flex-wrap items-center justify-center">
                    {tools.map((tool, i) => {
                        return <p key={i} className={customStyle.tool}>{tool}</p>
                    })}
                </ul>
            </div>
        </div>
    </section>
}

const Contact = ({ customStyle, socials, email }) => {
    if (!socials) return null
    return <section className={customStyle.section} id="contact">
        <div className={customStyle.sectionWrapper}>
            <div>
                <p className={customStyle.textLg}>Lets connect</p>
                <Socials socials={socials} email={email} />
            </div>
        </div>
    </section>
}

const HeadMetadata = ({ fullname = "Portfolio", tagline, about, favIcon }) => {
    return <Head>
        <title>{fullname} | {tagline}</title>
        <meta name="description" content={about} />
        <link rel="icon" href={favIcon} />
    </Head>
}

const FeaturedVideo = ({ customStyle, featuredVideo }) => {
    if (featuredVideo && featuredVideo !== "") return <section className={customStyle.section} id="featured-video">
        {featuredVideo && (typeof featuredVideo === "object")
            ? <video src={URL.createObjectURL(featuredVideo)} controls className={customStyle.featuredVideo} />
            : <video src={featuredVideo} controls className={customStyle.featuredVideo}></video>
        }

    </section>

    return null
}

const Payment = ({ socials, customStyle }) => {
    if (socials.coffee !== "") return <section className={customStyle.section} id="contact">
        <div className={customStyle.sectionWrapper}>
            <p className={customStyle.textLg}>I receive donations</p>
            <div className="flex items-center justify-center">
                <CoffeeButton coffee={socials.coffee} />
            </div>
        </div>
    </section>
}

const styles = {
    headerWrapper: `h-full flex items-center justify-between max-w-7xl m-auto p-5`,
    header: `border-b border-b-[#cccccc44] h-20 fixed top-0 left-0 z-10 w-screen bg-[#fff]`,
    headerLink: `ml-10 cursor-pointer hover:opacity-50 transition`,
    section: `mt-10 py-20`,
    grid: `grid lg:grid-cols-2 grid-cols-1`,
    body: `text-center bg-white text-[1.2rem]`,
    sectionWrapper: `max-w-5xl w-full m-auto flex flex-col items-center h-full p-5`,
    textLg: `lg:text-6xl text-4xl font-bold my-8 leading-tight`,
    projectCard: `text-left m-5 mx-0 lg:mr-5`,
    heroImg: `w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] object-cover lg:ml-10 mt-20 lg:mt-0 rounded-xl`,
    menuBtn: `lg:hidden`,
    logo: `h-[39px] object-cover`,
    tool: `border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`,
    featuredVideo: `rounded-lg lg:h-[500px] object-cover bg-[#F5F8FF] lg:w-[60%] w-[90%] m-auto`,
    button: `cursor-pointer hover:scale-90 transition bg-brand text-white text-2xl rounded-full p-2 px-5 text-[1.1rem]`,
}

const previewStyles = {
    headerWrapper: `h-full flex items-center justify-between max-w-7xl m-auto p-5`,
    header: `border-b border-b-[#cccccc44] h-20`,
    headerLink: `hidden`,
    section: `py-20`,
    grid: `grid grid-cols-1`,
    logo: `h-[39px] object-cover`,
    body: `text-center bg-white lg:shadow-xl lg:min-w-xl w-screen lg:w-[23vw] text-[1.1rem] lg:h-[80vh] h-[100vh] bg-white lg:border lg:border-borderColor lg:rounded-xl z-30 pb-44 lg:pb-0 overflow-y-scroll`,
    emptyBody: `p-56 bg-white border border-borderColor rounded-xl`,
    sectionWrapper: `max-w-7xl w-full m-auto flex-row items-center h-full p-5`,
    textLg: `text-3xl font-bold my-8 leading-tight`,
    projectCard: `text-left m-5 mx-0`,
    heroImg: `w-[230px] h-[230px] m-auto rounded-md w-full h-96 object-cover mt-20`,
    tool: `border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`,
    featuredVideo: `rounded-lg lg:h-[500px] object-cover bg-[#F5F8FF] w-[90%] m-auto`,
    button: `cursor-pointer hover:scale-90 transition bg-brand text-white text-2xl rounded-full p-2 px-5 text-[1.1rem]`,
}

const Theme1 = ({ data = {}, editMode = false }) => {
    const { skills, about, cv, isPremiumAccount, email, socials, tagline, logo, fullname, profilePhoto, work, projects, featuredVideo } = useContext(FollioContext)

    if (editMode) return <div className={previewStyles.body}>
        <Hero cv={cv} email={email} socials={socials} profilePhoto={profilePhoto} tagline={tagline} work={work} customStyle={previewStyles} />
        <FeaturedVideo customStyle={previewStyles} featuredVideo={featuredVideo} />
        <About customStyle={previewStyles} about={about} />
        <Projects customStyle={previewStyles} projects={projects} />
        <Tools customStyle={previewStyles} tools={skills} />
        <Payment customStyle={previewStyles} socials={socials} />
        <MadeWithFollio isPremiumAccount={isPremiumAccount} />
    </div>

    if (!editMode) return <div className={styles.body}>
        <HeadMetadata tagline={data.tagline} favIcon={data.favIcon} about={data.about} fullname={data.fullname} />
        <Hero cv={data.cv} email={data.email} socials={data.socials} profilePhoto={data.profilePhoto} tagline={data.tagline} work={data.work} customStyle={styles} />
        <FeaturedVideo customStyle={styles} featuredVideo={data.featuredVideo} />
        <About customStyle={styles} about={data.about} />
        <Projects customStyle={styles} projects={data.projects} />
        <Tools customStyle={styles} tools={data.skills} />
        <Payment customStyle={styles} socials={data.socials} />
        <MadeWithFollio isPremiumAccount={data.isPremiumAccount} />
    </div>

    return null
}

export default Theme1