import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@/styles/globalStyle';
import Header from '@/components/Header';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [locacoes, setLocacoes] = useState([]);
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Obtendo as locações e filmes do localStorage
    const locacoesLocal = JSON.parse(localStorage.getItem('locacoes')) || [];
    const filmesLocal = JSON.parse(localStorage.getItem('filmes')) || [];
    setLocacoes(locacoesLocal);
    setFilmes(filmesLocal);
  }, []);

  // Contagem de locações por filme
  const locacoesPorFilme = {};
  locacoes.forEach((locacao) => {
    const filme = locacao.filme;
    if (locacoesPorFilme[filme]) {
      locacoesPorFilme[filme]++;
    } else {
      locacoesPorFilme[filme] = 1;
    }
  });

  // Preparando os dados para o gráfico de filmes mais locados
  const pieData = {
    labels: Object.keys(locacoesPorFilme),
    datasets: [
      {
        label: 'Quantidade de Locações por Filme',
        data: Object.values(locacoesPorFilme),
        backgroundColor: [
          '#ff33cc', '#33ccff', '#ffcc33', '#99ff33', '#ff6600', '#9933ff', '#ff0000',
        ],
        borderColor: '#000000',
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div style={{
          backgroundColor: '#f0f0f0',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '5px 5px 15px #888888',
          border: '3px solid #ff9900',
        }}>
          <h1 style={{
            textAlign: 'center',
            fontFamily: 'Comic Sans MS, cursive',
            color: '#3333ff',
            textShadow: '2px 2px #ffcc00',
          }}>
            Dashboard de Filmes Mais Locados
          </h1>
          <Row className="my-4">
            <Col>
              <h5 style={{
                fontFamily: 'Verdana, sans-serif',
                color: '#ff4500',
                background: '#ffffcc',
                padding: '8px',
                borderRadius: '5px',
                border: '2px solid #ffcc00',
                textAlign: 'center',
              }}>
                Total de Filmes Locados: {locacoes.length}
              </h5>
            </Col>
          </Row>

          {Object.keys(locacoesPorFilme).length > 0 ? (
            <div style={{
              border: '2px solid #333',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              <Pie
                data={pieData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        font: { size: 12, family: 'Arial, sans-serif' },
                        color: '#000000',
                      },
                    },
                    title: {
                      display: true,
                      text: 'Distribuição de Locações por Filme',
                      font: { size: 16, family: 'Arial, sans-serif' },
                      color: '#ff0000',
                    },
                  },
                }}
                height={300}
              />
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#ff0000', fontFamily: 'Comic Sans MS, cursive' }}>
              Nenhuma locação registrada para exibir no gráfico.
            </p>
          )}
        </div>
      </Container>
    </>
  );
}
