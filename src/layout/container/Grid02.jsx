import React from 'react'
import styles from '../../../styles/modules/Grid.module.css'
const Grid02 = ({children, className}) => {
    const {grid2} = styles
    const componentStyles = [grid2, className]
    return <div className={componentStyles.join(' ')}>
        {children}
    </div> 
}

export default Grid02