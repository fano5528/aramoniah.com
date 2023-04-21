import HeaderWhite from '../components/Headerwhite.component'
import Footer from '../components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'

export default function Ceremonias() {
    return (
        <>
            <Head>
                <title>Cursos y talleres | Aramoniah</title>
                <meta name="description" content="Cursos y talleres enfocados al empoderamiento personal, buscando conectar con nosotros de manera real, genuina y desde la aceptación, usando el poder de nuestra historia a nuestro favor." />
                <meta name="keywords" content="cursos, talleres, empoderamiento, historia, aceptación, empoderamiento personal, historia a nuestro favor" />
            </Head>
            <div className="w-full h-[500px] bg-center bg-cover" style={{backgroundImage: 'url("/ceremonias2.jpg")'}}>
                <HeaderWhite />
            </div>
            <div className="mt-0 w-full flex justify-between mt-24 mb-24 w-complete sm:w-complete-sm mx-auto">
                <div>
                    <h4 className="font-serif text-sm text-azul">Nuestras experiencias</h4>
                    <h1 className="font-serif text-3xl text-gris mt-3">Cursos y talleres</h1>
                </div>
                <p className="w-[450px] text-gris">Cada curso y taller está enfocado al empoderamiento personal, buscando conectar con nosotros de manera real, genuina y desde la aceptación, usando el poder de nuestra historia a nuestro favor.</p>
            </div>

            <div className="w-complete sm:w-complete-sm mx-auto grid grid-cols-2 gap-20 grid-rows-[400px_100px_400px]">
                <div className="h-full w-full row-start-1 row-end-3">
                    <div className="bg-[#e0e0e0] h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('baby.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Empoderamiento a través del ser</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('ad2.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">El poder de tu historia</h1>
                </div>
                <div className="h-full w-full row-start-3 row-end-4">
                    <div className="bg-[#e0e0e0] h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('birthday.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Meditación</h1>
                </div>
                <div className="h-full w-full row-start-2 row-end-4">
                    <div className="bg-[#e0e0e0] h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('despedida.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Escritura: conversaciones con el corazón</h1>
                </div>
            </div>
            <div className="bg-[#9EAA97] w-complete sm:w-complete-sm mx-auto mt-20 shadow-fanoespecial">
      <div className="mx-auto max-w-7xl px-12 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-24">
        <h2 className="text-3xl font-serif leading-relaxed sm:leading-relaxed text-ow2 sm:text-3xl">
            ¿Quieres planear un curso?
          <br />
            Ponte en contacto...
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="#"
            className="font-serif bg-ow2 px-16 py-5 text-xl font-bold text-[#9EAA97] shadow-sm hover:bg-ow focus-visible:outline focus-visible:outline-2"
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