import { layoutStyles } from "../../components/styles/layout"
import { FollioContext } from "../../context/follioContext"
import { useContext, useEffect } from "react"
import Loader from "../../components/ui/loader"
import PageLayout from "../../components/layouts/pageLayout"
import ComingSoon from "../../components/comingSoon"

const Analytics = () => {
    const { showLoader, checkIsLoggedIn } = useContext(FollioContext)

    useEffect(() => {
        checkIsLoggedIn()
    }, [checkIsLoggedIn])

    if (showLoader) return <Loader />

    return (
        <>
            <PageLayout title='Analytics' metatitle='Follio - Analytics'>
                <ComingSoon />
            </PageLayout>
        </>
    )
}

export default Analytics