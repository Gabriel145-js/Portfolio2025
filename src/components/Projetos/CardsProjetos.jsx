import React from 'react'
import styles from './Projetos.module.sass'
import { ReactComponent as IconGitHub } from '../../icons/githubIcon.svg'


const CardsProjetos = ({
    imgProjeto,
    titProjeto,
    descriProjeto,
    tecnologias,
    urlDetalhes,
    urlProjeto,
    urlGitHub
}) => {

    return (
        <div className={styles.cardProjeto}>
            <div className={styles.imgCard}>
                <div className={styles.tecnologias}>
                    {tecnologias.map((tec, index) => (
                        <button
                            key={index}
                            style={{ backgroundColor: tec.cor, color: tec.color }}
                            className={styles.btnTecnologia}
                        >
                            {tec.nome}
                        </button>
                    ))}
                </div>
                <img src={imgProjeto} alt="Imagem do Projeto" />
            </div>

            <article className={styles.artigoProjetos}>
                <h3>{titProjeto}</h3>
                <p>{descriProjeto}</p>


            </article>



            <div className={styles.utilsBtns}>
                <a href={urlDetalhes} target='_blank'>Ver detalhes</a>
                <a href={urlProjeto} target='_blank'>Ir para o Projeto</a>
                {urlGitHub && <a href={urlGitHub} className={styles.svgIcon} target='_blank'><IconGitHub /></a>}
            </div>


        </div>
    )
}

export default CardsProjetos