import { useContext, useEffect } from "react"
import { useSession, signIn, signOut } from 'next-auth/react'
import { FollioContext } from "../context/follioContext"
import { useRouter } from "next/dist/client/router"
import Button from "../components/ui/buttons/button"
import PageHead from "../pageHead"
import Logo from "../components/logo"
import Google from "../components/ui/buttons/auth/google"

const Auth = () => {
    const { authenticateUser, checkAuthStatus, logout } = useContext(FollioContext)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        onload()
    }, [session])

    const onload = async () => {
        console.warn("auth status 🚩", await checkAuthStatus())
    }

    return <div className={styles.main}>
        <PageHead title="Follio - Account 🦄" />
        <div className={styles.mainInputBox}>
            <header className="fixed top-0 left-0 w-screen lg:px-56 px-5 m-auto flex items-center justify-between h-[60px]">
                <Logo />
                {session ? <div className="flex items-center">
                    <img src={session.user.image} alt='avatar' className='w-10 h-10 rounded-full mr-3 bg-mid border border-mid' />
                    <p className="">{session.user.name}</p>
                </div> : <></>}
            </header>

            <div className="max-w-4xl m-auto p-5 rounded-xl">
                {!session ? <div>
                    <h1 className="text-2xl sm:text-5xl font-medium leading-tight mb-3">Lets build your website</h1>
                    <p className="opacity-50">You only need to sign up/in to account.</p>
                </div> : <h1 className="text-2xl sm:text-5xl font-medium leading-tight mb-5">🎉 Welcome back {session.user.name}</h1>}


                {session && (session.user && sessionStorage.getItem("data")) ?
                    <div>
                        <div className="flex justify-center items-center mt-10">
                            <Button full={false} label="Go home" action={authenticateUser} />
                        </div>
                    </div>
                    : <div>
                        <div className="my-10 mb-3">
                            <Google />
                        </div>
                    </div>}
                {session ? <p onClick={logout} className='mt-5 cursor-pointer'>Logout</p> : null}
            </div>
        </div>
    </div>
}

export default Auth

const styles = {
    title: `text-3xl sm:text-6xl mb-2 font-extrabold text-center`,
    mainInputBox: ` p-5 rounded-md text-center sm:w-6/12`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-white`,
}