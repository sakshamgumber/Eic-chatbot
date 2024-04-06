"use client"

import React ,{useState} from 'react'
import GeminiButton from './GeminiButton';
import {motion} from 'framer-motion'

import styles from './style.module.scss'
import Bot from '../botWorking/bot';

const GeminiChat = () => {
    const [isActive, setIsActive] = useState(false);
    const menu = {

        open: {
    
            width: "40vw",
    
            height: "30vw",
    
            bottom: "-20px",
    
            right: "-25px",
    
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    
        },
    
        closed: {
    
            width: "100px",
    
            height: "40px",
    
            bottom: "0px",
    
            right: "0px",
    
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    
        }
    
    }
  return (
    <div className={styles.header}>

             <motion.div 

                className={styles.menu}

                variants={menu}

                animate={isActive ? "open" : "closed"}

                initial="closed"

            >
              <Bot/>
            </motion.div>
            <GeminiButton isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>

        </div>
  )
}

export default GeminiChat