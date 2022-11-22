import { reportData } from '../../data/reportData'
import Breadcroumb from '../breadcroumb/Breadcroumb'
import CompanyReport from '../company-report/CompanyReport'
import ComponyDepartments from '../compony-departments/ComponyDepartments'
import Hero from '../hero/Hero'
import Intro from '../intro/Intro'
import TotalArea from '../total-area/TotalArea'

const Main = () => {
  return (
    <main>
       <Breadcroumb/>
       <Hero/>
       <Intro/>
       <TotalArea/>
       <ComponyDepartments/>
       {
        reportData.map(el => (
          <CompanyReport key = {el.title} {...el}/>
        ))
       }
    </main>
  )
}

export default Main