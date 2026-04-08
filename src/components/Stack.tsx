"use client";
import { useScrollObserver } from '../hooks/useScrollObserver';
import { useLanguage } from '../context/LanguageContext';
import styles from './Stack.module.css';

export default function Stack() {
  const { setRef } = useScrollObserver();
  const { t } = useLanguage();

  return (
    <section id="stack" className="section">
      <div className="container">
        <div ref={setRef(0)} className={`${styles.sectionHeader} animate-on-scroll slide-up`}>
          <h2 className={styles.sectionTitle}>{t.stack.title}</h2>
          <p className={styles.sectionSubtitle}>{t.stack.subtitle}</p>
        </div>

        <div className="grid grid-2">
          
          <div ref={setRef(1)} className={`${styles.skillGroup} animate-on-scroll slide-up`}>
            <h3 className={styles.skillTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.textPurple}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              {t.stack.frontend}
            </h3>
            <ul className={styles.skillList}>
              <li>
                <strong>React / Vue</strong>
                <span>{t.stack.reactDesc}</span>
              </li>
              <li>
                <strong>TypeScript</strong>
                <span>{t.stack.tsDesc}</span>
              </li>
              <li>
                <strong>{t.stack.uiTitle}</strong>
                <span>{t.stack.uiDesc}</span>
              </li>
              <li>
                <strong>{t.stack.perfTitle}</strong>
                <span>{t.stack.perfDesc}</span>
              </li>
              <li>
                <strong>{t.stack.uxTitle}</strong>
                <span>{t.stack.uxDesc}</span>
              </li>
            </ul>
          </div>

          <div ref={setRef(2)} className={`${styles.skillGroup} animate-on-scroll slide-up delay-100`}>
            <h3 className={styles.skillTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.textPurple}><path d="M5 12h14"/><path d="M12 5v14"/><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/></svg>
              {t.stack.backend}
            </h3>
            <ul className={styles.skillList}>
              <li>
                <strong>{t.stack.djangoTitle}</strong>
                <span>{t.stack.djangoDesc}</span>
              </li>
              <li>
                <strong>{t.stack.authTitle}</strong>
                <span>{t.stack.authDesc}</span>
              </li>
              <li>
                <strong>{t.stack.integrationTitle}</strong>
                <span>{t.stack.integrationDesc}</span>
              </li>
            </ul>

            <h3 className={`${styles.skillTitle} ${styles.mtXl}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.textPurple}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              {t.stack.diff}
            </h3>
            <ul className={styles.skillList}>
              <li>
                <strong>{t.stack.prodThinkingTitle}</strong>
                <span>{t.stack.prodThinkingDesc}</span>
              </li>
              <li>
                <strong>{t.stack.cleanArchTitle}</strong>
                <span>{t.stack.cleanArchDesc}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
