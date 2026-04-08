"use client";
import { useScrollObserver } from "../hooks/useScrollObserver";
import { useLanguage } from '../context/LanguageContext';
import styles from "./About.module.css";

export default function About() {
  const { setRef } = useScrollObserver();
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={`grid grid-2 ${styles.aboutGrid}`}>
          <div
            ref={setRef(0)}
            className={`${styles.aboutContent} animate-on-scroll fade-in`}
          >
            <h2>{t.about.title}</h2>
            <h3 className={styles.roleTitle}>{t.about.role}</h3>
            <p>{t.about.p1}</p>
            <p>
              <strong>{t.about.howIWork}</strong> {t.about.p2}
            </p>
            <p>
              <strong>{t.about.theDifference}</strong> {t.about.p3}
            </p>
          </div>

          <div
            ref={setRef(1)}
            className={`${styles.aboutVisual} animate-on-scroll slide-up delay-100`}
          >
            <div className={styles.terminalMock}>
              <div className={styles.termHeader}>
                <span className={`${styles.dot} ${styles.red}`}></span>
                <span className={`${styles.dot} ${styles.yellow}`}></span>
                <span className={`${styles.dot} ${styles.green}`}></span>
              </div>
              <div className={styles.termBody}>
                <p>
                  <span className={styles.termPrompt}>tawan@portfolio:~$</span>{" "}
                  whoami
                </p>
                <p className={styles.termOutput}>
                  Tawan Alves - FullStack (Frontend Heavy)
                </p>

                <p>
                  <span className={styles.termPrompt}>tawan@portfolio:~$</span>{" "}
                  cat mindset.txt
                </p>
                <p className={styles.termOutput}>{t.about.mindset}</p>

                <p>
                  <span className={styles.termPrompt}>tawan@portfolio:~$</span>{" "}
                  <span className={styles.cursorBlink}>_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
