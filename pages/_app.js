import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
      <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
