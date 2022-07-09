import React from 'react'
import styles from '../../../styles/modules/ContainerFlex.module.css'
const ContainerFlex = ({children, className, style}) => {
  const {container} = styles
  const componentStyles = [container,className]
  return <div className={componentStyles.join(' ')} style={style}>
    {children}
  </div>
}

export default ContainerFlex