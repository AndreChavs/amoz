import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid05 = ({children, className}) => {
    const {grid5} = styles
    const componentStyles = [grid5, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid05