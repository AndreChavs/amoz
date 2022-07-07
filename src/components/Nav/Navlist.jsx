import React from 'react'
import styles from '../../../styles/modules/Navlist.module.css'
const Navlist = ({children, className, mobile}) => { 
    const [classModule, setClassModule] = React.useState(styles.navList)
    
    React.useEffect( () => {
        if (mobile) {
            setClassModule(styles.navListActive)
        }else{
            setClassModule(styles.navList)
        }
    },[mobile])

    const navlistStyles = [classModule, className, 'navlist'] 
    
    return <ul className={navlistStyles.join(' ')} >
        {children}
    </ul>
}

export default Navlist