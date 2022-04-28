import Head from "next/head"

const PageHead = ({ title }) => {
    return <Head>
        {/* <title>Follio - Easy Free Portfolio Builder 🦄</title> */}
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="convert-user-logo-to-ico" />
    </Head>
}

export default PageHead