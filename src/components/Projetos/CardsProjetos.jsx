import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Projetos.module.sass'
import { ReactComponent as IconGitHub } from '../../icons/githubIcon.svg'
import { ModalDetalhes } from './modalProjetos/ModalDetalhes'

const CardsProjetos = ({
    imgProjeto,
    titProjeto,
    descriProjeto,
    tecnologias,
    urlDetalhes,
    urlProjeto,
    urlGitHub
}) => {

    const [isModal, setIsModal] = useState(false)

    const handleOpenModal = () => {
        setIsModal(true)
    }

    const handleCloseModal = () => {
        setIsModal(false)
    }

    return (
        <>
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
                    <a onClick={handleOpenModal} style={{ cursor: 'pointer' }}>Ver detalhes</a>
                    <a href={urlProjeto} target='_blank' rel="noopener noreferrer">Ir para o Projeto</a>
                    {urlGitHub && (
                        <a href={urlGitHub} className={styles.svgIcon} target='_blank' rel="noopener noreferrer">
                            <IconGitHub />
                        </a>
                    )}
                </div>
            </div>

            {/* Modal renderizado via portal no body */}
            {isModal && createPortal(
                <ModalDetalhes 
                    onClose={handleCloseModal}
                    videoProjeto= '/img/teste.mp4'
                    titProjeto={titProjeto}
                    descriProjeto={`Criei uma plataforma web moderna para facilitar o agendamento de horários em barbearias. Intuitiva, rápida e acessível, a aplicação permite que os clientes escolham serviços, visualizem horários disponíveis e recebam confirmações automáticas — tudo em poucos cliques.<br /><br />
                    ⚙️ Funcionalidades:<br />
                    • Login e cadastro de usuários<br />
                    • Agendamento com datas e horários em tempo real<br />
                    • Cadastro de serviços e profissionais<br />
                    • Histórico de agendamentos com status automático<br />
                    • Painel administrativo para controle de agenda<br /><br />
                    Com design responsivo e experiência fluida, o sistema oferece praticidade tanto para o cliente quanto para a barbearia, otimizando o dia a dia e elevando o nível do atendimento.`}

                    tecnologias={tecnologias}
                    urlDetalhes={urlDetalhes}
                    urlProjeto={urlProjeto}
                    urlGitHub={urlGitHub}
                />,
                document.body
            )}
        </>
    )
}

export default CardsProjetos