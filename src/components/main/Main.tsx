import Breadcroumb from '../breadcroumb/Breadcroumb'
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
    </main>
  )
}

export default Main