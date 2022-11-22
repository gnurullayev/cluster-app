import { IDtata } from "../../data/reportData"
import styles from "./reportTable.module.css"

interface Iprops {
    data: IDtata[]
}

const ReportTable = ({data}:Iprops) => {
    console.log(data);
    
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
                        <tr className={`${styles.row} `} style={{"backgroundColor": (i + 1) % 2 === 0 ? "#F6F6F6" : "#fff"}}>
                            <td>{i + 1}</td>

                            <td>{el.name}</td>

                            <td>
                                {el.hectare ? <p>{el.hectare}</p> : ""} 
                                {el.sent ? <p>{el.sent}</p> : ""} 
                                {el.tonna ? <p>{el.tonna}</p> : ""} 
                            </td>
                            
                            <td>
                                {el.hectare ? <p>{el.years[0].count1}</p> : ""} 
                                {el.sent ? <p>{el.years[0].count2}</p> : ""} 
                                {el.tonna ? <p>{el.years[0].count3}</p> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <p>{el.years[1].count1}</p> : ""} 
                                {el.sent ? <p>{el.years[1].count2}</p> : ""} 
                                {el.tonna ? <p>{el.years[1].count3}</p> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <p>{el.years[2].count1}</p> : ""} 
                                {el.sent ? <p>{el.years[2].count2}</p> : ""} 
                                {el.tonna ? <p>{el.years[2].count3}</p> : ""} 
                            </td>

                            <td>
                                {el.hectare ? <p>{el.years[3].count1}</p> : ""} 
                                {el.sent ? <p>{el.years[3].count2}</p> : ""} 
                                {el.tonna ? <p>{el.years[3].count3}</p> : ""} 
                            </td>
                            
                            <td>
                                {el.hectare ? <p>{el.years[4].count1}</p> : ""} 
                                {el.sent ? <p>{el.years[4].count2}</p> : ""} 
                                {el.tonna ? <p>{el.years[4].count3}</p> : ""} 
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ReportTable