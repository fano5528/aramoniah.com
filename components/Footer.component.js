import Link from 'next/link'
import Head from 'next/head'

export default function Footer({props}) {
    return (
        <>
            <Head>
                <meta name="og:image" content="/icon.png"/>
            </Head>
        <footer className="w-full bg-azul text-white flex flex-col justify-center items-start mt-32 py-12 sm:py-20">
            <div className="sm:flex w-complete sm:w-complete-sm sm:justify-between mx-auto">
                <Link href="/"><img src="/icon.svg" className="h-12 w-12"/></Link>
                <div className="mt-8 sm:mt-0">
                    <h3 className="text-ow">Platiquemos...</h3>
                    <h1 className="text-ow text-lg sm:text-xl font-serif mt-3 hover:text-ow2"><Link href="tel:5644074830">(56) 4407 4830</Link></h1>
                </div>
            </div>
            <div className="mt-8 sm:mt-40 sm:flex sm:justify-between items-end w-complete sm:w-complete-sm mx-auto">
                <ul className="flex flex-col gap-3 mt-8 mt-0 sm:mt-0 sm:grid sm:grid-cols-2 gap-x-10 items-end sm:order-2">
                    <li className="w-full"><Link href="/ceremonias" className="font-serif text-ow block sm:text-right hover:text-ow2">Ceremonias</Link></li>
                    <li className="w-full"><Link href="/talleres" className="font-serif text-ow block sm:text-right hover:text-ow2">Talleres</Link></li>
                    <li className="w-full"><Link href="/acerca-de" className="font-serif text-ow block sm:text-right hover:text-ow2">Acerca de</Link></li>
                    <li className="w-full"><Link href="/blog" className="font-serif text-ow block sm:text-right text-left hover:text-ow2">Blog</Link></li>
                </ul>
                <div className="inline-grid grid-cols-2 mx-0 gap-5 sm:order-1 mt-8 sm:mt-0">
                    <Link href="https://instagram.com"><svg className="w-8 h-8 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link>
                    <Link href="https://twitter.com"><svg className="w-8 h-8 fill-ow hover:fill-ow2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></Link>
                </div>
            </div>
        </footer>
        </>
    )
}