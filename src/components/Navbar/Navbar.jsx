import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.sass'

const Navbar = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setShowOverlay(scrollTop > 50)

            // Detecta qual seção está mais visível
            const sections = ['inicio', 'about', 'skills', 'projetos', 'contatos']
            const windowHeight = window.innerHeight
            const scrollPosition = window.scrollY + (windowHeight / 2) // Meio da tela

            let currentSection = 'inicio'
            let minDistance = Infinity

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const elementTop = rect.top + window.scrollY
                    const elementCenter = elementTop + (rect.height / 2)
                    
                    // Calcula a distância entre o centro da tela e o centro da seção
                    const distance = Math.abs(scrollPosition - elementCenter)
                    
                    // A seção mais próxima do centro da tela é a ativa
                    if (distance < minDistance) {
                        minDistance = distance
                        currentSection = sectionId
                    }
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Chama uma vez para definir o estado inicial
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={styles.container}>
            {showOverlay && <div className={styles.overlay}></div>}

            <nav className={styles.navbar}>
                <div className={styles.logoNavbar}>
                    <h3>DEV<span>GABRIEL</span></h3>
                </div>
                <div className={styles.navLinks}>
                    <Link 
                        to="inicio" 
                        smooth={true} 
                        duration={150} 
                        offset={-80}
                        className={activeSection === 'inicio' ? styles.active : ''}
                    >
                        Inicio
                    </Link>
                    <Link 
                        to="about" 
                        smooth={true} 
                        duration={150} 
                        offset={-80}
                        className={activeSection === 'about' ? styles.active : ''}
                    >
                        Sobre
                    </Link>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={150} 
                        offset={-120}
                        className={activeSection === 'skills' ? styles.active : ''}
                    >
                        Habilidades
                    </Link>
                    <Link 
                        to="projetos" 
                        smooth={true} 
                        duration={150} 
                        offset={-120}
                        className={activeSection === 'projetos' ? styles.active : ''}
                    >
                        Projetos
                    </Link>
                    <Link 
                        to="contatos" 
                        smooth={true} 
                        duration={150} 
                        offset={-80}
                        className={activeSection === 'contatos' ? styles.active : ''}
                    >
                        Contatos
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar