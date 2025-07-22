import React from 'react'
import styles from './ModalDetalhes.module.sass'
import { ReactComponent as IconGitHub } from '../../../icons/githubIcon.svg'

export const ModalDetalhes = ({
  onClose,
  videoProjeto,
  titProjeto,
  descriProjeto,
  tecnologias,
  urlProjeto,
  urlGitHub
}) => {

  // Fechar modal ao clicar no overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Fechar modal com ESC
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose()
    }
    document.addEventListener('keydown', handleEsc)

    // Prevenir scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.modalBody}>
          <div className={styles.modalVideo}>
            <video src={videoProjeto} autoPlay loop controls ></video>
          </div>

          <div className={styles.modalInfo}>
            <h2>{titProjeto}</h2>
            <div
              className={styles.descricao}
              dangerouslySetInnerHTML={{ __html: descriProjeto }}
            ></div>


            <div className={styles.tecnologias}>
              {tecnologias?.map((tec, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: tec.cor, color: tec.color }}
                  className={styles.tecnologia}
                >
                  {tec.nome}
                </span>
              ))}
            </div>

            <div className={styles.modalActions}>
              <a href={urlProjeto} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
              {urlGitHub && (
                <a href={urlGitHub} target="_blank" rel="noopener noreferrer">
                  <IconGitHub />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}