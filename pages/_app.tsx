import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Image from 'next/image'
import Nav from './components/Nav'
import LoginBtn from './components/LoginBtn'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>

      <Head>
        <title>Next Auth Demo</title>
        <meta name="description" content="Next auth demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto'>

        <Nav />
        <LoginBtn />
        <Component {...pageProps} />
      </div>

    </SessionProvider>
  )
}
