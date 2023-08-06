import type { NextPage } from 'next'
import { getApp, FirebaseApp } from 'firebase/app'

import '../utils/firebase/init' // Initialize FirebaseApp
import '../components/BookTable';
import {BookTable} from "@/components/BookTable";

const Home: NextPage = () => {
    const app: FirebaseApp = getApp()
    return (
        <BookTable/>
    )
}

export default Home