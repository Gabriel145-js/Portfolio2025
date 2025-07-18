import React from 'react'
import styles from './Footer.module.sass'

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
        
        <div className={styles.logoFooter}>
            <h3>DEV<span>GABRIEL</span></h3>
        <p>Transformando ideias em realidade digital.</p>
        </div>

        <p className={styles.copyFooter}>© 2025 DevGabriel. Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer