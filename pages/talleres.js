import HeaderWhite from '../components/Headerwhite.component'
import Footer from '../components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'
import { Parallax } from 'react-scroll-parallax'

export default function Ceremonias() {
    return (
        <>
            <Head>
                <title>Cursos y talleres | Aramoniah</title>
                <meta name="description" content="Cursos y talleres enfocados al empoderamiento personal, buscando conectar con nosotros de manera real, genuina y desde la aceptación, usando el poder de nuestra historia a nuestro favor." />
                <meta name="keywords" content="cursos, talleres, empoderamiento, historia, aceptación, empoderamiento personal, historia a nuestro favor" />
            </Head>
            <div className="w-full h-[500px] bg-center bg-cover" style={{backgroundImage: 'url("https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/ceremonias2.jpg")'}}>
                <HeaderWhite />
            </div>
            <div className="mt-0 block justify-between mt-16 sm:mt-24 mb-24 w-complete sm:w-complete-sm mx-auto">
                <div>
                    <h4 className="font-serif text-sm text-azul">Nuestras experiencias</h4>
                    <h1 className="font-serif text-3xl text-gris mt-3">Cursos y talleres</h1>
                </div>
                <p className="md:w-[500px] text-gris mt-6 md:mt-6">Cada curso y taller está enfocado al empoderamiento personal, buscando conectar con nosotros de manera real, genuina y desde la aceptación, usando el poder de nuestra historia a nuestro favor.</p>
            </div>

            <div className="w-complete sm:w-complete-sm mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:grid-rows-[400px_100px_400px]">
                <Parallax speed={5} className="h-full w-full md:row-start-1 md:row-end-3">
                    <div className="shadow-lg bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/empoderamiento.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Empoderamiento a través del ser</h1>
                </Parallax>
                <Parallax speed={2} className="h-full w-full md:row-start-1 md:row-end-2">
                    <div className="shadow-lg bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/historia.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">El poder de tu historia</h1>
                </Parallax>
                <Parallax speed={3.5} className="h-full w-full md:row-start-3 md:row-end-4">
                    <div className="shadow-lg bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/meditacion.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Meditación</h1>
                </Parallax>
                <Parallax speed={6} className="h-full w-full md:row-start-2 md:row-end-4">
                    <div className="shadow-lg bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/escritura.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Escritura: conversaciones con el corazón</h1>
                </Parallax>
            </div>
            <div className="bg-[#9EAA97] w-complete sm:w-complete-sm mx-auto mt-20 shadow-fanoespecial">
      <div className="mx-auto max-w-7xl px-12 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-24">
        <h2 className="text-xl text-center md:text-left sm:text-3xl font-serif leading-relaxed sm:leading-relaxed text-ow2 sm:text-3xl">
            ¿Quieres participar
          <br />
            o planear un curso?
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="#"
            className="mx-auto sm:mx-0 font-serif bg-ow2 px-16 py-5 text-xl font-bold text-[#9EAA97] shadow-sm hover:bg-ow focus-visible:outline focus-visible:outline-2"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
            <Footer />
        </>
    )
}