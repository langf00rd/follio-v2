import { useContext } from "react"
import { FollioContext } from "../../../../context/follioContext"

const Google = () => {
    const { authenticateUser } = useContext(FollioContext)

    return <button onClick={authenticateUser} className="bg-[#f1f1f1] active:scale-75 transition cursor-pointer outline-none p-2 px-4 w-max rounded-full m-auto border border-mid flex justify-center items-center">
        <img src='https://www.follio.app/_next/static/media/google.7bb8a5e4.svg' className="w-10 h-10 rounded-full mr-3" alt='google' />
        Continue with google
    </button>
}

export default Google