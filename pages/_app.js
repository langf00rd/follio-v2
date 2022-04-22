import { FollioProvider } from '../context/follioContext'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <FollioProvider>
      <Component {...pageProps} />
    </FollioProvider>
  </SessionProvider>
}

export default MyApp
