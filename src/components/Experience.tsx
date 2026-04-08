"use client";
import { useScrollObserver } from "../hooks/useScrollObserver";
import { useLanguage } from '../context/LanguageContext';
import styles from "./Experience.module.css";

export default function Experience() {
  const { setRef } = useScrollObserver();
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div ref={setRef(0)} className="container animate-on-scroll fade-in">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.experience.title}</h2>
          <p className={styles.sectionSubtitle}>
            {t.experience.subtitle}
          </p>
        </div>

        <div className={styles.experienceTimeline}>
          {/* Exp 1 */}
          <div
            ref={setRef(1)}
            className={`${styles.experienceCard} animate-on-scroll slide-up`}
          >
            <div className={styles.expHeader}>
              <div className={styles.expTitle}>
                <h3>{t.experience.exp1.title}</h3>
                <span>{t.experience.exp1.role}</span>
              </div>
            </div>
            <div className={styles.expContent}>
              <div className={styles.expBlock}>
                <strong>{t.experience.problemCol}</strong>
                <p>{t.experience.exp1.problem}</p>
              </div>
              <div className={styles.expBlock}>
                <strong>{t.experience.devCol}</strong>
                <p>{t.experience.exp1.dev}</p>
              </div>
              <div className={`${styles.expBlock} ${styles.textHighlight}`}>
                <strong>{t.experience.resCol}</strong>
                <ul>
                  <li>{t.experience.exp1.res1}</li>
                  <li>{t.experience.exp1.res2}</li>
                  <li>{t.experience.exp1.res3}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exp 2 */}
          <div
            ref={setRef(2)}
            className={`${styles.experienceCard} animate-on-scroll slide-up delay-100`}
          >
            <div className={styles.expHeader}>
              <div className={styles.expTitle}>
                <h3>{t.experience.exp2.title}</h3>
                <span>{t.experience.exp2.role}</span>
              </div>
            </div>
            <div className={styles.expContent}>
              <div className={styles.expBlock}>
                <strong>{t.experience.problemCol}</strong>
                <p>{t.experience.exp2.problem}</p>
              </div>
              <div className={styles.expBlock}>
                <strong>{t.experience.devCol}</strong>
                <p>{t.experience.exp2.dev}</p>
              </div>
              <div className={`${styles.expBlock} ${styles.textHighlight}`}>
                <strong>{t.experience.resCol}</strong>
                <ul>
                  <li>{t.experience.exp2.res1}</li>
                  <li>{t.experience.exp2.res2}</li>
                  <li>{t.experience.exp2.res3}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exp 3 */}
          <div
            ref={setRef(3)}
            className={`${styles.experienceCard} animate-on-scroll slide-up delay-200`}
          >
            <div className={styles.expHeader}>
              <div className={styles.expTitle}>
                <h3>{t.experience.exp3.title}</h3>
                <span>{t.experience.exp3.role}</span>
              </div>
            </div>
            <div className={styles.expContent}>
              <div className={styles.expBlock}>
                <strong>{t.experience.problemCol}</strong>
                <p>{t.experience.exp3.problem}</p>
              </div>
              <div className={styles.expBlock}>
                <strong>{t.experience.devCol}</strong>
                <p>{t.experience.exp3.dev}</p>
              </div>
              <div className={`${styles.expBlock} ${styles.textHighlight}`}>
                <strong>{t.experience.resCol}</strong>
                <ul>
                  <li>{t.experience.exp3.res1}</li>
                  <li>{t.experience.exp3.res2}</li>
                  <li>{t.experience.exp3.res3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
