import React from 'react'
import styles from './Skills.module.sass'
import { ReactComponent as JsIcon } from '../../icons/jsIcon.svg'
import { ReactComponent as ReactIcon } from '../../icons/reactIcon.svg'
import { ReactComponent as HtmlIcon } from '../../icons/htmlIcon.svg'
import { ReactComponent as CssIcon } from '../../icons/cssIcon.svg'
import { ReactComponent as SassIcon } from '../../icons/sassIcon.svg'
import { ReactComponent as NodeIcon } from '../../icons/nodeIcon.svg'
import { ReactComponent as GitIcon } from '../../icons/gitIcon.svg'
import { ReactComponent as FirebaseIcon } from '../../icons/firebaseIcon.svg'
import { ReactComponent as EquipeIcon } from '../../icons/softIcons/equipeIcon.svg'
import { ReactComponent as ResolucaoIcon } from '../../icons/softIcons/resolucaoIcon.svg'
import { ReactComponent as BalaoIcon } from '../../icons/softIcons/balaoIcon.svg'
import { ReactComponent as ClockIcon } from '../../icons/softIcons/clockIcon.svg'
import { ReactComponent as MySqlIcon } from '../../icons/mysqlIcon.svg'
import CardHardSkills from './CardHardSkills'
import CardSoftSkills from './CardSoftSkills'
import useInView from '../../hooks/useInView'


const Skills = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 })

    return (
        <div ref={ref} className={styles.containerSkills} >
            <div className={`${styles.tituloSubtitulo} ${isInView ? styles.tracking : ''}`}>
                <h2>Minhas <span>Skills</span></h2>
                <p>Tecnologias e ferramentas que domino e utilizo no meu dia a dia como desenvolvedor.</p>
            </div>
            <span className={`${styles.titSkill} ${isInView ? styles.scaleTop : ''}`}><h3>Hard Skills</h3></span>
            <section ref={ref} className={`${styles.hardSkills} ${isInView ? styles.scaleTop : ''}`}>

                <CardHardSkills
                    icon=<JsIcon/>
                    nomeTec='JavaScript'
                />

                <CardHardSkills
                    icon=<ReactIcon/>
                    nomeTec='React'
                />

                <CardHardSkills
                    icon=<HtmlIcon/>
                    nomeTec='HTML5'
                />

                <CardHardSkills
                    icon=<CssIcon/>
                    nomeTec='CSS3'
                />

                <CardHardSkills
                    icon=<SassIcon/>
                    nomeTec='Sass'
                />

                <CardHardSkills
                    icon=<NodeIcon/>
                    nomeTec='Node-Js'
                />

                <CardHardSkills
                    icon=<GitIcon/>
                    nomeTec='Git'
                />

                <CardHardSkills
                    icon=<FirebaseIcon/>
                    nomeTec='Firebase'
                />

                <CardHardSkills
                    icon=<MySqlIcon/>
                    nomeTec='MySQL'
                />




            </section>

             <span className={`${styles.titSkill} ${isInView ? styles.scaleTop : ''}`}><h3>Soft Skills</h3></span>
            <section ref={ref} className={`${styles.softSkills} ${isInView ? styles.scaleTopSoft : ''}`}>

              <CardSoftSkills
              icon= <EquipeIcon/>
              titSkill = 'Trabalho em equipe'
              descriSKill= 'Colaboração eficaz com equipes multidisciplinares para alcançar objetivos comuns.'
              />

              <CardSoftSkills
              icon= <ResolucaoIcon/>
              titSkill = 'Resolução de problemas'
              descriSKill= 'Habilidade analítica para identificar e resolver desafios complexos de forma criativa.'
              />

              <CardSoftSkills
              icon= <BalaoIcon/>
              titSkill = 'Comunicação'
              descriSKill= 'Clareza na comunicação técnica e interpessoal com diferentes públicos..'
              />

              <CardSoftSkills
              icon= <ClockIcon/>
              titSkill = 'Gestão de tempo'
              descriSKill= 'Organização e priorização eficiente de tarefas para cumprir prazos com qualidade.'
              />

            </section>

        </div>
    )
}

export default Skills