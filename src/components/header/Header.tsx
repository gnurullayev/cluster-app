import React from 'react'
import styles from "./header.module.css"
import logo from"../../assets/logo.svg"
import menu from"../../assets/menu.svg"


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <a href="/" className={styles.header_logo}>
          <img src={logo} alt="Logo" width={123} height={67}/>
        </a>
        <button className={styles.menu}>
          <img src={menu} alt="Menu" />
        </button>
      </div>
    </header>
  )
}

export default Header