import React from 'react'
import styles from './Skills.module.sass'



const CardHardSkills = ({icon, nomeTec}) => {

    return (
        <div  className={styles.cardIcon }>
            {icon}
            <p>{nomeTec}</p>

        </div>
    )
}

export default CardHardSkills