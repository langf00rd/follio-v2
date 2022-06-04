import { useContext } from "react"
import { Socials } from "../ui/themes/socials"
import { FollioContext } from "../../context/follioContext"
import CoffeeButton from "../ui/coffeeButton"
import ProjectCard from "../ui/projectCard"
import Head from "next/head"
import MadeWithFollio from "../ui/themes/madeWithFollio"
import Image from 'next/image'
import { textStyles } from "../styles/textStyles"
import { Fade } from "react-reveal"

const Hero = ({ coverPhoto, cv, customStyle, greeting, tagline, work, profilePhoto, socials, email }) => {
    return (
        <>
            <div className={customStyle.hero}>
                {typeof coverPhoto === "object"
                    ? <img src={URL.createObjectURL(coverPhoto)} className={customStyle.heroImg} />
                    : <img alt='' className={customStyle.heroImg} src={coverPhoto} />}
                <div className={customStyle.heroTextWrapper}>
                    <h1 className={customStyle.h1}>{tagline}</h1>
                    <br />
                    <p>{work}</p>
                </div>
            </div>
        </>
    )
}

const PageHeader = ({ customStyle, fullname }) => {
    return (
        <>
            <div className={customStyle.header}>
                <div className={customStyle.headerWrapper}>
                    <p>{fullname}</p>
                    <p> </p>
                </div>
            </div>
        </>
    )
}

const Gallery = ({ customStyle, projects = [] }) => {
    return (
        <>
            <div className={customStyle.section}>
                <div className={customStyle.sectionWrapper}>
                    {/* <h2 className="font-[cookie] text-3xl">Explore</h2> */}
                    {/* <p className="font-[cookie] text-3xl">In this gallery you can see a selection of my work. I hope you enjoy.</p> */}
                    {/* <br />
                    <br />
                    <br /> */}
                    <ul className={customStyle.galleryGrid}>
                        {projects.map((project, i) => {
                            return <li key={i} className={customStyle.galleryItem}>
                                {
                                    project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img className={customStyle.galleryImg} src={project.thumbnail} alt={project.name} />
                                    </a> : <img className={customStyle.galleryImg} src={project.thumbnail} alt={project.name} />
                                }
                            </li>
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

// const About = ({ about, customStyle }) => {
//     if (!about) return null
//     return <section className={customStyle.section} id="about">
//         <div className={customStyle.sectionWrapper}>
//             <p className={customStyle.textLg}>About me</p>
//             <p>{about}</p>
//         </div>
//     </section>
// }

// const Projects = ({ customStyle, projects = [] }) => {
//     if (projects.length < 1) return null
//     return <section className={customStyle.section} id="projects">
//         <div className={customStyle.sectionWrapper}>
//             <div>
//                 <p className={customStyle.textLg}>My portfolio</p>
// <ul className={customStyle.grid}>
//     {projects.map((project, i) => {
//         return <ProjectCard link={project.link} customStyle={customStyle.projectCard} name={project.name} key={i} thumbnail={project.thumbnail} description={project.description} />
//     })}
// </ul>
//             </div>
//         </div>
//     </section>
// }

// const Tools = ({ customStyle, tools = [] }) => {
//     if (tools.length < 1) return null
//     return <section className={customStyle.section} id="tools">
//         <div className={customStyle.sectionWrapper}>
//             <div>
//                 {/* <h2 className="font-[cookie]">Tools &amp; skills</h2> */}
//                 {/* <br />
//                 <br /> */}
//                 <ul className="flex flex-wrap items-center justify-center">
//                     {tools.map((tool, i) => {
//                         return <p key={i} className={customStyle.tool}>{tool}</p>
//                     })}
//                 </ul>
//             </div>
//         </div>
//     </section>
// }

const HeadMetadata = ({ fullname = "Portfolio", tagline, about, favIcon }) => {
    return (
        <>
            <Head>
                <title>{fullname} | {tagline}</title>
                <meta name="description" content={about} />
                <link rel="icon" href={favIcon} />
            </Head>
        </>
    )
}

// const FeaturedVideo = ({ customStyle, featuredVideo }) => {
//     if (featuredVideo !== "") return <section className={customStyle.section} id="featured-video">
//         {(typeof featuredVideo === "object")
//             ? <video src={URL.createObjectURL(featuredVideo)} controls className={customStyle.featuredVideo} />
//             : <video src={featuredVideo} controls className={customStyle.featuredVideo}></video>
//         }

//     </section>

//     return null
// }

// const Payment = ({ socials, customStyle }) => {
//     if (socials.coffee === '') return null

//     return <section className={customStyle.section} id="contact">
//         <div className={customStyle.sectionWrapper}>
//             <p className={customStyle.textLg}>I receive donations</p>
//             <div className="flex items-center justify-center">
//                 <CoffeeButton coffee={socials.coffee} />
//             </div>
//         </div>
//     </section>
// }

const Thanks = ({ customStyle, socials, email }) => {
    return (
        <>
            <div className="p-44 px-5 bg-[#F0F0F0]">
                <h1 className="font-[cookie] text-2xl lg:text-5xl">Thank you for visiting my page</h1>
                <div className={customStyle.socialWrapper}>
                    <Socials socials={socials} email={email} />
                </div>
            </div>
        </>
    )
}

const styles = {
    body: `font-[cookie] text-center bg-white text-[1.2rem]`,
    header: `font-[cookie] z-50 border-b border-b-[#cccccc44] fixed top-0 left-0 z-10 w-screen bg-[#fff]`,
    headerWrapper: `font-[cookie] flex items-center justify-between max-w-7xl m-auto lg:py-10 p-5`,
    heroImg: `font-[cookie] opacity-50 w-screen h-[330px] lg:h-[700px] relative object-cover`,
    hero: `font-[cookie] w-full h-full relative`,
    heroTextWrapper: `font-[cookie] absolute top-0 left-0 z-10 w-full mt-[50px] h-[330px] lg:h-[700px] flex items-center justify-center flex-col`,
    sectionWrapper: `font-[cookie] max-w-7xl -full m-auto py-20 p-5`,
    textLg: `font-[cookie] my-8`,
    galleryGrid: `font-[cookie] gallery-grid text-left`,
    galleryImg: `font-[cookie] w-full border border-mid rounded-md`,
    galleryItem: `font-[cookie] m-5 mx-0`,
    socialWrapper: `font-[cookie] flex items-center justify-center mt-5`,
    h1: `font-[cookie] lg:text-6xl text-4xl px-20`,
    tool: `font-[cookie] border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`,
}

const previewStyles = {
    body: `font-[cookie] text-center bg-white lg:shadow-xl lg:min-w-xl w-screen lg:w-[23vw] text-[1.1rem] lg:h-[80vh] h-[100vh] bg-white lg:border lg:border-borderColor lg:rounded-xl z-30 pb-44 lg:pb-0 overflow-y-scroll`,
    header: `font-[cookie] z-50 border-b border-b-[#cccccc44]`,
    headerWrapper: `font-[cookie] flex items-center justify-between max-w-7xl m-auto lg:py-10 p-5`,
    heroImg: `font-[cookie] opacity-50 relative object-cover h-[330px] w-full`,
    hero: `font-[cookie] relative`,
    heroTextWrapper: `font-[cookie] absolute top-0 left-0 z-10 w-full h-[330px] flex items-center justify-center flex-col`,
    sectionWrapper: `font-[cookie] py-20 p-5`,
    galleryGrid: `font-[cookie] gallery-grid text-left`,
    galleryImg: `font-[cookie] w-full border border-mid rounded-md`,
    galleryItem: `font-[cookie] m-5 mx-0`,
    socialWrapper: `font-[cookie] flex items-center justify-center mt-5`,
    h1: `font-[cookie] text-4xl px-20`,
    tool: `font-[cookie] border border-[#cccccc44] w-max whitespace-nowrap p-1 px-3 rounded-full m-3`,
}

const Theme4 = ({ data = {}, editMode = false }) => {
    const { skills, about, fullname, showFollioTag, coverPhoto, cv, email, socials, tagline, profilePhoto, work, projects, featuredVideo } = useContext(FollioContext)

    if (editMode) return <div className={previewStyles.body}>
        <PageHeader fullname={fullname} customStyle={previewStyles} />
        <Hero coverPhoto={coverPhoto} cv={cv} email={email} socials={socials} profilePhoto={profilePhoto} tagline={tagline} work={work} customStyle={previewStyles} />
        <Gallery projects={projects} customStyle={previewStyles} />
        {/* <Fade bottom><Tools customStyle={previewStyles} tools={skills} /></Fade> */}
        <Thanks customStyle={previewStyles} socials={socials} email={email} />
        <MadeWithFollio show={showFollioTag} />
        {/* <div className="flex items-center justify-center p-[100px] px-5">
           
        </div> */}

        {/* <FeaturedVideo customStyle={previewStyles} featuredVideo={featuredVideo} />
        <About customStyle={previewStyles} about={about} />
        <Projects customStyle={previewStyles} projects={projects} />
       
        <Payment customStyle={previewStyles} socials={socials} />
         */}
    </div>

    return <div className={styles.body}>
        <HeadMetadata tagline={data.tagline} favIcon={data.favIcon} about={data.about} fullname={data.fullname} />
        <PageHeader fullname={data.fullname} customStyle={styles} />
        <Fade top><Hero coverPhoto={data.coverPhoto} cv={data.cv} email={data.email} socials={data.socials} profilePhoto={data.profilePhoto} tagline={data.tagline} work={data.work} customStyle={styles} /></Fade>
        <Fade bottom><Gallery projects={data.projects} customStyle={styles} /></Fade>
        {/* <Fade bottom><Tools customStyle={styles} tools={data.skills} /></Fade> */}
        <Fade bottom><Thanks customStyle={styles} socials={data.socials} email={data.email} /></Fade>
        <MadeWithFollio show={data.showFollioTag} />

        {/* <FeaturedVideo customStyle={styles} featuredVideo={data.featuredVideo} />
        <About customStyle={styles} about={data.about} />
        <Projects customStyle={styles} projects={data.projects} />
       
        <Payment customStyle={styles} socials={data.socials} />
       */}
    </div >
}

export default Theme4