import {useState,useEffect} from 'react'
import styles from "./circleProgres.module.css"

export interface IProps {
  classNames: string;
  count: number;
  color:string
}


const CircleProgress = ({count,color,classNames}:IProps) => {
  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setNumber(prev => prev + 1)
    },10)

    if(number === count) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [number,count])

  return (
    <div 
    className={`${styles.progress} ${styles[classNames]}`} 
    style={{"backgroundImage": `conic-gradient(${color} ${number * 3.6}deg, #dadada1a ${number * 3.6}deg )`}}
    >   
    </div>
  )
}

export default CircleProgress