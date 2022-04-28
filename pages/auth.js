import { useContext, useEffect } from "react"
import { useSession, signIn, signOut } from 'next-auth/react'
import { FollioContext } from "../context/follioContext"
import { useRouter } from "next/dist/client/router"
import Button from "../components/ui/buttons/button"
import PageHead from "../pageHead"

const styles = {
    title: `text-3xl sm:text-6xl mb-2 font-extrabold text-center`,
    mainInputBox: ` p-5 rounded-md text-center sm:w-6/12`,
    main: `w-screen h-screen flex flex-col items-center justify-center`,
}

const Auth = () => {
    const { authenticateUser, checkAuthStatus } = useContext(FollioContext)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        onload()
    }, [session])

    const onload = async () => {
        console.warn("auth status 🚩", await checkAuthStatus())
    }

    // return <div>
    //     <Button label="Continue with Google" action={authenticateUser} />
    // </div>


    return <div className={styles.main}>
        <PageHead title="Follio - Account 🦄" />
        <div className={styles.mainInputBox}>
            {/* <div className="flex items-center justify-center mb-5">
                <Logo />
            </div> */}
            {/* <p className="sm:mt-5 sm:text-5xl font-extrabold text-brand max-w-2xl leading-tight m-auto">Ship your portfolio in less than 2 minutes</p> */}
            <p className="sm:mt-5 text-2xl sm:text-3xl leading-tight m-auto">Sign up/Log in</p>
            {session && (session.user && sessionStorage.getItem("data")) ?
                <div>
                    <p className="mt-10 opacity-50">Logged in as {session.user.email}</p>

                    <div className="flex justify-center items-center mt-10">
                        <Button full={false} label="Go home" action={authenticateUser} />
                        {/* <GhostButton label="Logout" action={logout} /> */}
                    </div>
                </div>
                : <div>
                    <div className="my-10 mb-3">
                        <Button full={false} label="Continue with Google" action={authenticateUser} />
                    </div>
                </div>}
        </div>

    </div>
}

export default Auth