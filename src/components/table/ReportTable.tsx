import { IDtata } from "../../data/reportData"
import styles from "./reportTable.module.css"

interface Iprops {
    data: IDtata[]
}

const ReportTable = ({data}:Iprops) => {
    
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.header}>
                    <th className={styles.col}>
                        No
                    </th>
                    <th className={styles.col}>
                    Показатели
                    </th>
                    <th className={styles.col}>
                    Ед.изм.
                    </th>
                    <th className={styles.col}>
                        2018
                    </th>
                    <th className={styles.col}>
                        2019
                    </th>
                    <th className={styles.col}>
                        2020
                    </th>
                    <th className={styles.col}>
                        2021
                    </th>
                    <th className={styles.col}>
                        2022
                    </th>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.map((el,i) => (
                        <tr key={el.id} className={`${styles.row} `} style={{"backgroundColor": (i + 1) % 2 === 0 ? "#F6F6F6" : "#fff"}}>
                            <td>{i + 1}</td>

                            <td>{el.name}</td>

                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.hectare}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.sent}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.tonna}</span> : ""} 
                            </td>
                            
                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.years[0].count1}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.years[0].count2}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.years[0].count3}</span> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.years[1].count1}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.years[1].count2}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.years[1].count3}</span> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.years[2].count1}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.years[2].count2}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.years[2].count3}</span> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.years[3].count1}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.years[3].count2}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.years[3].count3}</span> : ""} 
                            </td>
                            
                            <td>
                                {el.hectare ? <span className={styles.table_span}>{el.years[4].count1}</span> : ""} 
                                {el.sent ? <span className={styles.table_span}>{el.years[4].count2}</span> : ""} 
                                {el.tonna ? <span className={styles.table_span}>{el.years[4].count3}</span> : ""} 
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ReportTable