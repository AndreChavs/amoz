import React from 'react'
import styles from '../../../styles/modules/MobileMenu.module.css'

const MobileMenu = ({className, mobile, setMobile}) => {
    const mobileStyles = [styles.mobileMenu, className]
    function handleClick() {
        setMobile(!mobile)
    }
    return <div className={mobileStyles.join(' ')} 
        onClick={handleClick}>
        {(mobile)? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
    </div>
}

export default MobileMenu