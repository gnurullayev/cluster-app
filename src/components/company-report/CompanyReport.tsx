import {useEffect} from 'react'
import styles from "./companyReport.module.css";
import line from "../../assets/line.svg"
import ReportTable from '../table/ReportTable';
import { IDtata } from '../../data/reportData';
import AOS from 'aos';

interface IProps {
  title: string;
  data: IDtata[]
}

const CompanyReport = ({title,data}:IProps) => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className={styles.report}>
      <div className={styles.report_header} data-aos="fade-up">
        <h3 className={styles.report_title}>{title}</h3>

        <span className={styles.line}>
          <img className={styles.line_img} src={line} alt="line" />
        </span>
      </div>

      <div className={styles.report_body} data-aos="fade-up">
        <ReportTable data={data}/>
      </div>
    </div>
  )
}

export default CompanyReport