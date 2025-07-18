import React from 'react'
import styles from './Hero.module.sass'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


const Hero = () => {

    return (
        <section className={styles.container_heroSection}>
            <div className={styles.hero}>
                <article className={styles.aboutHero}>
                    <h1>Olá, eu sou <br /><span className={styles.gradientNome}>Gabriel Zaparolli</span> <span className={styles.wave}>👋</span></h1>
                    <h2 className={styles.anima}>Desenvolvedor web</h2>

                    <p className={styles.descricaoHero}>Transformo ideias em realidade digital com código limpo e designs impactantes. Especializado em criar experiências web modernas e responsivas.</p>

                    <div className={styles.btnsHero}>

                        <button className={styles.btnProjetos}>Ver projetos</button>
                        <button className={styles.btnContact}>Contate-me</button>
                    </div>
                </article>

                <div className={styles.imgHero}>

                    
                    <DotLottieReact
                        src="https://lottie.host/382a8135-1713-41f7-ac4c-8826af206243/dK5geFtljW.lottie"
                        loop
                        autoplay
                        className={styles.svgHero}
                    />
                

                 

                </div>
            </div>
        </section>
    )
}

export default Hero