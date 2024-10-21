import CardCadastros from '@/components/CardCadastros';
import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        <h1>Cadastro Locadora</h1>
        <Row className='mb-5'>
          <Col>
            <CardCadastros
              nome="Clientes"
              img='https://capricho.abril.com.br/wp-content/uploads/2022/07/tendencias-anos-2000.jpg'
              desc="Gerencie os clientes da locadora"
              link="/clientes"
            />
          </Col>
          <Col>
            <CardCadastros
              nome="Filmes"
              img='https://th.bing.com/th/id/R.ce75af1bc6d169283cf2f22c7b3bb2d9?rik=p6CF7cH57IqwpA&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fvideothumbnails%2f14%2f09%2f06%2f03%2f17%2f237406.jpg&ehk=1AT4TzyDu4zysufNQnMFDf5r%2f4gmJBxMgsRgZ4MAyZo%3d&risl=&pid=ImgRaw&r=0'
              desc="Gerencie o catálogo de filmes"
              link="/filmes"
            />
          </Col>
          <Col>
            <CardCadastros
              nome="Locações"
              img='https://www.dicasdemulher.com.br/wp-content/uploads/2020/02/filmes-anos-90-0-595xh.png'
              desc="Registre e acompanhe as locações"
              link="/locacoes"
            />
          </Col>
        </Row>
        <Row className='mb-5 ms-2 justify-content-center'>
          <Col md={4}>
            <CardCadastros
              nome="Funcionários"
              img='https://oimparcial.com.br/app/uploads/2021/04/matrix_4fJCJB1.jpg'
              desc="Gerencie os funcionários da locadora"
              link="/funcionarios"
            />
          </Col>
          <Col md={4}>
            <CardCadastros
              nome="Fornecedores"
              img='https://th.bing.com/th/id/R.1aa05d4da4c03ae473524830fedd6e22?rik=wQGhg9WsQhWcDw&pid=ImgRaw&r=0'
              desc="Gerencie os fornecedores de filmes"
              link="/fornecedores"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
