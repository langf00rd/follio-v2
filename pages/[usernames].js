import Head from "next/head"
import Theme1 from "../components/themes/theme1"

const Page = () => {
    return <div>
        <Head>
            <title>Jonathan Iverson</title>
            <meta name="description" content="{about}" />
            <link rel="icon" href="convert-userr-logo-to-ico" />
        </Head>
        <Theme1 />
    </div>
}

export default Page