import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <div style={styles.container}>
        <h1 style={styles.title}>Cadastro Locadora</h1>

        {/* Texto rolando estilo marquee contínuo */}
        <div style={styles.marqueeContainer}>
          <div style={styles.marquee}>
            VENHA CONHECER NOSSOS FILMES, CLIENTES E LOCAÇÕES!
          </div>
        </div>

        <div style={styles.buttonContainer}>
          {/* Botões chamativos com ícone e efeitos coloridos */}
          <a href="/clientes" style={styles.button} className="animated-button">Clientes</a>
          <a href="/filmes" style={styles.button} className="animated-button">Filmes</a>
          <a href="/locacoes" style={styles.button} className="animated-button">Locações</a>
          <a href="/funcionarios" style={styles.button} className="animated-button">Funcionários</a>
          <a href="/fornecedores" style={styles.button} className="animated-button">Fornecedores</a>
        </div>

        {/* Seção de Filmes Clássicos */}
        <div style={styles.filmesClassicos}>
          <h2 style={styles.subTitle}>Filmes Clássicos</h2>
          <div style={styles.filmeContainer}>
            <div style={styles.filmeItem}>
              <img src="https://media2.giphy.com/media/QS0KOjNRG0tfG/giphy.gif" style={styles.filmeImage} alt="Matrix" />
              <p style={styles.filmeName}>Matrix</p>
            </div>
            <div style={styles.filmeItem}>
              <img src="https://miro.medium.com/v2/resize:fit:996/0*CTJNRzvl8UDyyJ9V" style={styles.filmeImage} alt="Titanic" />
              <p style={styles.filmeName}>Titanic</p>
            </div>
            <div style={styles.filmeItem}>
              <img src="https://pa1.aminoapps.com/6834/a55fe770891f080e7e5505072aa29ecb8934a163_hq.gif" style={styles.filmeImage} alt="Jurassic Park" />
              <p style={styles.filmeName}>Jurassic Park</p>
            </div>
          </div>
        </div>

        {/* Seção de GIFs */}
        <div style={styles.gifSection}>
          <img src="https://media.giphy.com/media/3ohzdQ1IynzclJldUQ/giphy.gif" style={styles.gif} alt="Gif retrô" />
          <img src="https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif" style={styles.gif} alt="Pipoca Gif" />
          <img src="https://media.giphy.com/media/l3vR7ShEYmGnK7c5u/giphy.gif" style={styles.gif} alt="Filme Gif" />
        </div>

        {/* Seção de Reviews */}
        <Container>
          <h2 style={styles.subTitle}>O que nossos clientes dizem</h2>
          <Row>
            <Col>
              <Card style={styles.reviewCard}>
                <Card.Body>
                  <Card.Title>João Silva</Card.Title>
                  <Card.Text>
                    "Excelente coleção de filmes, especialmente os clássicos. Recomendo a todos!"
                  </Card.Text>
                  <div>⭐⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.reviewCard}>
                <Card.Body>
                  <Card.Title>Maria Oliveira</Card.Title>
                  <Card.Text>
                    "Ótima experiência! A locadora sempre tem lançamentos e o atendimento é excelente."
                  </Card.Text>
                  <div>⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.reviewCard}>
                <Card.Body>
                  <Card.Title>Carlos Pereira</Card.Title>
                  <Card.Text>
                    "Recomendo para quem gosta de filmes antigos e quer relembrar os anos 90!"
                  </Card.Text>
                  <div>⭐⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .animated-button:hover {
          background-color: #ff69b4; /* Rosa neon ao passar o mouse */
          color: #fff; /* Texto branco ao passar o mouse */
          border: 3px solid #00FFFF; /* Borda neon azul */
          box-shadow: 0 0 15px #ff69b4, 0 0 30px #ff69b4, 0 0 45px #00FFFF; /* Brilho neon ao redor */
          text-shadow: 1px 1px 5px #FFD700; /* Sombra de texto dourada */
          transform: scale(1.2); /* Aumenta de tamanho */
        }

        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",  // Vibe anos 2000
    color: '#333',
  },
  title: {
    fontSize: '50px',
    marginBottom: '40px',
    color: '#FF00FF',
    textShadow: '3px 3px #FFD700',  // Sombra neon
  },
  marqueeContainer: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: '30px',
  },
  marquee: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#FF69B4',
    animation: 'scroll 12s linear infinite',  // Animação de scroll contínuo
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#00FFFF',  // Cor azul neon
    color: '#000',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '10px',
    textDecoration: 'none',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',  // Sombra normal para início
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  filmesClassicos: {
    marginTop: '50px',
    textAlign: 'center',
    color: '#FF00FF',
  },
  subTitle: {
    fontSize: '36px',
    textShadow: '2px 2px #FFD700',  // Sombra neon para os títulos
  },
  filmeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  filmeItem: {
    textAlign: 'center',
  },
  filmeImage: {
    width: '150px',
    height: '200px',
    border: '5px solid #FF69B4',  // Borda neon
    boxShadow: '0px 0px 20px #FF69B4',  // Sombra neon
    borderRadius: '10px',
  },
  filmeName: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  gifSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  gif: {
    width: '150px',
    height: '150px',  // Tamanho fixo para os GIFs, evitando esticamento
    objectFit: 'cover',  // Evita que os GIFs fiquem distorcidos
  },
  reviewCard: {
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: '#FFFAF0',
    borderColor: '#FF69B4',
    borderWidth: '2px',
  },
};
