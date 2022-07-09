import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid03 = ({children, className}) => {
    const {grid3} = styles
    const componentStyles = [grid3, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid03