import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
