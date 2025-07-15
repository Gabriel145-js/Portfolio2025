import React from 'react'
import styles from './Projetos.module.sass'
import { ReactComponent as IconGitHub } from '../../icons/githubIcon.svg'
import CardsProjetos from './CardsProjetos'

const Projetos = () => {
    return (
        <div className={styles.containerProjetos}>
            <div className={styles.tituloSubtitulo}>
                <h2>Meus <span>Projetos</span></h2>
                <p>Alguns dos projetos que desenvolvi, mostrando minha evolução e habilidades.</p>

            </div>

            <section className={styles.containerCardsProjetos}>
                <CardsProjetos
                    imgProjeto='img/imgsProjetos/ta.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Sass', cor: '#CD6799', color: '#fff' },
                        { nome: 'Firebase', cor: '#FFA611', color: '#fff' },

                    ]}
                    urlDetalhes='ola'
                    titProjeto='MussattoBarber Agendamentos'
                    descriProjeto='Descrição do projeto aqui...'
                    urlProjeto='https://mussattobarber-agendamentos.web.app/'
                    urlGitHub='https://github.com/Gabriel145-js/mussattoBarber-agendamentos'
                />

                <CardsProjetos
                    imgProjeto='img/imgsProjetos/ta.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Sass', cor: '#CD6799', color: '#fff' },
                        { nome: 'Firebase', cor: '#FFA611', color: '#fff' },

                    ]}
                    urlDetalhes='ola'
                    titProjeto='MussattoBarber Agendamentos'
                    descriProjeto='Descrição do projeto aqui...'
                    urlProjeto='https://mussattobarber-agendamentos.web.app/'
                    urlGitHub='https://github.com/Gabriel145-js/mussattoBarber-agendamentos'
                />

                <CardsProjetos
                    imgProjeto='img/imgsProjetos/ta.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Sass', cor: '#CD6799', color: '#fff' },
                        { nome: 'Firebase', cor: '#FFA611', color: '#fff' }, ,


                    ]}
                    urlDetalhes='ola'
                    titProjeto='MussattoBarber Agendamentos'
                    descriProjeto='Descrição do projeto aqui...'
                    urlProjeto='https://mussattobarber-agendamentos.web.app/'
                    urlGitHub='https://github.com/Gabriel145-js/mussattoBarber-agendamentos'
                />

            </section>
        </div>
    )
}

export default Projetos