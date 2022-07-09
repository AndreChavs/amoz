import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid07 = ({children, className}) => {
    const {grid7} = styles
    const componentStyles = [grid7, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid07