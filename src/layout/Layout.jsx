import React from "react"
import styles from '../../styles/modules/Layout.module.css'
const Layout = ({children, className, id, style}) => {
    const layoutStyles = [styles.main, className]    
    return <>       
        <main className={layoutStyles.join(' ')} id={id} style={style}>
            {children}
        </main>
    </>
}

export default Layout