import React from 'react';
import styles from './Contatos.module.sass';
import ContactForm from './ContactForm';
import { ReactComponent as IconLocation } from '../../icons/location.svg';
import { ReactComponent as IconEmail } from '../../icons/email.svg';
import { ReactComponent as IconFone } from '../../icons/fone.svg';
import { ReactComponent as IconWpp } from '../../icons/redesSociais/redesWppIcon.svg'
import { ReactComponent as IconLinkedin } from '../../icons/redesSociais/redesLinkeIcon.svg'
import { ReactComponent as IconGitHub } from '../../icons/redesSociais/redesGitHub.svg'
import useInView from '../../hooks/useInView';


const Contatos = () => {
     const [ref, isInView] = useInView({ threshold: 0.3 })

    return (
        <div ref={ref} className={styles.containerContatos}>
            <div className={`${styles.tituloSubtitulo} ${isInView ? styles.tracking : ''}`}>
                <h2>Entre em <span>Contato</span></h2>
                <p>Entre em contato comigo utilizando o formulário ou pelas informações ao lado.</p>
            </div>

            <section className={styles.sectionCtts}>
                <div className={styles.containerForm}>
                    <ContactForm />
                </div>

                <div className={`${styles.cardCtts} ${isInView ? styles.slideRight : ''}`}>
                    <h3>Informações de Contato</h3>

                    <div className={styles.itemInfo}>
                        <IconLocation />
                        <div>
                            <p>Localização</p>
                            <span>Caxias do Sul - RS, Brasil</span>
                        </div>
                    </div>

                    <div className={styles.itemInfo}>
                        <IconEmail />
                        <div>
                            <p>Email</p>
                            <a href="mailto:gabriel.m.zaparolli@gmail.com">gabriel.m.zaparolli@gmail.com</a>
                        </div>
                    </div>

                    <div className={styles.itemInfo}>
                        <IconFone />
                        <div>
                            <p>Telefone</p>
                            <a href="tel:+54991529657">(54) 99152-9657</a>
                        </div>
                    </div>

                    <div className={styles.redesSociais}>
                        <h3>Redes Sociais</h3>
                        <div className={styles.iconesRedes}>
                           <a href="https://wa.me/54991529657" target='_blank' className={styles.wppLink}><IconWpp/></a>
                           <a href="https://www.linkedin.com/in/gabriel-zaparolli/" target='_blank' className={styles.linkedinLink}><IconLinkedin/></a>
                           <a href="https://github.com/Gabriel145-js" target='_blank' className={styles.githubLink}><IconGitHub/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contatos;