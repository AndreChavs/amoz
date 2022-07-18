import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Container from '../../src/layout/container/Container'
import Grid06 from '../../src/layout/container/Grid06'
import Grid08 from '../../src/layout/container/Grid08'
import Grid04 from '../../src/layout/container/Grid04'

import img1 from '../../public/projetos/projeto1.jpg'
import img2 from '../../public/projetos/projeto2.jpg'
import img3 from '../../public/projetos/projeto3.jpg'
import img4 from '../../public/projetos/projeto4.jpg'


export default function Projetos() {

    const projetosApi = [
        {src:img1, alt:'descrição da imagem'}, {src:img2, alt:'descrição da imagem'},
        {src:img3, alt:'descrição da imagem'}, {src:img4, alt:'descrição da imagem'}
    ]

    return <>
        <Head>      
            <title>Amoz - Projetos arquitetônicos e Interiores</title>
        </Head>

        <section className='projetos-hero'>
            <Container className='projetos-header wrap'>
                <Grid06 style={{marginTop:'0px'}}>
                    <h1>projetos</h1>
                </Grid06>
                <Grid06>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Quis ipsum suspendisse 
                        ultrices gravida.
                    </p>
                </Grid06>
            </Container>            
        </section>
        {/*  */}
        <section className='projetos-grid'>
            <Container className='wrap' >        
                {projetosApi.map( (projeto, index) => {
                    if(index % 2 == 0){                                       
                        return <Grid08 key={index}>
                            <Link href="/">
                                <picture>
                                    <source media="(max-width: 999px)" srcSet={projeto.src.src}/>
                                    <Image src={projeto.src} 
                                        width={projeto.src.widht} height={projeto.src.height}                           
                                        alt={projeto.alt}
                                    />
                                </picture>
                            </Link>                     
                        </Grid08>                               
                    }else {                    
                        return <Grid04 key={index}>                                
                            <picture>
                                <source media="(max-width: 999px)" srcSet={projeto.src.src}/>
                                <Image src={projeto.src} 
                                    width={projeto.src.widht} height={projeto.src.height}                           
                                    alt={projeto.alt}
                                />
                            </picture>                                
                        </Grid04>      
                    }                
                })}   
            </Container>            
        </section>
    </>
}