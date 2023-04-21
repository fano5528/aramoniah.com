import HeaderWhite from '../components/Headerwhite.component'
import Link from 'next/link'
import Footer from '../components/Footer2.component'

export default function Contacto() {
    return (
        <>
        <div className="w-full h-[100vh] bg-center bg-cover flex flex-col items-center justify-center sm:items-start" style={{backgroundImage: 'url("/contacto.jpg")'}}>
            <HeaderWhite/>
            <div className="bg-white w-[90vw] sm:w-[500px] mx-auto p-12 sm:p-16 shadow-fanoespecial mt-12 sm:mt-24">
                <h1 className="font-serif text-azul text-xl">Informes y contrataciones</h1>
                <p className="mt-8 text-gris">No dudes en contactarnos. Estamos a tu servicio para contestar cualquier duda.
                    <br/><br/>
                    Escríbenos por WhatsApp; o, si prefieres, también nos puedes llamar.
                </p>
                <Link href="tel:5525396330" className="hover:bg-azuloscuro bg-azul text-white px-12 py-4 mt-12 justify-between relative text-center flex items-center">
                    <h1 className="font-serif text-lg">(55) 2539 6330</h1>
                    <svg className="h-7 fill-white" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg>
                </Link>
            </div>
        </div>
        <Footer mt="none"/>
        </>
    )
}