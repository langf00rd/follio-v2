import { FollioProvider } from '../context/follioContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <FollioProvider>
    <Component {...pageProps} />
  </FollioProvider>
}

export default MyApp
