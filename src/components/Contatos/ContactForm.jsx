import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contatos.module.sass';
import useInView from '../../hooks/useInView';

function ContactForm() {
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const [state, handleSubmit] = useForm("xyzpybga")
  const [showForm, setShowForm] = useState(true)
  const [showThanks, setShowThanks] = useState(false)

  //retorna o formulario apos 5s apos a mensagem de agradecimento
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false) 
      setShowThanks(true)
    
      const timer = setTimeout(() => {
        setShowThanks(false)
        setShowForm(true)
      }, 5000);

      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  if (showThanks) {
    return <p className={styles.agradecimentoMsg}>Obrigado pela mensagem! ✅</p>
  }

  if (!showForm) {
    return null 
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={`${styles.formContact} ${isInView ? styles.slideLeft : ''}`}
    >
      {/* Linha com Nome e Email */}
      <div className={styles.rowInputs}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Seu nome"
          />
          <ValidationError
            prefix="Nome"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="seu@email.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      {/* Assunto */}
      <label htmlFor="subject">Assunto</label>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Qual o seu assunto?"
        required
      />
      <ValidationError
        prefix="Assunto"
        field="subject"
        errors={state.errors}
      />

      {/* Mensagem */}
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        placeholder="Sua mensagem..."
        required
      />
      <ValidationError
        prefix="Mensagem"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
