import Link from 'next/link'
import { useState, useEffect } from 'react'
import { animated, useTransition } from '@react-spring/web'

export default function HeaderWhite() {
    // log on console value of isopen on change
    const [isOpen, setIsOpen] = useState(false)

    // animation
    const transitions = useTransition(isOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { friction: 20, tension: 300 }
    })
    const styles = transitions((style, item) => item && style)

    return (
        <div className="mt-8 sm:mt-12 mx-6 sm:mx-24 flex justify-between items-center top-0 absolute w-complete sm:w-complete-sm">
            <Link href="/">
                <img src="https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/black.svg" alt="logo" className="h-5 sm:h-8"/>
            </Link>
            <img src="https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/menublack.svg" alt="menu" className="h-[8px] sm:h-2 cursor-pointer" onClick={()=>{setIsOpen(true)}}/>
            {transitions((style, item) => item && (
                <animated.div className={`z-50 h-[355px] w-[calc(100vw-48px)] sm:w-[340px] absolute right-0 sm:right-0 top-0 sm:top-0 shadow-fanoespecial bg-white`} style={style}>
                    <svg onClick={()=>{ setIsOpen(false) }} className="float-right mt-6 mr-6 cursor-pointer fill-gris" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                    <ul className="flex flex-col items-center w-full mt-[85px] gap-4">
                        <li><Link href="/acerca-de" className="text-md text-gris hover:text-black font-serif">Acerca de</Link></li>
                        <li><Link href="/ceremonias" className="text-md text-gris hover:text-black font-serif">Ceremonias y eventos</Link></li>
                        <li><Link href="/talleres" className="text-md text-gris hover:text-black font-serif">Cursos y talleres</Link></li>
                        <li><Link href="/blog" className="text-md text-gris hover:text-black font-serif">Blog</Link></li>
                        <li className="py-4"><Link href="/contacto" className="text-md text-gris hover:bg-azuloscuro bg-azul px-20 py-4 text-white font-serif">Contacto</Link></li>
                    </ul>
                </animated.div>
            ))}
        </div>
    )
}