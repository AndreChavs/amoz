import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid04 = ({children, className}) => {
    const {grid4} = styles
    const componentStyles = [grid4, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid04