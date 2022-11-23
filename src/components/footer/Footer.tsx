import React from 'react'
import styles from "./footer.module.css"
import twitter from "../../assets/fa-twitter.svg"
import facebook from "../../assets/facebook.svg"
import telegram from "../../assets/telegram.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_inner}>
        <li className={styles.footer_item}>
          <p className={styles.company_desc}>{new Date().getFullYear()} © Все права защищены. Сделано в Everest.uz</p>
          <p className={styles.text}>Крупнейший межотраслевой комплекс.</p>
        </li>

        <li className={styles.social_networks}>
          <ul className={styles.networks_list}>
            <li className={styles.networks_item}>
              <a className={styles.networks_link} href="/" >
                <img src={twitter} alt="" />
              </a>
            </li>

            <li className={styles.networks_item}>
              <a className={styles.networks_link} href="/" >
                <img src={telegram} alt="" />
              </a>
            </li>

            <li className={styles.networks_item}>
              <a className={styles.networks_link} href="/" >
                <img src={facebook} alt="" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}

export default Footer