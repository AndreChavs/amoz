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
      <Component {...pageProps} />
    </Layout>
  </> 
  
}

export default MyApp
