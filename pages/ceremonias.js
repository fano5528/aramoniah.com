import HeaderWhite from '../components/Headerwhite2.component'
import Footer from '../components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Slider from "react-slick";
import Nextbutton from '../components/Nextbutton.component'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

export default function Ceremonias() {
  let swiper = useSwiper();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
            <div className="w-full h-[500px] bg-center bg-cover" style={{backgroundImage: 'url("https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/cursos.png")'}}>
                <HeaderWhite />
            </div>
            <div className="mt-0 block justify-between mt-16 sm:mt-24 mb-24 w-complete sm:w-complete-sm mx-auto">
                <div>
                    <h4 className="font-serif text-sm text-azul">Nuestras experiencias</h4>
                    <h1 className="font-serif text-3xl text-gris mt-3">Ceremonias y eventos</h1>
                </div>
                <p className="md:w-[500px] text-gris mt-6 md:mt-6">Co-creamos ceremonias para crear espacios de conciencia en las etapas más importantes de tu vida.</p>
            </div>

            <div className="w-complete sm:w-complete-sm mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/votos.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Unión / boda espiritual</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/cumple.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Cumpleaños</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/soltera.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Despedida de soltera</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/baby.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Blessing way (embarazo)</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/empresariales.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris block">Empresariales: conexión de equipo, empoderamiento, principio de año o fin de año, intencionando y reconociendo metas y logros</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/union.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Conexión de amigxs</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/despedida.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Duelo, despidiendo y honrando a un ser querido</h1>
                </div>
                <div className="h-full w-full">
                    <div className="bg-[#e0e0e0] h-48 sm:h-72 w-full bg-center bg-cover opacity-90 hover:opacity-70" style={{backgroundImage: "url('https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/baby2.jpg')"}}></div>
                    <h1 className="mt-4 font-serif text-lg text-gris">Bienvenida bebé</h1>
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

    
    {/* <Swiper className="mt-24 sm:mt-32 w-complete sm:w-complete-sm"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="bg-[#e0e0e0] h-72 w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('/baby.jpg')"}}></div>
        <h1 className="mt-4 font-serif text-xl text-gris">Bienvenida bebé</h1>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#e0e0e0] h-72 w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('/baby.jpg')"}}></div>
        <h1 className="mt-4 font-serif text-xl text-gris">Bienvenida bebé</h1>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#e0e0e0] h-72 w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('/baby.jpg')"}}></div>
        <h1 className="mt-4 font-serif text-xl text-gris">Bienvenida bebé</h1>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#e0e0e0] h-72 w-full bg-center bg-cover opacity-90" style={{backgroundImage: "url('/baby.jpg')"}}></div>
        <h1 className="mt-4 font-serif text-xl text-gris">Bienvenida bebé</h1>
      </SwiperSlide>
      <Nextbutton />
  </Swiper>*/}
            <Footer />
        </>
    )
}
