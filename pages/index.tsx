import type { NextPage } from 'next'
import { getApp, FirebaseApp } from 'firebase/app'

import '../utils/firebase/init' // Initialize FirebaseApp

const Home: NextPage = () => {
  const app: FirebaseApp = getApp()
  return (
      <ul>
        <li>name = {app.name}</li>
        <li>appId = {app.options.appId}</li>
        <li>apiKey = {app.options.apiKey}</li>
      </ul>
  )
}

export default Home