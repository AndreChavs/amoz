import Head from "next/head"
import Link from "next/link"
import Container from '../../src/layout/container/Container'
import Grid06 from '../../src/layout/container/Grid06'
import Grid08 from '../../src/layout/container/Grid08'
import Grid04 from '../../src/layout/container/Grid04'


export default function Projetos() {  
    const projetosApi = [
        {src:'/projetos/projeto1.jpg', alt:'descrição da imagem', href:'/projetos/ana'}, 
        {src:'/projetos/projeto2.jpg', alt:'descrição da imagem', href:'/projetos/cecilia'},
        {src:'/projetos/projeto4.jpg', alt:'descrição da imagem', href:'/projetos/veronica'},
        {src:'/projetos/projeto3.jpg', alt:'descrição da imagem', href:'/projetos/sandy'}, 
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
            <Container className='wrap'>        
                {projetosApi.map( (projeto, index) => {
                    if((index == 0) || (index == 3)){                                       
                        return <Grid08 key={index}>
                            <Link href={projeto.href}>
                            <picture className="pic-projects">
                                <source media="(max-width: 999px)" srcSet={projeto.src}/>
                                <img src={projeto.src}         
                                    alt={projeto.alt}
                                />
                            </picture>                                                
                            </Link>                            
                        </Grid08>                               
                    }else{                    
                        return <Grid04 key={index}>
                            <Link href={projeto.href}>
                            <picture className="pic-projects">
                                <source media="(max-width: 999px)" srcSet={projeto.src}/>
                                <img src={projeto.src}         
                                    alt={projeto.alt}
                                />
                            </picture>                                
                            </Link>                                
                        </Grid04>      
                    }
                })}   
            </Container>            
        </section>
    </>
}
