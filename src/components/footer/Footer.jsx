import Link from "next/link";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mackleapsContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/projects" className={styles.link}>
            <img src="/logo-mackleaps.png" alt="logo-mackleaps" />
          </Link>
          <h2>MACKLEAPS</h2>
        </div>
      </div>

      <div className={styles.bread_crumbs}>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>PÁGINAS</h2>
          <Link href="/" className={styles.link}>
            HOME
          </Link>
          <Link href="/projects" className={styles.link}>
            PROJETOS
          </Link>
          <Link href="/research" className={styles.link}>
            PESQUISA
          </Link>
          <Link href="/team" className={styles.link}>
            EQUIPE
          </Link>
          <Link href="/news" className={styles.link}>
            NOTÍCIAS
          </Link>
          <Link href="/about" className={styles.link}>
            SOBRE
          </Link>
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>PARCERIAS</h2>
          <img src="/atech.png" alt="atech" />
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>CONTATOS</h2>
          <Link href="/" className={styles.social_midias}>
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/computa%C3%A7%C3%A3o-mackenzie-473540216/?originalSubdomain=br"
            target="
            _blank"
            className={styles.social_midias}
          >
            Linkedin
          </Link>
          <Link
            href="https://www.instagram.com/computacao_mackenzie/"
            target="
            _blank"
            className={styles.social_midias}
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className={styles.address_container}>
        <Link
          href="https://www.google.com/maps/place/R.+da+Consola%C3%A7%C3%A3o,+930+-+Higien%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+01302-000/data=!4m2!3m1!1s0x94ce5849eeb27779:0xe350caf4879b89a6?sa=X&ved=2ahUKEwiRz8mihseDAxV7r5UCHYVWBsEQ8gF6BAgLEAA&cshid=1704485327777783"
          target="
            _blank"
        >
          <img src="/map.png" alt="mapa" />
        </Link>
        <p className={styles.address}>
          Endereço R. da Consolação, 930 - Consolação, São Paulo - SP
        </p>
        <p className={styles.address}>Telefone (11)2114-8000</p>
      </div>
    </div>
  );
};
