import Image from 'next/image'
const Logo = ({className, imgsrc, alt, sizes}) => {
    
    return (
        <div className={className}>            
            <Image src={imgsrc}
                sizes={sizes}
                alt={alt}
                srcset
            />
        </div>
    )
}

export default Logo