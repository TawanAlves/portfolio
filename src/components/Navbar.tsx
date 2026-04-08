"use client";
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* <a href="#" className={styles.logo}>Tawan<span>Alves</span></a> */}
        <a href="#" ><img src="/assets/logo.png" alt="" className={styles.logoImage} /> </a>
        
        <button 
          onClick={toggleLanguage} 
          style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer', marginLeft: 'auto', marginRight: '1rem', fontSize: '0.8rem' }}>
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
        
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.navLink}>{t.navbar.about}</a></li>
          <li><a href="#stack" className={styles.navLink}>{t.navbar.skills}</a></li>
          <li><a href="#experience" className={styles.navLink}>{t.navbar.experience}</a></li>
          <li><a href="#contact" className={styles.navLink}>{t.navbar.contact}</a></li>
        </ul>
      </div>
    </nav>
  );
}
