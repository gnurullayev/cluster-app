import {useEffect} from 'react'
import styles from "./intro.module.css"
import line from "../../assets/line.svg"
import AOS from 'aos'

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className={styles.intro}>
      <div className={styles.intro_inner}>
        <div className={styles.intro_header} data-aos="fade-up">
          <h3 className={styles.intro_title}>Предприятия, работающие в ООО “TCT CLUSTER”</h3>

          <span className={styles.line}>
            <img className={styles.line_img} src={line} alt="" />
          </span>
        </div>

        <div className={styles.intro_box} data-aos="fade-up">
          <ul className={styles.intro_list}>
            <li className={styles.intro_item}>OOO “TCT AGRO CLUSTER”</li>
            <li className={styles.intro_item}>OOO “TCT FISH CLUSTER”</li>
            <li className={styles.intro_item}>OOO “TCT RICE”</li>
            <li className={styles.intro_item}>OOO “TASHKENT COTTON TEXTILE”</li>
            <li className={styles.intro_item}>OOO “TCT ESSEN”</li>

          </ul>

          <ul className={styles.intro_list}>
          <li className={styles.intro_item}>OOO “TCT CLUSTER MILK AND MEAT” </li>
            <li className={styles.intro_item}>OOO “TCT TOWER”</li>
            <li className={styles.intro_item}>OOO “TCT SEED AND GRAIN”</li>
            <li className={styles.intro_item}>OOO “TCT TRADE AND SUPPLY”</li>
            <li className={styles.intro_item}>OOO “TCT LOGISTIC”</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Intro