import Head from "next/head"
import { useEffect, useState } from "react"
import Theme1 from "../components/themes/theme1"
import Button from "../components/ui/buttons/button"
import Loader from "../components/ui/loader"

const Page = () => {
    const [data, setData] = useState()
    const [exists, setExists] = useState(true)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername((window.location.pathname).replace("/", ""))
        console.log((window.location.pathname).replace("/", ""))
        getData()
    }, [username])

    const getData = async () => {
        try {
            setLoading(true)

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user-by-username/${username}`, { method: "GET" })
            const data = await res.json()

            if (res.status !== 200 || data.error || data.status === false) {
                setTimeout(() => {
                    setLoading(false)
                    setExists(false)
                }, 3000);
                return
            }

            console.log("source", data.payload)

            setData(data.payload)
            setLoading(false)

        } catch (e) {
            setLoading(false)
            console.log(e.message)
        }
    }

    if (loading) return <Loader />

    // return <div>
    //     <Head>
    //         <title>Jonathan Iverson</title>
    //         <meta name="description" content="{about}" />
    //         <link rel="icon" href="convert-userr-logo-to-ico" />
    //     </Head>
    //     <Theme1 editMode={false} />
    // </div>

    if ((data && data) && data.theme == 3) return <Theme1 editMode={false} data={data} />

    if (!exists) return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="sm:text-3xl text-2xl mb-10">Oops! site has no owner {data}</p>
        <a href="https://follio.app">
            <Button label="Claim this domain" />
        </a>
    </div>

    return null
}

export default Page