"use client";
import { useLanguage } from "../context/LanguageContext";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-dark)",
        padding: "6rem 0 3rem",
      }}
    >
      <div className="container">
        <motion.div
          className="grid grid-2"
          style={{ gap: "4rem", marginBottom: "4rem" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
              }}
            >
              Tawan Alves
            </span>
            <p
              style={{
                marginTop: "1.5rem",
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: "1.6",
                maxWidth: "350px",
              }}
            >
              {t.footer.desc}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "3rem",
            }}
          >
            <div>
              <h4
                style={{
                  marginBottom: "1.5rem",
                  color: "var(--foreground)",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {t.footer.contact}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <a
                    href="mailto:tas.tawan@gmail.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--muted)",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--foreground)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    tas.tawan@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5573998037219"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--muted)",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--foreground)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +55 73 99803-7219
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  marginBottom: "1.5rem",
                  color: "var(--foreground)",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {t.footer.networks}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <a
                    href="https://www.linkedin.com/in/tawan-alves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--muted)",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--foreground)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.5 }}
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TawanAlves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--muted)",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--foreground)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.4a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.3-.4-4 1.5a13.8 13.8 0 0 0-7 0C4.3 1.6 3 2 3 2a4.3 4.3 0 0 0 0 3.8A5.2 5.2 0 0 0 1.5 9.6c0 3.4 3 5.4 6 5.4a4.8 4.8 0 0 0-1 3.2v4" />
                      <path d="M9 18c-4.5 1-5-2.5-7-3" />
                    </svg>
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.5 }}
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            color: "var(--muted)",
            fontSize: "0.9rem",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Tawan Alves. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
