import React from 'react'
import styles from './Skills.module.sass'
import useInView from '../../hooks/useInView'

const CardSoftSkills = ({icon, titSkill, descriSKill}) => {
    const [ref, isInView] = useInView({ threshold: 0.3 })
    
    return (
        <div ref={ref} className={`${styles.cardSoftSkills} ${isInView ? styles.scaleTopSoft : ''}`}>
            <div className={styles.headerSoftSkill}>
                {icon}
                <h3>{titSkill}</h3>
            </div>
            <p>{descriSKill}</p>
        </div>
    )
}

export default CardSoftSkills