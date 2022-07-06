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

  },[])

  return <nav className={navbarStyles.join(' ')} style={style}>    
    <Logo className='logo'/>
    <MobileMenu className='mobile-menu'
    mobile={mobile} setMobile={setMobile} />
    <Navlist mobile={mobile} className='navlist' refer={navlistRef}>
      {linksMenu.map( item => {
          return <li key={item.nome}>
            <Link href={item.href}><a>{item.nome}</a></Link>
          </li>
        })}
    </Navlist>    
  </nav>
}

export default Navbar