"use client";
import { useScrollObserver } from '../hooks/useScrollObserver';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { setRef } = useScrollObserver();
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div ref={setRef(0)} className="container animate-on-scroll slide-up">
        <div className={styles.contactCard}>
          <div className={styles.glowBorder}></div>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
          <h3 className={styles.contactCta}>{t.contact.cta}</h3>
          
          <div className={styles.contactActions}>
            <a href="https://www.linkedin.com/in/tawan-alves/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              {t.contact.linkedin}
            </a>
            <a href="mailto:tas.tawan@gmail.com" className="btn btn-outline btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {t.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
