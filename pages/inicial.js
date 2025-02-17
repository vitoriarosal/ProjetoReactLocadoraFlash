import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const filmesData = [
  { nome: "Matrix", gif: "https://media2.giphy.com/media/QS0KOjNRG0tfG/giphy.gif" },
  { nome: "Titanic", gif: "https://miro.medium.com/v2/resize:fit:996/0*CTJNRzvl8UDyyJ9V" },
  { nome: "Jurassic Park", gif: "https://th.bing.com/th/id/R.778a45f57b2ba00454e87a2bc3728b55?rik=p6PiRcfYpE3Dzw&pid=ImgRaw&r=0" }
];

function FilmesClassicos({ filmes }) {
  return (
    <Container className="filmesClassicos">
      <h2 className="subTitle">Sugestão de Filmes Clássicos</h2>
      <Row className="justify-content-center">
        {filmes.map((filme, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="filmeCard shadow-sm">
              <Card.Img variant="top" src={filme.gif} alt={filme.nome} />
              <Card.Body>
                <Card.Title className="text-center">{filme.nome}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <div className="container">
        <h1 className="title">Locadora FlashBack</h1>

        <div className="marqueeContainer">
          <div className="marquee">
            VENHA CONHECER NOSSOS FILMES, CLIENTES E LOCAÇÕES!
          </div>
        </div>

        <div className="buttonContainer">
          <a href="/clientes" className="animated-button">Clientes</a>
          <a href="/filmes" className="animated-button">Filmes</a>
          <a href="/locacoes" className="animated-button">Locações</a>
        </div>

        <FilmesClassicos filmes={filmesData} />

        {/* Seção de Reviews */}
        <Container>
          <h2 className="subTitle">O que nossos clientes dizem</h2>
          <Row>
            <Col>
              <Card className="reviewCard">
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
              <Card className="reviewCard">
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
              <Card className="reviewCard">
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
        .container {
          text-align: center;
          margin-top: 50px;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          color: #333;
        }

        .title {
          font-size: 50px;
          margin-bottom: 40px;
          color: #FF00FF;
          text-shadow: 3px 3px #FFD700;
        }

        .marqueeContainer {
          width: 100%;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .marquee {
          display: inline-block;
          white-space: nowrap;
          font-size: 30px;
          font-weight: bold;
          color: #FF69B4;
          animation: scroll 12s linear infinite;
        }

        .buttonContainer {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .animated-button {
          display: inline-block;
          padding: 15px 30px;
          background-color: #00FFFF;
          color: #000;
          font-size: 24px;
          font-weight: bold;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .animated-button:hover {
          background-color: #ff69b4;
          color: #fff;
          border: 3px solid #00FFFF;
          box-shadow: 0 0 15px #ff69b4, 0 0 30px #ff69b4, 0 0 45px #00FFFF;
          text-shadow: 1px 1px 5px #FFD700;
          transform: scale(1.2);
        }

        .filmesClassicos {
          margin-top: 50px;
          text-align: center;
          color: #FF00FF;
        }

        .subTitle {
          font-size: 36px;
          text-shadow: 2px 2px #FFD700;
        }

        .reviewCard {
          margin-top: 20px;
          text-align: center;
          background-color: #FFFAF0;
          border-color: #FF69B4;
          border-width: 2px;
        }

        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
