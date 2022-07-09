import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid10 = ({children, className}) => {
    const {grid10} = styles
    const componentStyles = [grid10, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid10