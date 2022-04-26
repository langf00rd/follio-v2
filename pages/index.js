import { useContext } from 'react'
import { FollioContext } from '../context/follioContext'
import Loader from '../components/ui/loader'
import Landing from './landing'
import Head from 'next/head'

export default function Home() {
  const { showLoader } = useContext(FollioContext)
  if (showLoader) return <Loader />
  return <Landing />
}
