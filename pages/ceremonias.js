import HeaderWhite from '../components/Headerwhite.component'
import Footer from '../components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'

export default function Ceremonias() {
    const faqs = [
        {
            question: 'How do you make holy water?',
            answer:
              'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
          },
    ]
    return (
        <>
            <Head>
                <title>Ceremonias y eventos | Aramoniah</title>
                <meta name="description" content="Co-creamos ceremonias para crear espacios de conciencia en las etapas más importantes de tu vida." />
                <meta name="keywords" content="ceremonias, eventos, baby blessing, bridal blessing, birthday blessing, despedida y honra, inicio de proyecto, unión de pareja, renovación de votos, empresariales" />
            </Head>
            <div className="w-full h-[500px] bg-center bg-cover" style={{backgroundImage: 'url("https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/ceremonias2.jpg")'}}>
                <HeaderWhite />
            </div>
            <div className="mt-0 block justify-between mt-16 sm:mt-24 mb-24 w-complete sm:w-complete-sm mx-auto">
                <div>
                    <h4 className="font-serif text-sm text-azul">Nuestras experiencias</h4>
                    <h1 className="font-serif text-3xl text-gris mt-3">Ceremonias y eventos</h1>
                </div>
                <p className="md:w-[500px] text-gris mt-6 md:mt-6">Co-creamos ceremonias para crear espacios de conciencia en las etapas más importantes de tu vida.</p>
            </div>

            <div className="w-complete sm:w-complete-sm mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 md:grid-rows-[400px_100px_400px_400px_100px_400px]">
                <div className="h-full w-full md:row-start-1 md:row-end-3">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/baby.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Baby blessing</h1>
                </div>
                <div className="h-full w-full md:row-start-1 md:row-end-2">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/ad2.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Bridal blessing</h1>
                </div>
                <div className="h-full w-full md:row-start-3 md:row-end-4">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/birthday.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Birthday blessing</h1>
                </div>
                <div className="h-full w-full md:row-start-2 md:row-end-4">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/despedida.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Despedida y honra</h1>
                </div>
                <div className="h-full w-full md:row-start-4 md:row-end-6">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/inicio.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Inicio de proyecto (nuevos comienzos)</h1>
                </div>
                <div className="h-full w-full md:row-start-4 md:row-end-5">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/union.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Unión de pareja</h1>
                </div>
                <div className="h-full w-full md:row-start-6 md:row-end-7">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/votos.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Renovación de votos</h1>
                </div>
                <div className="h-full w-full md:row-start-5 md:row-end-7">
                    <div className="bg-[#e0e0e0] h-96 md:h-[calc(100%-44px)] w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/empresariales.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-xl text-gris">Empresariales</h1>
                </div>
            </div>
            {/*<div className="">
      <div className="mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Preguntas frecuentes (FAQs)</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              ¿No encuentras la respuesta a tu pregunta? Ponte en{' '}
              <Link href="/contacto" className="font-semibold text-azul hover:text-azuloscuro">
                contacto.
              </Link>{' '}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>*/}
    <div className="bg-[#9EAA97] w-complete sm:w-complete-sm mx-auto mt-20 shadow-fanoespecial">
      <div className="mx-auto max-w-7xl px-12 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-24">
        <h2 className="text-xl text-center md:text-left sm:text-3xl font-serif leading-relaxed sm:leading-relaxed text-ow2 sm:text-3xl">
            ¿Quieres agendar<br/>tu ceremonia?
          <br />
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