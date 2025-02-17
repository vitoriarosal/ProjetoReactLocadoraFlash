import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@/styles/globalStyle';
import Header from '@/components/Header';
import CardCadastros from '@/components/CardCadastros';

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push('/dashboard');
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Row className="mb-5">
          <Col>
            <div
              onClick={handleClick}
              style={{
                position: 'relative',
                cursor: 'pointer',
                textAlign: 'center',
                overflow: 'hidden', 
                borderRadius: '10px', 
              }}
            >
              <img
                src="https://static-revistaesquinas.casperlibero.edu.br/uploads/2019/02/Mean-Girls.jpg" 
                alt="Filmes Mais Locados"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease, filter 0.3s ease', 
                }}
                className="image-highlight" 
              />
              <h1
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'yellow', 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '20px',
                  borderRadius: '10px',
                  fontFamily: 'Comic Sans MS, Arial Black', 
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                  fontSize: '36px', 
                  letterSpacing: '2px', 
                  transition: 'color 0.3s ease', 
                }}
                className="title-highlight" 
              >
                Filmes Mais Locados nos Últimos 30 Dias
              </h1>
            </div>
            <style jsx>{`
              .image-highlight:hover {
                transform: scale(1.05); // Aumenta a escala ao passar o mouse
                filter: brightness(70%); // Escurece a imagem ao passar o mouse
              }
              .title-highlight:hover {
                color: 'orange'; // Muda a cor do texto ao passar o mouse
              }
            `}</style>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <CardCadastros
              nome="Clientes"
              img="https://capricho.abril.com.br/wp-content/uploads/2022/07/tendencias-anos-2000.jpg"
              desc="Gerencie os clientes da locadora"
              link="/clientes"
            />
          </Col>
          <Col>
            <CardCadastros
              nome="Filmes"
              img="https://th.bing.com/th/id/R.ce75af1bc6d169283cf2f22c7b3bb2d9?rik=p6CF7cH57IqwpA&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fvideothumbnails%2f14%2f09%2f06%2f03%2f17%2f237406.jpg&ehk=1AT4TzyDu4zysufNQnMFDf5r%2f4gmJBxMgsRgZ4MAyZo%3d&risl=&pid=ImgRaw&r=0"
              desc="Gerencie o catálogo de filmes"
              link="/filmes"
            />
          </Col>
          <Col>
            <CardCadastros
              nome="Locações"
              img="https://www.dicasdemulher.com.br/wp-content/uploads/2020/02/filmes-anos-90-0-595xh.png"
              desc="Registre e acompanhe as locações"
              link="/locacoes"
            />
          </Col>
        </Row>
        <Row className="mb-5 ms-2 justify-content-center">
          <Col md={4}>
            <CardCadastros
              nome="Funcionários"
              img="https://oimparcial.com.br/app/uploads/2021/04/matrix_4fJCJB1.jpg"
              desc="Gerencie os funcionários da locadora"
              link="/funcionarios"
            />
          </Col>
          <Col md={4}>
            <CardCadastros
              nome="Fornecedores"
              img="https://th.bing.com/th/id/R.1aa05d4da4c03ae473524830fedd6e22?rik=wQGhg9WsQhWcDw&pid=ImgRaw&r=0"
              desc="Gerencie os fornecedores de filmes"
              link="/fornecedores"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
