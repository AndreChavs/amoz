import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Navlist from './Navlist'
import styles from '../../../styles/modules/Navbar.module.css'

import logo_L from '../../../public/logo.png'
import logo_M from '../../../public/logo-menu.png'

const linksMenu = [
  {nome:'home', href:'/'},
  {nome:'projetos', href:'/projetos'},
  {nome:'sobre', href:'/sobre'},
  {nome:'mídia', href:'/midia'},
  {nome:'contato', href:'/contato'},
]



const Navbar = ({className, style}) => {
  const [mobile, setMobile] = React.useState(false) 
  const navlistRef = React.useRef(null)
  const navbarStyles = [styles.navbar, className]

  


  React.useEffect( () => {
    //Remove o menu mobile quando o 
    //evento scroll for acionado
    function handleScroll() {
      setMobile(false)
    }
    window.addEventListener('scroll', handleScroll)
  },[])

  function handleClick() {
    //Sempre que o link do menu for clicado, 
    //a janela mobile ficará escondida
    setMobile(!mobile)
  }

  return <nav className={navbarStyles.join(' ')} style={style}> 
    
      <div className='logo'>
        <picture>
          <source media="(max-width: 999px)" srcSet={logo_M.src} width='320' height='120'/>
          <source media="(min-width:1000px)" srcSet={logo_L.src} />
          <img src={logo_L} alt="Logo - amoz arquitetura e interiores" />
        </picture>
      </div>

      <MobileMenu className='mobile-menu'
      mobile={mobile} setMobile={setMobile} />
      
    <Navlist mobile={mobile} refer={navlistRef} >      
      {linksMenu.map( item => {
          return <>
            <li key={item.nome}>
              <Link href={item.href}>
                <a onClick={handleClick}>{item.nome}</a>
              </Link>
            </li>
          </>
        })}
    </Navlist>    
  </nav>
}

export default Navbar