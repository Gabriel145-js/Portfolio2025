import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.sass'
import { ReactComponent as IconMenu } from '../../icons/menuHamburguer.svg'

const Navbar = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAnimatingClose, setIsAnimatingClose] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900)
            if (window.innerWidth > 900) {
                setIsMenuOpen(false)
                setIsAnimatingClose(false)
            }
        }

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
        window.addEventListener('resize', handleResize)

        handleScroll() // Chama uma vez para definir o estado inicial
        handleResize() // Chama uma vez para definir o estado inicial

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Inicia animação de fechamento
            setIsAnimatingClose(true)
            setTimeout(() => {
                setIsMenuOpen(false)
                setIsAnimatingClose(false)
            }, 300) // tempo da animação de fechamento
        } else {
            // Abre o menu
            setIsMenuOpen(true)
            setIsAnimatingClose(false)
        }
    }

    const handleLinkClick = () => {
        if (isMenuOpen && !isAnimatingClose) {
            toggleMenu()
        }
    }

    // Função para determinar as classes do menu mobile
    const getMobileMenuClasses = () => {
        let classes = styles.mobileMenu
        
        if (isAnimatingClose) {
            classes += ` ${styles.mobileMenuClosing}`
        } else if (isMenuOpen) {
            classes += ` ${styles.mobileMenuOpen}`
        }
        
        return classes
    }

    return (
        <div className={styles.container}>
            {showOverlay && <div className={styles.overlay}></div>}

            <nav className={styles.navbar}>
                <div className={styles.logoNavbar}>
                    <h3>DEV<span>GABRIEL</span></h3>
                </div>

                {isMobile ? (
                    <>
                        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                            <IconMenu />
                        </div>
                        <div className={getMobileMenuClasses()}>
                            <Link
                                to="inicio"
                                smooth={true}
                                duration={150}
                                offset={-80}
                                className={activeSection === 'inicio' ? styles.active : ''}
                                onClick={handleLinkClick}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={150}
                                offset={-80}
                                className={activeSection === 'about' ? styles.active : ''}
                                onClick={handleLinkClick}
                            >
                                Sobre
                            </Link>
                            <Link
                                to="skills"
                                smooth={true}
                                duration={150}
                                offset={-120}
                                className={activeSection === 'skills' ? styles.active : ''}
                                onClick={handleLinkClick}
                            >
                                Habilidades
                            </Link>
                            <Link
                                to="projetos"
                                smooth={true}
                                duration={150}
                                offset={-120}
                                className={activeSection === 'projetos' ? styles.active : ''}
                                onClick={handleLinkClick}
                            >
                                Projetos
                            </Link>
                            <Link
                                to="contatos"
                                smooth={true}
                                duration={150}
                                offset={-80}
                                className={activeSection === 'contatos' ? styles.active : ''}
                                onClick={handleLinkClick}
                            >
                                Contatos
                            </Link>
                        </div>
                    </>
                ) : (
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
                )}
            </nav>
        </div>
    )
}

export default Navbar