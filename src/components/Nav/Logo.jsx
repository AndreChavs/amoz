import Image from 'next/image'
import logo from '../../../public/logo.png'

const Logo = ({className}) => {
    
    return (
        <div className={className}>
            <Image src={logo.src} 
            width={logo.width} height={logo.height}
            alt='Amoz - arquitetura e interiores'
            />
        </div>
    )
}

export default Logo