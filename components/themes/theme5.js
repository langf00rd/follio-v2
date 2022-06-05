/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { Fade } from "react-reveal"
import { Socials } from "../ui/themes/socials"
import Head from "next/head"
import Link from "next/link"
import MadeWithFollio from "../ui/themes/madeWithFollio"
import { FollioContext } from "../../context/follioContext"
import CoffeeButton from "../ui/coffeeButton"

const Theme5 = ({ data = {}, editMode = false }) => {
    const { skills, about, fullname, showFollioTag, coverPhoto, cv, email, socials, tagline, profilePhoto, work, projects, featuredVideo } = useContext(FollioContext)

    if (editMode) return (
        <>
            <div className={previewStyles.body}>
                <PageHeader fullname={fullname} customStyle={previewStyles} />
                <Fade top><Hero email={email} socials={socials} profilePhoto={profilePhoto} tagline={tagline} work={work} customStyle={previewStyles} /></Fade>
                <Gallery projects={projects} customStyle={previewStyles} />
                <Fade><Payment coffee={socials.coffee} /></Fade>
                <Fade top><PageFooter email={email} socials={socials} showFollioTag={showFollioTag} /></Fade>
            </div>
        </>
    )

    return (
        <>
            <div className={styles.body}>
                <PageHeader fullname={data.fullname} customStyle={styles} />
                <HeadMetadata tagline={data.tagline} favIcon={data.favIcon} about={data.about} fullname={data.fullname} />
                <Fade top><Hero email={data.email} socials={data.socials} profilePhoto={data.profilePhoto} tagline={data.tagline} work={data.work} customStyle={styles} /></Fade>
                <Fade bottom><Gallery projects={data.projects} customStyle={styles} /></Fade>
                <Fade><Payment coffee={data.socials.coffee} /></Fade>
                <Fade top><PageFooter email={data.email} socials={data.socials} showFollioTag={data.showFollioTag} /></Fade>
            </div>
        </>
    )
}

const ThemeLayout = ({ children }) => {
    return (
        <>
            <section className='max-w-7xl p-5 m-auto'>{children}</section>
        </>
    )
}

const PageFooter = ({ socials, email, showFollioTag }) => {
    return (
        <>
            <ThemeLayout>
                <div className="py-20 flex items-center justify-between flex-wrap">
                    <div className='-ml-2 mt-5 lg:mt-0'>
                        <Socials socials={socials} email={email} />
                    </div>
                    <MadeWithFollio show={showFollioTag} />
                </div>
            </ThemeLayout>
        </>
    )
}

const Gallery = ({ customStyle, projects = [] }) => {
    return (
        <>
            <ThemeLayout>
                <ul className={customStyle.galleryGrid} id='my-works'>
                    {projects.map((project, i) => {
                        return <li key={i} className={customStyle.galleryItem}>
                            <Fade bottom>
                                {
                                    project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img className={customStyle.galleryImg} src={project.thumbnail} alt={project.name} />
                                    </a> : <img className={customStyle.galleryImg} src={project.thumbnail} alt={project.name} />
                                }
                            </Fade>
                        </li>
                    })}
                </ul>
            </ThemeLayout>
        </>
    )
}

const Hero = ({ email, socials, profilePhoto, tagline, work, customStyle }) => {
    return (
        <>
            <ThemeLayout>
                <div className='py-20 text-center'>
                    <div><img className='w-[200px] h-[200px] m-auto rounded-full' src={profilePhoto} /></div>
                    <p className={customStyle.h1}>{tagline}</p>
                    <p className='text-2xl my-10'>{work}</p>
                    <div className='flex items-center justify-center scale-110'>
                        <Socials socials={socials} email={email} />
                    </div>
                </div>
            </ThemeLayout>
        </>
    )
}

const PageHeader = ({ fullname, customStyle }) => {
    return (
        <>
            <ThemeLayout>
                <div className={customStyle.header}>
                    <p className='text-2xl'>{fullname}</p>
                    <div>
                        <Link href='#my-works' passHref={true}>
                            <div className={styles.button}>My works</div>
                        </Link>
                    </div>
                </div>
            </ThemeLayout>
        </>
    )
}

const Payment = ({ coffee }) => {
    if (coffee === '') return null

    return (
        <>
            <div className='flex items-center lg:justify-center mt-20 ml-5 lg:ml-0'>
                <CoffeeButton coffee={coffee} />
            </div>
        </>
    )
}

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

const styles = {
    body: `bg-[#ededed40]`,
    header: `m-auto max-w-7xl flex items-center justify-between`,
    button: `bg-[#242424] text-white p-3 px-5 cursor-pointer hover:border-2 border-2 hover:bg-[#ffffffff] hover:text-[#242424] rounded-full`,
    galleryGrid: `lg:columns-3 sm:columns-2 columns-1 text-left`,
    galleryImg: `w-full border border-mid rounded-md`,
    galleryItem: `m-5 mx-0`,
    h1: `lg:text-7xl text-4xl font-medium my-10`,
}

const previewStyles = {
    body: `bg-[#ededed40] lg:shadow-xl lg:min-w-xl w-screen lg:w-[23vw] lg:h-[80vh] h-[100vh] lg:rounded-xl z-30 pb-44 lg:pb-0 overflow-y-scroll`,
    galleryGrid: `columns-1 text-left`,
    h1: `text-4xl font-medium my-10`,
    galleryItem: `m-5 mx-0`,
    header: `m-auto max-w-7xl flex items-center justify-between pt-20 lg:pt-0`,
}

export default Theme5