import React from 'react'
import Navbar from '../../components/Nav/Navbar'


const Header = ({className, id, style}) => {    
    
    return <header className={className} id={id} style={style}>
        <Navbar className='container flexalign-center flexspace-between navbar'/>
    </header>
}

export default Header