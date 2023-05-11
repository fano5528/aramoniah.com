import Header from '../../components/Header.component'
import Footer from '../../components/Footer.component'
import Head from 'next/head'

export default function Blog({posts}) {

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('es-MX', { month: 'long' });
  }

    return (
        <>
            <Head>
                <title>Blog | Aramoniah</title>
                <meta name="description" content="Blog de Aramoniah" />
                <meta property="og:title" content="Blog | Aramoniah" />
                <meta property="og:description" content="Blog de Aramoniah" />
            </Head>
            <Header />
            <div className="bg-verde px-6 py-20 sm:py-32 lg:px-8 w-complete sm:w-complete-sm mx-auto shadow-fanoespecial mt-12 sm:mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold font-serif tracking-tight text-white sm:text-6xl">Blog Aramoniah</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        Entre escritos encontramos lo que nos une. 
Herramientas, pensamientos y consejos. 

        </p>
      </div>
    </div>
    <div className="w-complete sm:w-complete-sm mx-auto">
      <div className="mx-auto">
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.data.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end shadow-fanoespecial overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-80 lg:pt-80"
            >
              <img src={"https://blog.aramoniah.com/"+post.attributes.Cover.data.attributes.url} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.date} className="mr-8">
                    {post.attributes.createdAt.slice(8,10)+" de "+getMonthName(post.attributes.createdAt.slice(5,7))+" del "+post.attributes.createdAt.slice(0,4)}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img src="/carmen1.jpg" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    Carmen Aramoni
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white font-serif">
                <a href={"/blog/"+post.id}>
                  <span className="absolute inset-0" />
                  {post.attributes.Title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
            <Footer />
        </>
    )
}

export async function getStaticProps({params}) {
  const res = await fetch('https://blog.aramoniah.com/api/blog-posts?populate=Cover&sort[0]=createdAt:desc');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}