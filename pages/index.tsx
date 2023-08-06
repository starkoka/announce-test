import type { NextPage } from 'next'
import Head from 'next/head'
import { getApp, FirebaseApp } from 'firebase/app'

import '../utils/firebase/init' // Initialize FirebaseApp
import '../components/BookTable';
import {BookTable} from "@/components/BookTable";

const Home: NextPage = () => {
    const app: FirebaseApp = getApp()
    return (
        <>
            <Head>
                <title>お知らせテスト</title>
            </Head>
            <h1>お知らせページ</h1>
            <BookTable/>
        </>
    )
}

export default Home