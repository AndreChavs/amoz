import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid08 = ({children, className}) => {
    const {grid8} = styles
    const componentStyles = [grid8, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid08