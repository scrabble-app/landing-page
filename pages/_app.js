import Footer from '@/src/components/footer/footer'
import Header from '@/src/components/header/header'
import '@/styles/globals.css'
import'@/styles/styles.css'

export default function App({ Component, pageProps }) {
  return (

    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
