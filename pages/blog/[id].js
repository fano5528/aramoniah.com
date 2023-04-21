import Header from '../../components/Header.component'
import Footer from '../../components/Footer.component'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

export default function Post({ post }) {
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('es-MX', { month: 'long' });
      }

    return (
        <>
            <Head>
                <title>{post.data.attributes.Title}</title>
                <meta name="description" content={post.data.attributes.Content.slice(0, 100)+"..."} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.data.attributes.Content.slice(0, 100)+"..."} />
                <meta property="og:image" content={post.image_url} />
                <meta property="og:url" content={"https://aramoniah.com/blog/"+post._id} />
            </Head>
            <Header/>
            <div className="grid grid-cols-2 gap-12 h-[450px] w-complete sm:w-complete-sm mx-auto mt-20">
                <div className="bg-center bg-cover" style={{backgroundImage: "url('https://blog.aramoniah.com/"+post.data.attributes.Cover.data.attributes.url+"')"}}>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-x-2.5 flex items-center">
                        <img src="/carmen1.jpg" alt="" className="h-10 w-10 flex-none rounded-full bg-white/10" />
                        <h4 className="text-xs text-gris">{post.data.attributes.createdAt.slice(8,10)+" de "+getMonthName(post.data.attributes.createdAt.slice(5,7))+" del "+post.data.attributes.createdAt.slice(0,4)}<br/><strong className="font-serif text-base mt-2 text-[#404040]">Carmen Aramoni</strong></h4>
                    </div>
                    <h1 className="font-serif text-3xl text-[#404040] leading-normal mt-4">{post.data.attributes.Title}</h1>
                </div>
            </div>
            <div className="w-complete sm:w-complete-sm mx-auto mt-20">
                <ReactMarkdown className="markdown" children={post.data.attributes.Content} />
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://blog.aramoniah.com/api/blog-posts/${params.id}?populate=Cover`)
    const post = await res.json()

    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://blog.aramoniah.com/api/blog-posts/')
    const posts = await res.json()

    const paths = posts.data.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}