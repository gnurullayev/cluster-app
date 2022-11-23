import {useEffect} from "react"
import styles from "./totalArea.module.css"
import line from "../../assets/line.svg"
import CircleProgress from '../circle-pogress/CircleProgress'
import { progresBarData } from '../../data/totalAreaProgresBarData'
import TotalAreaListItem from '../total-area-list-item/TotalAreaListItem'
import { totalAreaListData } from '../../data/totalAreaListData'
import AOS from "aos"

const TotalArea = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section 
    className={styles.total_aria}
    >
      <div className={styles.total_aria_inner}>
        <div className={styles.total_aria_header} data-aos="fade-up">
          <h3 className={styles.total_aria_title}>
            Общая площадь: 
            <strong className={styles.title_span}> 36 879,7</strong>
          </h3>

          <span className={styles.line}>
            <img className={styles.line_img} src={line} alt="" />
          </span>
        </div>

        <div className={styles.box} data-aos="fade-up">
          <div className={styles.box_circle}>
            {
              progresBarData.map(el => (
                <CircleProgress key = {el.classNames} classNames={el.classNames} color={el.color} count={el.count}/>
              ))
            }
          </div>

          <ul className={styles.list}>
            {
              totalAreaListData.map(el => (
                <TotalAreaListItem key = {el.id} text={el.text} counts={el.count}/>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TotalArea