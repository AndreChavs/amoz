import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Navlist from './Navlist'
import styles from '../../../styles/modules/Navbar.module.css'

const linksMenu = [
  {nome:'home', href:'/'},
  {nome:'projetos', href:'/projetos'},
  {nome:'sobre', href:'/sobre'},
  {nome:'mídia', href:'/midia'},
  {nome:'contato', href:'/contato'},
]

const Navbar = ({className, style}) => {
  const [mobile, setMobile] = React.useState(false)
  const navlistRef = React.useRef()
  const navbarStyles = [styles.navbar, className]
  
  React.useEffect( () => {
    function handleScroll() {
      setMobile(false)
    }
    window.addEventListener('scroll', handleScroll)
  },[])

  function handleClick() {
    //Sempre que o link do menu for clicado, a janela mobile ficará escondida
    setMobile(!mobile)
  }

  return <nav className={navbarStyles.join(' ')} style={style}>    
    <Logo className='logo'/>
    <MobileMenu className='mobile-menu'
    mobile={mobile} setMobile={setMobile} />
    <Navlist mobile={mobile} refer={navlistRef}>
      <Logo className='navlist-logo'/>
      {linksMenu.map( item => {
          return <>
            <li key={item.nome}>
              <Link href={item.href}><a onClick={handleClick}>{item.nome}</a></Link>
            </li>
          </>
        })}
    </Navlist>    
  </nav>
}

export default Navbar