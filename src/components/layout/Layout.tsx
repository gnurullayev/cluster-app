import {ReactNode} from 'react'
import styles from "./layout.module.css"

interface IContainer {
    children: ReactNode
}
const Layout = ({children}:IContainer) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Layout