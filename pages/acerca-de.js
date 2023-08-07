import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import Head from 'next/head'
import Link from 'next/link'

export default function AcercaDe() {
    return (
        <>
        <Head>
            <title>Acerca de | Aramoniah</title>
            <meta name="description" content="Aramoniah es un proyecto con la intención de crear espacios de conciencia e intención, a través de la presencia y conexión..." />
            <meta name="keywords" content="Acerca de, Aramoniah, Carmen Aramoni, Conexiones, Espiritualidad, Viajes, Experiencias" />
        </Head>
        <Header />
        <div className="w-complete sm:w-complete-sm grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto mt-20">
            <div className="bg-cover bg-center h-96 md:col-start-1 md:col-end-3 shadow-fanoespecial flex flex-col items-center justify-center" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/adbanner.jpg')"}}>
                <h4 className="text-ow font-sans text-sm">Acerca de</h4>
                <h1 className="text-ow text-4xl font-serif mt-2">Aramoniah</h1>
                <p className="text-ow mt-5 text-gris w-[80%] text-center">Es un proyecto con la intención de crear espacios de conciencia e intención, a través de la presencia y conexión...</p>
            </div>
            <div className="bg-cover bg-start md:col-start-1 md:col-end-2 shadow-fanoespecial h-96 md:h-auto" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/carmen1.jpg')"}}></div>
            <div className="shadow-fanoespecial bg-white px-14 py-14">
                <h4 className="text-azul font-serif text-sm">Detrás de Aramoniah</h4>
                <h1 className="text-gris text-3xl font-serif mt-2">Carmen Aramoni</h1>
                <p className="mt-5 text-gris">Siempre he sentido una gran fascinación acerca de las conexiones, entender que todos tenemos algo que aportar y aprender de las historias de los demás, ya que al compartir conectamos. 
<br/><br/>
Soy una persona a lo que le gusta saber de todo, desde que tengo uso de memoria me interesaban los temas relacionados con la energía, la espiritualidad, aunque no lo entendía realmente.
<br/><br/>
Pero cuando las cosas se acomodan y llega tu momento es que la vida fluye y te pone justo en el lugar indicado.</p>
            </div>
            <div className="bg-cover bg-center h-96 md:col-start-1 md:col-end-3 shadow-fanoespecial" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/mano.jpg')"}}></div>
            <div className="shadow-fanoespecial bg-white px-14 py-14">
                <h4 className="text-azul font-serif text-sm">¿Cómo empezó todo?</h4>
                <h1 className="text-gris text-3xl font-serif mt-2">Nuestra historia</h1>
                <p className="mt-5 text-gris">Aramoniah ha sido un viaje de vida, pero todo empieza formalmente con un viaje terrenal por Asia en 2019 que se volvió el principio de un viaje espiritual. 
<br/><br/>
A pesar de siempre estar involucrada e interesada en temas de espiritualidad nunca me había llegado a conocer tanto como en ese viaje, en donde descubrí que no hace falta irnos a ningún lado, solo basta con cerrar los ojos y observarnos para realmente conocernos.

</p>
            </div>
            <div className="bg-cover bg-center md:col-start-2 md:col-end-3 shadow-fanoespecial h-96 md:h-auto" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/nhistoria.jpg')"}}></div>
        </div>
        <div className="bg-[#9EAA97] w-complete sm:w-complete-sm mx-auto mt-20 shadow-fanoespecial">
      <div className="mx-auto max-w-7xl px-12 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-24">
        <h2 className="text-3xl font-serif leading-relaxed sm:leading-relaxed text-ow2 sm:text-3xl">
            ¿Quieres planear una experiencia?
          <br />
            Ponte en contacto...
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="/contacto"
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
