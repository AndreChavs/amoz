import Head from 'next/head'
import '../styles/global/globals.css'
import '../styles/global/Index.css'
import '../styles/global/Projetos.css'
import '../styles/global/Header.css'


import Layout from '../src/layout/Layout'
import Header from '../src/layout/Header/Header'

function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <Header className='header' id='header'/>      
      <Head>              
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />            
      </Head>
      <Component {...pageProps} />
    </Layout>
  </> 
  
}

export default MyApp
