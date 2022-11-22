import styles from "./totalAreaListItem.module.css"

interface IProps {
  text:string;
  counts:string;
}

const TotalAreaListItem = ({text,counts}:IProps) => {
  return (
    <li className={styles.list_item}>
    <span className={styles.list_item_span}>{text}</span>
    <strong className={styles.list_item_strong}>{counts}</strong>
  </li>
  )
}

export default TotalAreaListItem