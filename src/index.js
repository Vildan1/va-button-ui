import React from 'react'
import styles from './styles.module.css'

//button component
export const Button = ({type, onClick}) => {
    const upLetter = (str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
  return (  
    <div className={styles.main}>
    <button onClick={onClick} className={`${styles[type]} ${styles.button}`}>
      {upLetter(type)} Button
    </button>
    </div>
  )
}
