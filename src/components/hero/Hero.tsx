import {useState} from 'react'
import styles from "./hero.module.css"
import player from "../../assets/player.svg"
import { imgData } from '../../data/heroDataImg'


const Hero = () => {
  const [active, setActive] = useState<boolean>(false)

  console.log(active);
  

  return (
    <div className={styles.hero}>
      <div className={styles.hero_inner}>
        <h1 className={styles.title}>TCT CLUSTER</h1>
        <div className={styles.hero_start}>
          <h2 className={styles.hero_title}>O Компании </h2>
          
          <p className={styles.hero_desc}>
            ТСТ Cluster – крупнейший межотраслевой комплекс, объединяющий несколько отраслей экономики, направленных на производство и переработку сельскохозяйственного сырья, животноводства и рыбоводства. Получение из данного сырья готовой продукции, доводимой до конечного потребителя.
          </p>

          <button 
          className={styles.hero_btn} 
          onClick={() => setActive(true)}
          >
            <span className={styles.hero_btn_span}>Смотреть видео</span>

            <img 
            className="hero_btn_img" 
            src={player} 
            alt="Player icon" 
            />
          </button>
        </div>

        <div className={styles.hero_end}>
            <ul className={styles.hero_list}>
              {
                imgData.map(el => (
                  <li className={styles.hero_item} key={el.id}>
                    <img className={styles.hero_item_img}  src={el.src} alt={el.alt} />
                  </li>
                ))
              }
            </ul>
        </div>
      </div>

      <div className={`${styles.hero_watch} ${active ? styles.watch_active : ""}`}>
        <iframe className={`${styles.watch_video} ${active ? styles.active : ""}`} src={`https://www.youtube.com/embed/I_40JFauCFk`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
    </div>
  )
}

export default Hero