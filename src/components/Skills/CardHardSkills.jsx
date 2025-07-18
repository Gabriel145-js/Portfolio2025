import React from 'react'
import styles from './Skills.module.sass'
import useInView from '../../hooks/useInView'


const CardHardSkills = ({icon, nomeTec}) => {
    const [ref, isInView] = useInView({ threshold: 0.3 })

    return (
        <div ref={ref} className={`${styles.cardIcon} ${isInView ? styles.scaleTop : ''}`}>
            {icon}
            <p>{nomeTec}</p>

        </div>
    )
}

export default CardHardSkills