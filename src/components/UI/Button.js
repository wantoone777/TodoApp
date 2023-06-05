import styles from './Button.module.css'

function Button(props) {
  const { children, title, onClick, className = '' } = props
  return (
    <button
      {...props}
      title={title}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
