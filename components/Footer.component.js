import Link from 'next/link'
import Head from 'next/head'

export default function Footer({props}) {
    return (
        <>
            <Head>
                <meta name="og:image" content="/icon.png"/>
            </Head>
        <footer className="w-full bg-azul text-white flex flex-col justify-center items-start mt-32 py-12 sm:py-12">
            <div className="sm:flex w-complete sm:w-complete-sm sm:justify-between mx-auto">
                <Link href="/"><img src="https://internaut.nyc3.cdn.digitaloceanspaces.com/aramoniah.com/icon.svg" className="h-12 w-12"/></Link>
                <div className="mt-8 sm:mt-0">
                    <h3 className="text-ow">Platiquemos...</h3>
                    <h1 className="text-ow text-lg sm:text-xl font-serif mt-3 hover:text-ow2"><Link href="tel:5644074830">(56) 4407 4830</Link></h1>
                </div>
            </div>
            <div className="mt-8 sm:mt-10 sm:flex sm:justify-between items-end w-complete sm:w-complete-sm mx-auto">
                <ul className="flex flex-col gap-3 mt-8 mt-0 sm:mt-0 sm:grid sm:grid-cols-2 gap-x-10 items-end sm:order-2">
                    <li className="w-full"><Link href="/ceremonias" className="font-serif text-ow block sm:text-right hover:text-ow2">Ceremonias</Link></li>
                    <li className="w-full"><Link href="/talleres" className="font-serif text-ow block sm:text-right hover:text-ow2">Talleres</Link></li>
                    <li className="w-full"><Link href="/acerca-de" className="font-serif text-ow block sm:text-right hover:text-ow2">Acerca de</Link></li>
                    <li className="w-full"><Link href="/blog" className="font-serif text-ow block sm:text-right text-left hover:text-ow2">Blog</Link></li>
                </ul>
                <div className="inline-grid grid-cols-6 mx-0 gap-5 sm:order-1 mt-0 sm:mt-0">
                    <Link href="https://www.instagram.com/aramoniah/"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link>
                    <Link href="https://twitter.com/CarmenAramonib"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></Link>
                    <Link href="https://www.youtube.com/channel/UCKElM9XAMwiS_dly1L3_t_g"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg></Link>
                    <Link href="https://www.facebook.com/search/top?q=aramoniah"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></Link>
                    <Link href="https://www.linkedin.com/company/aramoniah/"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>
                    <Link href="https://www.tiktok.com/@carmenaramoni"><svg className="w-6 h-6 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg></Link>
                </div>
            </div>
        </footer>
        </>
    )
}