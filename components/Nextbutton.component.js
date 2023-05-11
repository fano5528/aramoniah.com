import { useSwiper } from 'swiper/react'

export default function Next({className}) {
    const swiper = useSwiper();

    return (
        <button className="absolute top-48 bg-red-500 w-16 h-16 z-10" onClick={()=>{swiper.slideNext()}}>Hola</button>
    )
}