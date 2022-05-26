import { useContext } from 'react'
import { FollioContext } from '../context/follioContext'
import Loader from '../components/ui/loader'
import Landing from './landing'
import PageHead from '../components/pageHead'

export default function Home() {
  const { showLoader } = useContext(FollioContext)

  return <div>
    <PageHead title="Follio - Easy Free Portfolio Builder 🦄" />
    {showLoader ? <Loader image={null} /> : <Landing />}
  </div>
}
