"use client";
import Image from "next/image";
import { useLanguage } from '../context/LanguageContext';
import { motion, Variants } from 'framer-motion';
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            {t.hero.title1}<span>{t.hero.titleSpan}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="#experience" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {t.hero.viewProjects}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.contact}
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroVisual}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
          }}
        >
          <motion.div 
            className={styles.imageWrapper}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={styles.placeholderBg}></div>
            <motion.img
              variants={imageVariants}
              src="/assets/photo.png"
              alt="Tawan Alves"
              className={styles.profileImage}
              style={{ filter: "grayscale(20%) contrast(1.1)", objectPosition: "top center" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.visibility = "hidden";
              }}
            />
            <div className={styles.accentBorder} style={{ borderColor: 'var(--foreground)', opacity: 0.2 }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
