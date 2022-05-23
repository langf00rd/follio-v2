import { buttonStyles } from "../components/styles/buttonStyles"
import Link from "next/link"
import Logo from "../components/logo"
import PageHead from '../components/pageHead'

const Landing = () => {
    return (
        <>
            <div className="lg:text-[1.2rem]">
                <PageHead title="Follio - Online portfolio builder 🚀" />
                <Header />
                <Hero />
                <Features />
                <Quote />
                <FeaturedUsers />
                <Testimonials />
                <Footer />
                {/* 
                */}
            </div>
        </>
    )
}

const ProductHuntBanner = () => {
    return (
        <>
            <div className="flex justify-center mb-10">
                <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
                </a>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <p className="text-center p-20 opacity-90">&copy; 2022 Follio | Product of Vaporware Studios</p>
        </>
    )
}

const Header = () => {
    return <header className="fixed z-10 top-0 bg-[#fff] left-0 w-screen lg:px-56 px-5 m-auto flex items-center justify-between h-[60px]">
        <Logo />
        {/* <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <Link passHref={true} href='#'><p className={styles.link}>Home</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>About</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>Services</p></Link>
                <Link passHref={true} href='#'><p className={styles.link}>Contact</p></Link>
            </ul>
        </nav> */}
        <GetStartedButton />
    </header>
}

const Hero = () => {
    return <div className={styles.hero}>
        {/* <ProductHuntBanner /> */}
        <div className="max-w-4xl m-auto">
            <h1 className={styles.h1}>Free Online Portfolio Builder</h1>
            <p className='my-10 opacity-50'>An easy way to create and deploy your portfolio site with your skills, projects, socials, meeting schedules, and custom domain for free!</p>
            <div className='flex items-center justify-center flex-wrap'>
                <GetStartedButton />
                <div className="m-5">
                    <Link href='' passHref={true}>View demo &rarr;</Link>
                </div>
            </div>
        </div>
    </div>
}

const GetStartedButton = () => {
    return <Link href='/auth' passHref={true}>
        <p className={buttonStyles.brandButton}>Get started</p>
    </Link>
}

const Features = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.h2}>What you can do?</h1>
                    <p className='my-5 opacity-50 mb-20'>No need for designers or plugins; simply pick a template, style it anyway you want, and fill it with your info. Boom! You have your website.</p>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full">
                            <UpdateFeature label="Dope themes" icon="🎨" />
                            <UpdateFeature label="Custom QR code" icon="👩‍💻" />
                            <UpdateFeature label="Color customization" icon="💅" />
                            <UpdateFeature label="Responsive design" icon="📱" />
                            <UpdateFeature working={true} label="Page analytics" icon="📈" />
                            <UpdateFeature working={true} label="Meeting scheduling" icon="📆" />
                            {/* <UpdateFeature soon={true} label="Submitting your design" icon="😎" /> */}
                            <UpdateFeature soon={true} label="Custom domain" icon="🌟" />
                            <UpdateFeature label="Tips/donations" icon="💰" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const FeaturedUsers = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.h2}>Loved by twitter</h1>
                    <div className="m-20" />
                    <div className="flex flex-wrap max-w-5xl m-auto items-center justify-evenly wrap">
                        <User role="SWE Student" link="https://www.follio.app/azimifardous" twitter="https://twitter.com/azimifardous" image="http://res.cloudinary.com/breellz/image/upload/v1649851342/v1ywskvkyesqkzsc7zkp.jpg" />
                        <User role="Software Developer" link="https://www.follio.app/abbaskhan" twitter="https://twitter.com/KhanAbbas201" image="https://lh3.googleusercontent.com/a-/AOh14GjKbuUSwQDcsQwc3FaiQBLJunny09pS8b7tvMGklQ=s96-c" />
                        <User role="Web3 dev, Content creator" link="https://www.follio.app/favoronuoha" twitter="https://twitter.com/heyOnuoha" image="https://pbs.twimg.com/profile_images/1468914223405277189/_25swnVl_400x400.jpg" />
                        <User role="Blockchain developer" link="https://https://www.follio.app/thevatsal" twitter="https://twitter.com/theVatsal_eth" image="http://res.cloudinary.com/breellz/image/upload/v1649672271/mlejeypghxifl67zmatb.png" />
                        <User role="Digital artist" link="https://www.follio.app/eaziart" twitter="https://twitter.com/ezi_art_" image="https://pbs.twimg.com/profile_images/1508088843253256196/CGQCAjT8_400x400.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Quote = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.h2}>&ldquo; Follio was created so that anyone can have their own portfolio site up and running in just a few clicks. &rdquo;</h1>
                    <p className="italic my-5 opacity-50">Langford - Creator</p>
                </div>
            </div>
        </>
    )
}

const Testimonials = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.h2}>From our amazing users</h1>
                    <div className="m-20" />
                    <div className="flex items-center justify-center flex-wrap">
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                </div>
            </div>
        </>
    )
}

const TestimonialCard = () => {
    return (
        <>
            <div className={styles.testimonial}>
                <div className="text-left lg:-mb-10 pt-5 opacity-50">
                    <h1 className={styles.h1}>
                        &ldquo;
                    </h1>
                </div>
                <p className="mb-5 text-left">Man i just made my portffolio within a few minutes. Really enjoyed it</p>
                <div className="text-sm mt-3">
                    <p>Ahmad Fardous Azimi</p>
                    <Link passHref={true} href='https://www.follio.app/azimifardous'>
                        <p className={styles.pageLink}>follio.app/azimifardous</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

const User = ({ image, role, link, twitter }) => {
    return <div className="flex flex-col items-center mb-20 m-10 sm:mb-0 sm:mr-10">
        <a href={twitter} target="_blank" rel="noreferrer">
            <img src={image} className="rounded-full w-56 h-56 bg-[#f1f1f1] hover:opacity-70" />
        </a>
        <p className="text-xl mt-5">{role}</p>
        <Link href={link} target="_blank" rel="noreferrer" className="text-[#3d5bff] mt-1">{link.replace("https://", "").replace("www.", "")}</Link>
        <Twitter twitterLink={twitter} />
    </div>
}

const Twitter = ({ twitterLink }) => {
    return <a href={twitterLink} target="_blank" rel="noreferrer" className="mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
    </a>
}

const UpdateFeature = ({ label, soon = false, working = false, icon }) => {
    return <div className="m-2">
        <div className={styles.featureCard}>
            <div className={styles.featureIcon}>{icon}</div>
            <p className="text-xl text-center">{label}</p>
            {soon ? <p className="opacity-50 text-sm">Coming soon</p> : <></>}
            {working ? <p className="opacity-50 text-sm text-brand">In progress</p> : <></>}
        </div>
    </div>
}

const styles = {
    hero: `w-screen lg:px-56 px-5 m-auto lg:py-44 mt-[63px] py-32 text-center`,
    // hero: `w-screen lg:px-56 px-5 m-auto border-t border-t-[#f1f1f1] lg:py-44 mt-[63px] py-32 text-center`,
    h1: `h1 lg:text-7xl text-4xl`,
    h2: `h2 lg:text-5xl text-3xl`,
    section: `py-32`,
    sectionWrapper: `max-w-6xl m-auto text-center p-5`,
    testimonial: `lg:w-1/3 m-3 bg-[#F5F6F7] border border-[#f1f1f1] p-5 w-max lg:px-10 rounded-xl text-right`,
    featureCard: `hover:bg-[#fff] transition bg-[#F5F6F7] border border-[#f1f1f1] p-5 py-10 w-full flex items-center justify-center flex-col rounded-xl`,
    featureIcon: `block mb-6 text-5xl`,
    navLinks: `flex items-center hidden lg:flex`,
    link: `p-3 hover:text-brand cursor-pointer`,
    pageLink: `my-1 hover:text-black text-brand cursor-pointer`
}

export default Landing