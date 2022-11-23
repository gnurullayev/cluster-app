import React, { useEffect} from 'react'
import styles from "./companyDepartments.module.css"
import line from "../../assets/line.svg"

import item1img1 from "../../assets/item1-img1.png"
import item1img2 from "../../assets/item1-img2.png"
import item1img3 from "../../assets/item1-img3.png"

import item2img1 from "../../assets/item2-img1.png"
import item2img2 from "../../assets/item2-img2.png"

import item3img1 from "../../assets/item3-img1.png"
import item3img2 from "../../assets/item3-img2.png"
import item3img3 from "../../assets/item3-img3.png"

import item4img1 from "../../assets//item4-img1.png"
import item4img2 from "../../assets/item4-img2.png"
import item4img3 from "../../assets/item4-img3.png"
import AOS from 'aos'



const ComponyDepartments = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className={styles.departments}>
      <ul className={styles.departments_list}>
        <li className={styles.departments_item} data-aos="fade-up">
          <div className={styles.departments_item_start}>
            <div className={styles.total_aria_header} >
              <h3 className={styles.total_aria_title}>
                Сельское хозяйство
              </h3>

              <span className={styles.line}>
                <img className={styles.line_img} src={line} alt="line" />
              </span>
            </div>

            <p className={styles.item_desc}>
              Выращивание хлопка, зерновых культур (пшеница, рис), картофель, выращивание бобовых и масляных (маш, соя), кормовые культуры, выращивание прочих не многолетних культур, растение индигоферы, получение коконов, животноводство, рыбное хозяйство
            </p>
          </div>

          <ul className={styles.departments_item_end}>
              <li className={styles.item_img}>
                <img className={styles.img} src={ item1img1 } alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item1img2} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item1img3} alt="" />
              </li>
          </ul>
        </li>

        <li className={styles.departments_item} data-aos="fade-up">
          <div className={styles.departments_item_start}>
            <div className={styles.total_aria_header}>
              <h3 className={styles.total_aria_title}>
                Производство
              </h3>

              <span className={styles.line}>
                <img className={styles.line_img} src={line} alt="line" />
              </span>
            </div>

            <ul className={styles.item_start_list}>
              <li className={styles.item_start_item}>Переработка хлопка сырца</li>
              <li className={styles.item_start_item}>Переработка риса</li>
              <li className={styles.item_start_item}>Переработка рыбы</li>
              <li className={styles.item_start_item}>Переработка хлопка сырца</li>
            </ul>
          </div>

          <ul className={styles.departments_item_end}>
              <li className={styles.item_img}>
                <img className={styles.img} src={item2img1} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item2img2} alt="" />
              </li>
          </ul>
        </li>

        <li className={styles.departments_item} data-aos="fade-up">
          <div className={styles.departments_item_start}>
            <div className={styles.total_aria_header}>
              <h3 className={styles.total_aria_title}>
                Сельское хозяйство
              </h3>

              <span className={styles.line}>
                <img className={styles.line_img} src={line} alt="line" />
              </span>
            </div>

            <ul className={styles.item_start_list}>
              <li className={styles.item_start_item}>Услуги сельхозтехники</li>
              <li className={styles.item_start_item}>Услуги перевозки грузов</li>
              <li className={styles.item_start_item}>Услуги общественного питания</li>
              <li className={styles.item_start_item}>Услуги общественного питания</li>
            </ul>
          </div>

          <ul className={styles.departments_item_end}>
              <li className={styles.item_img}>
                <img className={styles.img} src={item3img1} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item3img2} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item3img3} alt="" />
              </li>
          </ul>
        </li>

        <li className={styles.departments_item} data-aos="fade-up">
          <div className={styles.departments_item_start}>
            <div className={styles.total_aria_header}>
              <h3 className={styles.total_aria_title}>
              Новые проекты
              </h3>

              <span className={styles.line}>
                <img className={styles.line_img} src={line} alt="line" />
              </span>
            </div>

            <ul className={styles.item_start_list}>
              <li className={styles.item_start_item}>Глубокая переработка хлопкового волокна</li>
              <li className={styles.item_start_item}>Производство растительных масел (хлопковое)</li>
              <li className={styles.item_start_item}>Производство готовой (рыбной) продукции</li>
              <li className={styles.item_start_item}>Производство молочных продукции</li>
              <li className={styles.item_start_item}>Расширение системы капельного орошения</li>
              <li className={styles.item_start_item}>Проекты по ирригации и мелиорации </li>
            </ul>
          </div>

          <ul className={styles.departments_item_end}>
              <li className={styles.item_img}>
                <img className={styles.img} src={item4img1} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item4img2} alt="" />
              </li>

              <li className={styles.item_img}>
                <img className={styles.img} src={item4img3} alt="" />
              </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default ComponyDepartments