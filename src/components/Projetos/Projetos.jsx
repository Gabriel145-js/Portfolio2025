import React from 'react'
import styles from './Projetos.module.sass'
import { ReactComponent as IconGitHub } from '../../icons/githubIcon.svg'
import CardsProjetos from './CardsProjetos'
import useInView from '../../hooks/useInView'


const Projetos = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 })

    return (
        <div ref={ref} className={styles.containerProjetos}>
            <div className={`${styles.tituloSubtitulo} ${isInView ? styles.tracking : ''}`}>
                <h2>Meus <span>Projetos</span></h2>
                <p>Alguns dos projetos que desenvolvi, mostrando minha evolução e habilidades.</p>

            </div>

            <section ref={ref} className={`${styles.containerCardsProjetos} ${isInView ? styles.scaleTop : ''}`}>
                <CardsProjetos
                    imgProjeto='img/imgsProjetos/mussattoProject.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Sass', cor: '#CD6799', color: '#fff' },
                        { nome: 'Firebase', cor: '#FFA611', color: '#fff' },

                    ]}
                    urlDetalhes='ola'
                    titProjeto='MussattoBarber Agendamentos'
                    descriProjeto='Sistema de agendamento online para barbearia. Permite visualizar horários disponíveis, agendar, acompanhar o status e dashboard para área de Admin. Interface responsiva e fácil de usar, ideal para clientes e barbeiros.'
                    urlProjeto='https://mussattobarber-agendamentos.web.app/'
                    videoModal='/videos/Mussato video.mp4'
                    descricaoModal={`Criei uma plataforma web moderna para facilitar o agendamento de horários em barbearias. Intuitiva, rápida e acessível, a aplicação permite que os clientes escolham serviços, visualizem horários disponíveis e recebam confirmações automáticas — tudo em poucos cliques.<br /><br />
                    ⚙️ Funcionalidades:<br />
                    • Login e cadastro de usuários<br />
                    • Agendamento com datas e horários em tempo real<br />
                    • Cadastro de serviços e profissionais<br />
                    • Histórico de agendamentos com status automático<br />
                    • Painel administrativo para controle de agenda<br /><br />
                    Com design responsivo e experiência fluida, o sistema oferece praticidade tanto para o cliente quanto para a barbearia, otimizando o dia a dia e elevando o nível do atendimento.`}

                />

                <CardsProjetos
                    imgProjeto='img/imgsProjetos/ecommerceFullstack.png'
                    tecnologias={[
                        { nome: 'JavaScript', cor: '#F7DF1E', color: '#000' },
                        { nome: 'React', cor: '#3B82F6', color: '#fff' },
                        { nome: 'Scss', cor: '#CD6799', color: '#fff' },
                        { nome: 'PostgreSQL', cor: '#336791', color: '#fff' },
                        { nome: 'Cloudinary', cor: '#3448C5', color: '#fff' },
                        { nome: 'NodeJs', cor: '#3C873A', color: '#fff' },
                        { nome: 'ExpressJs', cor: '#333333', color: '#fff' },

                    ]}
                    urlDetalhes='ola'
                    titProjeto='Ecommerce Fullstack (Em desenvolvimento)'
                    descriProjeto='Aplicação web com catálogo dinâmico, carrinho de compras e dashboard administrativo para adicionar produtos, gerenciar categorias e editar conteúdos. Interface ira ser responsiva e voltada para uma experiência elegante e intuitiva.'
                    urlProjeto='https://ecommerce-fullstack-gz.netlify.app/'
                    urlGitHub='https://github.com/Gabriel145-js/ecommerce-fullstack'
                    videoModal='/videos/EcommerceFullstack video.mp4'
                    descricaoModal={`Projeto fictício desenvolvido para demonstrar habilidades em aplicações web completas. A plataforma simula uma loja virtual voltada para moda feminina, com foco em design elegante, navegação intuitiva e estrutura escalável. <br />
                        A aplicação permite que usuários explorem coleções, usem filtros, visualizem produtos de forma dinâmica e adicionem itens ao carrinho com fluidez. No ambiente administrativo, o sistema oferece controle total sobre o catálogo, com funcionalidades robustas para gerenciamento de produtos e categorias.<br /><br />
                        ⚙️ Funcionalidades principais:<br />
                        • Exibição dinâmica de produtos por categoria <br />
                        • Sistema de carrinho com atualização em tempo real <br />
                        • Dashboard administrativo completo com: 
                        <br />– Adição, edição e exclusão de produtos
                        <br />– Gerenciamento de categorias
                        <br />– Controle de estoque e informações comerciais <br />
                        • Layout ira ser responsivo adaptado para desktop e mobile <br />
                        • Interface moderna e intuitiva, focada na experiência do usuário<br /><br />
                        
                        🧰 Tecnologias utilizadas:<br /> 
                        • Frontend: React + Vite, hospedado na Netlify <br />
                        • Backend: Node.js + Express, hospedado na Render<br />
                        • Banco de dados: Neon Database -- PostgreSQL <br />
                        • Estilização: Scss Modules
                        
                        <br />`}
                />


            </section>
        </div>
    )
}

export default Projetos