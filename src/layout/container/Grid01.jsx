import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid01 = ({children, className}) => {
    const {grid1} = styles
    const componentStyles = [grid1, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid01