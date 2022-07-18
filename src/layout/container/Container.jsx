import styles from '../../../styles/modules/Container.module.css'
const Container = ({children, className, style}) => {
  const {container} = styles
  const componentStyles = [container, className]
  return <div className={componentStyles.join(' ')} style={style}>
    {children}
  </div>
}

export default Container