import React from 'react';
import styles from './About.module.sass';
import { ReactComponent as IconCapelo } from '../../icons/capelo.svg';
import { ReactComponent as IconLocation } from '../../icons/location.svg';
import { ReactComponent as IconInteresse } from '../../icons/interesse.svg';
import { ReactComponent as IconGithub } from '../../icons/githubIcon.svg';
import { ReactComponent as IconLinkedin } from '../../icons/linkedinIcon.svg';
import { ReactComponent as IconCurriculo } from '../../icons/curriculoIcon.svg';
import useInView from '../../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className={styles.containerAbout}>
      <div className={`${styles.tituloSubtitulo} ${isInView ? styles.tracking : ''}`}>
        <h2>Sobre <span>Mim</span></h2>
        <p>Um apaixonado por tecnologia e desenvolvimento web, sempre buscando aprender e criar soluções inovadoras.</p>
      </div>

      <div className={styles.about}>
        <div className={`${styles.containerImg} ${isInView ? styles.scaleIn : ''}`}>
          <img src="/img/eu.jpg" alt="Foto de perfil" />
        </div>

        <div className={`${styles.infosAbout} ${isInView ? styles.slideIn : ''}`}>
          <h2>Quem sou eu?</h2>
          <p>
            Transformo ideias em soluções web funcionais, modernas e bem documentadas. Com 2 anos de experiência, desenvolvo interfaces responsivas integradas a serviços externos, com foco em usabilidade, performance e código limpo.
 <br/>
           <br/> 🧠 Integro APIs RESTful com eficiência, conectando front-end e back-end.
            <br/>🗃️ Conhecimento em bancos de dados, autenticação e dados em tempo real.
             <br/>📄 Documentação clara e organização fazem parte do meu processo.
             <br/>🤝 Trabalho bem em equipe, com comunicação direta e colaboração constante.
 <br/>
             <br/>Sempre evoluindo rumo ao full-stack, aplicando na prática as melhores soluções do desenvolvimento moderno.  </p>

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
                <h3>Meu Mundo Além do Código</h3>
              </div>
              <p>Tecnologia, Música, Viagens, Família </p>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="https://github.com/Gabriel145-js" target='_blank'><IconGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/gabriel-zaparolli/" target='_blank' ><IconLinkedin /> Linkedin</a>
            <a href="pdfs/cvMeu.pdf" download="cvMeu.pdf">
              Baixar Currículo
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
