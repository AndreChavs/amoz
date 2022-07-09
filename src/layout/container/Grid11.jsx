import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid11 = ({children, className}) => {
    const {grid11} = styles
    const componentStyles = [grid11, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid11