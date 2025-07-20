import React, { useEffect, useState } from 'react'
import styles from './Hero.module.sass'
import { scroller } from 'react-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


const Hero = () => {
    const adjetivos = ['Web', 'Front-End', 'Back-End', 'Full-Stack']
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex(prev => (prev + 1) % adjetivos.length)
        }, 4000)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <section className={styles.container_heroSection}>
            <div className={styles.hero}>
                <article className={styles.aboutHero}>
                    <h1>Olá, eu sou <br /><span className={styles.gradientNome}>Gabriel Zaparolli</span> <span className={styles.wave}>👋</span></h1>
                    <h2 className={styles.anima}>
                        Desenvolvedor{' '}
                        <span key={index} className={styles.trocaAdjetivo}>
                            {adjetivos[index]}
                            
                        </span>
                    </h2>


                    <p className={styles.descricaoHero}>Transformo ideias em realidade digital com código limpo e designs impactantes. Especializado em criar experiências web modernas e responsivas.</p>

                    <div className={styles.btnsHero}>


                        <button
                            className={styles.btnProjetos}
                            onClick={() =>
                                scroller.scrollTo('projetos', {
                                    duration: 100,
                                    delay: 0,
                                    smooth: 'easeInOutQuart',
                                })
                            }
                        >
                            Ver projetos
                        </button>

                        <button className={styles.btnContact} onClick={() =>
                            scroller.scrollTo('contatos', {
                                duration: 100,
                                delay: 0,
                                smooth: 'easeInOutQuart',
                            })
                        }>Contate-me</button>
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