import React from 'react'
import styles from "./totalArea.module.css"
import line from "../../assets/line.svg"
import CircleProgress from '../circle-pogress/CircleProgress'

const TotalArea = () => {
  return (
    <section className={styles.total_aria}>
      <div className={styles.total_aria_inner}>
        <div className={styles.total_aria_header}>
            <h3 className={styles.total_aria_title}>
              Общая площадь: 
              <strong className={styles.title_span}> 36 879,7</strong>
            </h3>

            <span className={styles.line}>
              <img className={styles.line_img} src={line} alt="" />
          </span>
        </div>

        <div className={styles.box}>
          <div className={styles.box_circle}>
            <CircleProgress classNames={"progress1"} color={"#6D96FF"} count={90}/>
            <CircleProgress classNames={"progress2"} color={"#4295F7"} count={60}/>
            <CircleProgress classNames={"progress3"} color={"#42CCF7"} count={50}/>
            <CircleProgress classNames={"progress4"} color={"#42F7A0"} count={30}/>
            <CircleProgress classNames={"progress5"} color={"#FFC701"} count={35}/>
            <CircleProgress classNames={"progress6"} color={"#F77842"} count={40}/>
            <CircleProgress classNames={"progress7"} color={"#F74242"} count={30}/>
            <CircleProgress classNames={"progress8"} color={"#F74299"} count={50}/>
            <CircleProgress classNames={"progress9"} color={"#DE42F7"} count={80}/>
            <CircleProgress classNames={"progress10"} color={"#8742F7"} count={70}/>
          </div>

          <ul className={styles.list}>
            <li className={styles.list_item}>
              Площадь орошаемых земель
              <strong className={styles.list_item_strong}>30 205,4</strong>
            </li>

            <li className={styles.list_item}>
              Площадь орошаемых земель
              <strong className={styles.list_item_strong}>30 205,4</strong>
            </li>

            <li className={styles.list_item}>
              Площадь орошаемых земель
              <strong className={styles.list_item_strong}>30 205,4</strong>
            </li>

            <li className={styles.list_item}>
              Площадь орошаемых земель
              <strong className={styles.list_item_strong}>30 205,4</strong>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TotalArea