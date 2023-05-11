import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Aramoniah | Home</title>
      <meta name="description" content="Aramoniah es un proyecto con la intención de crear espacios de conciencia e intención, a través de la presencia y conexión..." />
    </Head>
    <div>
      <Header />
      <h1 className="font-serif mt-20 sm:mt-32 w-[80vw] sm:w-[65vw] mx-auto text-gris text-center text-lg sm:text-[25px] sm:leading-relaxed leading-relaxed">Creando espacios de consciencia y conexión.</h1>
      <div className="w-full sm:w-[calc(100vw-72px)] sm h-96 sm:h-[400px] bg-gris mx-auto mt-6 bg-cover bg-center opacity-90" style={{backgroundImage: "url('/banner.jpg')"}}></div>
    </div>
    <div className="w-complete sm:w-complete-sm mt-20 sm:mt-28 mx-auto md:grid md:grid-cols-2 gap-12">
      <div className="flex flex-col justify-center md:order-2">
        <h1 className="text-lg sm:text-[22px] text-azul font-serif">Acerca de Aramoniah</h1>
        <p className="text-md text-gris font-sans mt-4">Es un proyecto con la intención de crear espacios de conciencia e intención, a través de la presencia y conexión...</p>
        <Link className="hover:bg-azuloscuro bg-azul py-[14px] box-content inline-block text-white mt-4 flex items-center w-48 justify-center gap-3 font-serif text-sm" href="/acerca-de">
          Conocer más
          <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </Link>
      </div>
      <div style={{backgroundImage: "url('/ad2.jpg');"}} className="md:order-1 mt-8 md:mt-0 w-full h-80 sm:h-[400px] bg-cover bg-center opacity-90">

      </div>
    </div>
    <h1 className="text-center mt-20 text-2xl text-azul font-serif">Experiencias Aramoniah</h1>
    <div className="w-complete sm:w-complete-sm mt-8 mx-auto md:grid md:grid-cols-2 gap-20">
      <div>
        <Link href="/ceremonias" className="hover:opacity-70 block w-full h-80 sm:h-[400px] bg-cover bg-center opacity-90" style={{backgroundImage: "url('/ceremonia.jpg')"}}></Link>
        <h2 className="mt-3 text-lg font-serif text-gris">Ceremonias</h2>
      </div>
      <div className="mt-12 md:mt-0">
        <Link href="talleres" className="hover:opacity-70 block w-full h-80 sm:h-[400px] bg-cover bg-center opacity-90" style={{backgroundImage: "url('/taller.jpg')"}}></Link>
        <h2 className="mt-3 text-lg font-serif text-gris">Talleres</h2>
      </div>
    </div>
    <div className="bg-[#9EAA97] w-complete sm:w-complete-sm mx-auto mt-20 shadow-fanoespecial">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-24">
        <h2 className="text-center sm:text-left text-xl font-serif sm:leading-normal text-ow2 sm:text-3xl">
          Descarga tu workbook gratis
          <br />
          para empezar a meditar.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="mx-auto sm:mx-0 font-serif bg-ow2 px-16 py-5 text-xl font-semibold text-[#9EAA97] shadow-sm hover:bg-ow focus-visible:outline focus-visible:outline-2"
          >
            Descargar
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}