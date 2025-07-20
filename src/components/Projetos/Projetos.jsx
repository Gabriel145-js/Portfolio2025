import React from 'react'
import styles from './Projetos.module.sass'
import { ReactComponent as IconGitHub } from '../../icons/githubIcon.svg'
import CardsProjetos from './CardsProjetos'
import useInView from '../../hooks/useInView'


const Projetos = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 })

    return (
        <div ref={ref} className={styles.containerProjetos}>
            <div className={`${styles.tituloSubtitulo} ${isInView ? styles.fadeIn : ''}`}>
                <h2>Meus <span>Projetos</span></h2>
                <p>Alguns dos projetos que desenvolvi, mostrando minha evolução e habilidades.</p>

            </div>

            <section ref={ref} className={`${styles.containerCardsProjetos} ${isInView ? styles.scaleTop : ''}`}>
                <CardsProjetos
                    imgProjeto='img/imgsProjetos/mussattoProject.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Sass', cor: '#CD6799', color: '#fff' },
                        { nome: 'Firebase', cor: '#FFA611', color: '#fff' },

                    ]}
                    urlDetalhes='ola'
                    titProjeto='MussattoBarber Agendamentos'
                    descriProjeto='Sistema de agendamento online para barbearia. Permite visualizar horários disponíveis, agendar, acompanhar o status e contao com área de Admin. Interface responsiva e fácil de usar, ideal para clientes e barbeiros.'
                    urlProjeto='https://mussattobarber-agendamentos.web.app/'
                    urlGitHub='https://github.com/Gabriel145-js/mussattoBarber-agendamentos'
                />


            </section>
        </div>
    )
}

export default Projetos