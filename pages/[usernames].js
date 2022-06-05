import { useEffect, useState } from "react"
import Theme1 from "../components/themes/theme1"
import Theme2 from "../components/themes/theme2"
import Theme3 from "../components/themes/theme3"
import Theme4 from "../components/themes/theme4"
import Theme5 from "../components/themes/theme5"
import Button from "../components/ui/buttons/button"
import Loader from "../components/ui/loader"

const Page = () => {
    const [data, setData] = useState()
    const [exists, setExists] = useState(true)
    const [loading, setLoading] = useState(true)
    const [loader, setLoader] = useState(null)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername((window.location.pathname).replace("/", ""))
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
                }, 5000);
                return
            }

            setLoader(data.payload.loader)
            setTimeout(() => {
                setData(data.payload)
                setLoading(false)
            }, 3000);

        } catch (e) {
            setLoading(false)
            console.log(e.message)
        }
    }

    if (loading) return <Loader image={loader} />

    // if (loading) return <Loader />

    if (data && data.theme == 1) return <Theme1 editMode={false} data={data} />
    if (data && data.theme == 2) return <Theme2 editMode={false} data={data} />
    if (data && data.theme == 3) return <Theme3 editMode={false} data={data} />
    if (data && data.theme == 4) return <Theme4 editMode={false} data={data} />
    if (data && data.theme == 5) return <Theme5 editMode={false} data={data} />

    // return <Theme4 editMode={false} data={data} />

    if (!exists) return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="sm:text-3xl text-2xl mb-10">Oops! site has no owner {data}</p>
        <a href="https://follio.app">
            <Button label="Claim this domain" />
        </a>
    </div>

    return null
}

export default Page