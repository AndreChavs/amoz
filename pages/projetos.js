import Head from "next/head"
import ContainerFlex from '../src/layout/container/ContainerFlex'
import Grid06 from '../src/layout/container/Grid06'

export default function Projetos() {
    return <>
        <Head>      
            <title>Amoz - Projetos arquitetônicos e Interiores</title>
        </Head>
        <section className='projetos-hero'>
            <ContainerFlex className='projetos-header wrap'>
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
            </ContainerFlex>
        </section>
    </>
}