import React from 'react'
import styles from './Skills.module.sass'

const CardSoftSkills = ({icon, titSkill, descriSKill}) => {
    return (
        <div className={styles.cardSoftSkills}>
            <div className={styles.headerSoftSkill}>
                {icon}
                <h3>{titSkill}</h3>
            </div>
            <p>{descriSKill}</p>
        </div>
    )
}

export default CardSoftSkills