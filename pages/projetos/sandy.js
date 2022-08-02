import Container from "../../src/layout/container/Container"
import Grid03 from '../../src/layout/container/Grid03'
import Grid06 from '../../src/layout/container/Grid06'
import Grid08 from '../../src/layout/container/Grid08'
import Grid04 from '../../src/layout/container/Grid04'
import styles from '../../styles/modules/Ana.module.css'
import Image from 'next/image'
export default function Sandy() {
  return <>
  <section className={styles.hero}>
      <hr className="container-flex" style={{background:'#616161'}} />
  </section>
  <section style={{maxWidth:"1460px", margin:'0px auto'}}>      
    <Image src="/projetos/ana/principal-ana.jpg"
    width={1460} height={1080}
    alt=""/>
  </section>
  <Container className={`wrap ${styles.descricao}`}>
    <Grid03 className={styles.detalhes}>
      <h2>São Paulo  <span>2020</span></h2>
    </Grid03>
    <Grid03 className={styles.detalhes}>
      <h2>Área <span>120<sup>2</sup></span></h2>
    </Grid03>
    <Grid06 className={styles.text}>
      <p>
      Realizamos o primeiro projeto deste apartamento no ano de 2015. A cliente nos chamou novamente em 2020 com a ideia de repaginar alguns ambientes e adequa-los para a nova dinâmica da família.
      </p>      
    </Grid06>
  </Container>
  <Container className={`wrap ${styles.gridProduct}`}>
      <Grid04>
        <img src='/projetos/projeto2.jpg'           
          alt='descrição da imagem'
        />        
      </Grid04>
      <Grid08>
        <img src='/projetos/projeto1.jpg'          
        alt='projeto cecilia'
        />
      </Grid08>
      <Grid08>
        <img src='/projetos/projeto1.jpg'           
        alt='projeto cecilia'
        />
      </Grid08>
      <Grid04>
        <img src='/projetos/projeto2.jpg'          
          alt='descrição da imagem'
        />        
      </Grid04>
    </Container>    
</>
}