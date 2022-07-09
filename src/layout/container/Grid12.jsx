import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid12 = ({children, className}) => {
    const {grid12} = styles
    const componentStyles = [grid12, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid12