import React from 'react';
import styles from './About.module.sass';
import { ReactComponent as IconCapelo } from '../../icons/capelo.svg';
import { ReactComponent as IconLocation } from '../../icons/location.svg';
import { ReactComponent as IconInteresse } from '../../icons/interesse.svg';
import { ReactComponent as IconGithub } from '../../icons/githubIcon.svg';
import { ReactComponent as IconLinkedin } from '../../icons/linkedinIcon.svg';
import { ReactComponent as IconCurriculo } from '../../icons/curriculoIcon.svg';

const About = () => {
    return (
        <section className={styles.containerAbout}>
            <div className={styles.tituloSubtitulo}>
                <h2>Sobre <span>Mim</span></h2>
                <p>Um apaixonado por tecnologia e desenvolvimento web, sempre buscando aprender e criar soluções inovadoras.</p>
            </div>

            <div className={styles.about}>
                <div className={styles.containerImg}>
                    <img src="/img/eu.png" alt="Foto de perfil" />
                </div>

                <div className={styles.infosAbout}>
                    <h2>Quem sou eu?</h2>
                    <p>
                        Sou um desenvolvedor web full-stack com mais de 5 anos de experiência criando aplicações web modernas e escaláveis.
                        Minha paixão é transformar ideias complexas em interfaces intuitivas e eficientes.
                    </p>

                    <div className={styles.iconesInfos}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoHeader}>
                                <IconCapelo />
                                <h3>Formação</h3>
                            </div>
                            <p>Análise e Desenvolvimento de Sistemas</p>
                            <p>Uniftec</p>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoHeader}>
                                <IconLocation />
                                <h3>Localização</h3>
                            </div>
                            <p>Caxias do Sul - RS</p>
                            <p>Remoto disponível</p>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoHeader}>
                                <IconInteresse />
                                <h3>Interesses</h3>
                            </div>
                            <p>Tecnologia, Música, Viagens</p>
                        </div>
                    </div>

                    
                    <div className={styles.buttons}>
                        <a href=""><IconGithub /> GitHub</a>
                        <a href=""><IconLinkedin /> Linkedin</a>
                        <a href=""><IconCurriculo /> Curriculo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;