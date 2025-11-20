import Image from "next/image";
import "@/styles/home.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <section className="white-board">
          <h1>
            <span className="highlight">Melodia Educacional:</span>
            <br />A linguagem da música ao seu alcance
          </h1>
        </section>
        <p className="subtitle">
          Website com intuito de ensinar de teoria musical
          <br />
          <strong>com prática e acessibilidade.</strong>
        </p>
        <p className="note">
          Criado por estudantes do Instituto Federal Catarinense Campus Camboriú
          <br />
          <small>
            *O Melodia Educacional é um projeto independente, criado com o
            objetivo de incentivar o ensino de teoria musical. Não somos
            especialistas. Saiba mais.
          </small>
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn red">
            Iniciar
          </a>
          <a href="register" className="btn outline">
            Cadastrar-se
          </a>
        </div>
        <div className="hero-image-container">
          <Image
            src="/images/hero.png"
            alt="Ilustração músico"
            className="hero-image"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      <section className="features">
        <h2>Características do Melodia Musical</h2>
        <a href="/lesson" className="view-all">
          Ver Todas as Aulas
        </a>

        <div className="feature-box">
          <div className="number">01</div>
          <div className="content">
            <h3>Aulas de Música:</h3>
            <p>
              Clique aqui para acessar as aulas completas, onde você aprende
              teoria, leitura de notas e prática musical.
            </p>
          </div>
          <a href="/lessons">
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="feature-box">
          <div className="number">02</div>
          <div className="content">
            <h3>Exercícios Interativos:</h3>
            <p>Pratique com atividades interativas como quizzes.</p>
          </div>
          <a href="/exercises">
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="feature-box">
          <div className="number">03</div>
          <div className="content">
            <h3>Criação Musical:</h3>
            <p>
              Use nossas ferramentas para compor e criar suas próprias músicas
              de forma simples e intuitiva.
            </p>
          </div>
          <a href="/music-library">
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
