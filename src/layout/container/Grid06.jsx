import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid06 = ({children, className, style}) => {
    const {grid6} = styles
    const componentStyles = [grid6, className]
    return <div className={componentStyles.join(' ')} style={style}>
        {children}
    </div> 
}

export default Grid06