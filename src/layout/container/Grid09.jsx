import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid09 = ({children, className}) => {
    const {grid9} = styles
    const componentStyles = [grid9, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid09