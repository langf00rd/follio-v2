import { createContext, useState } from "react"
import { useRouter } from "next/dist/client/router"
import { signIn, signOut, useSession } from "next-auth/react"

export const FollioContext = createContext()

export const FollioProvider = ({ children }) => {
    const { data: session } = useSession()
    const router = useRouter()

    /** User data fields */
    const [profilePhoto, setProfilePhoto] = useState("")

    const authenticateUser = async () => {
        try {
            if (!await checkAuthStatus()) {
                await signIn("google")
                return
            }
            prefill(JSON.parse(sessionStorage.getItem("data")))
            router.replace("/account/edit")
        } catch (e) {
            alert("An error occured. Please try again later.")
            console.log(e.message)
        }
    }

    const checkAuthStatus = async () => {
        if (!session) {
            /** When no user logged in */
            console.warn("not logged in at all")
            return false
        }
        if (session && session.user && !sessionStorage.getItem("data")) {
            /** Is logged in but no data */
            console.warn("session, no data")
            await fetchDataFromDB(session.user.email)
            return false
        }
        if (session && session.user && sessionStorage.getItem("data")) {
            /** when user is fully logged in */
            console.warn("logged in, data")
            return true
        }
        return false
    }

    /** Remove spaces and make string lowercase*/
    const formatUsername = (name) => {
        return (name.split(/\s+/).join("")).toLocaleLowerCase()
    }

    /** Create Account */
    const createAccount = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/add-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formatUsername(session.user.name),
                email: session.user.email,
                fullname: session.user.name,
                profilePhoto: session.user.image,
                createdAt: new Date().toISOString(),
                coverPhoto: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
            }),
        })
        const data = await res.json()
        if (!data.status) {
            alert(data.error)
            return
        }
        fetchDataFromDB(session.user.email)
    }

    /** Fetch user data from database */
    const fetchDataFromDB = async (_email) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user/${_email}`, { method: "GET" })
            const data = await res.json()

            /** When account is not in DB, create new account */
            if (!data.status) {
                console.error("no user data in DB", data)
                await createAccount()
                return
            }
            prefill(data.payload)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    /** Populate and prefill textfields and inputs with data from source */
    const prefill = (_source) => {
        sessionStorage.setItem("data", JSON.stringify(_source))
        console.log(JSON.stringify(_source))
        // setFullname(_source.fullname)
        // setCv(_source.cv)
        // setEmail(_source.email)
        // setUsername(_source.username)
        // setTagline(_source.tagline)
        // setWork(_source.work)
        // setViews(_source.views)
        // setAbout(_source.about)
        setProfilePhoto(_source.profilePhoto)
        // setCoverPhoto(_source.coverPhoto)
        // setShowGithubStats(_source.showGithubStats)
        // setSkills(_source.skills)
        // setWorkplaces(_source.workplaces)
        // setProjects(_source.projects)
        // setIsPremiumAccount(_source.isPremiumAccount)
        // setWorkplaces(_source.workplaces)
        // setSocials(_source.socials)
        // setTheme(_source.theme)
        // setAccentColor(_source.accentColor)
        // setThemeColor(_source.themeColor)
    }

    return <FollioContext.Provider value={{
        authenticateUser,
        profilePhoto,
    }}>
        {children}
    </FollioContext.Provider>
}