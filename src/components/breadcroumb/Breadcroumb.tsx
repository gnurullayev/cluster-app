import React from 'react'
import styles from "./breadcroumb.module.css"
import arrow from "../../assets/duble-arrov.svg"
const Breadcroumb = () => {
  return (
    <nav aria-label={styles.breadcrumb}>
        <ul className={styles.breadcrumb_list}>
            <li className={styles.breadcrumb_item}>
                <a className={styles.breadcrumb_link} href="/">Главная страница</a>
            </li>
            <li className={styles.breadcrumb_item}>
                <img className={styles.breadcrumb_icon} src={arrow} alt="icon"/>
            </li>
            <li className={`${styles.breadcrumb_item} ${styles.active}`}>
                О Компании 
            </li>
        </ul>
    </nav>
  )
}

export default Breadcroumb