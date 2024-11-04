'use client';

import { Container, Row, Col, Card, Button, Spinner, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@/styles/globalStyle';
import Header from '@/components/Header';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import { AiOutlineUser, AiOutlineCalendar, AiOutlineFundProjectionScreen } from 'react-icons/ai';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

function InfoCard({ icon: Icon, title, value, bgColor, textColor }) {
  return (
    <Card style={{ borderRadius: '15px', backgroundColor: bgColor, color: textColor }}>
      <Card.Body className="text-center">
        <Icon size={30} />
        <h5>{title}</h5>
        <h2>{value}</h2>
      </Card.Body>
    </Card>
  );
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [locacoes, setLocacoes] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);
  const [chartType, setChartType] = useState('Bar');

  useEffect(() => {
    setTimeout(() => {
      const locacoesLocal = JSON.parse(localStorage.getItem('locacoes')) || [];
      const filmesLocal = JSON.parse(localStorage.getItem('filmes')) || [];
      const clientesLocal = JSON.parse(localStorage.getItem('clientes')) || [];
      const funcionariosLocal = JSON.parse(localStorage.getItem('funcionarios')) || [];
      const fornecedoresLocal = JSON.parse(localStorage.getItem('fornecedores')) || [];
      
      setLocacoes(locacoesLocal);
      setFilmes(filmesLocal);
      setClientes(clientesLocal);
      setFuncionarios(funcionariosLocal);
      setFornecedores(fornecedoresLocal);
      setIsLoading(false);
    }, 1000); // Simula o carregamento com um delay
  }, []);

  const locacoesPorGenero = {};
  locacoes.forEach((locacao) => {
    const filme = filmes.find(f => f.nome === locacao.filme);
    if (filme && filme.genero) {
      const genero = filme.genero;
      locacoesPorGenero[genero] = (locacoesPorGenero[genero] || 0) + 1;
    }
  });

  const generoData = {
    labels: Object.keys(locacoesPorGenero),
    datasets: [{
      label: 'Locações por Gênero',
      data: Object.values(locacoesPorGenero),
      backgroundColor: ['#ffcc00', '#ff9900', '#33cc33', '#ff3333', '#3366ff', '#9900cc'],
    }],
  };

  const locacoesPorMes = {};
  locacoes.forEach((locacao) => {
    const mes = new Date(locacao.dataInicio).toLocaleString('default', { month: 'long' });
    locacoesPorMes[mes] = (locacoesPorMes[mes] || 0) + 1;
  });

  const mesData = {
    labels: Object.keys(locacoesPorMes),
    datasets: [{
      label: 'Locações por Mês',
      data: Object.values(locacoesPorMes),
      backgroundColor: '#33ccff',
    }],
  };

  const funcionariosPorSetor = {};
  funcionarios.forEach((funcionario) => {
    const setor = funcionario.setor || 'Outros';
    funcionariosPorSetor[setor] = (funcionariosPorSetor[setor] || 0) + 1;
  });

  const setorData = {
    labels: Object.keys(funcionariosPorSetor),
    datasets: [{
      label: 'Funcionários por Setor',
      data: Object.values(funcionariosPorSetor),
      backgroundColor: '#ff66b3',
    }],
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {isLoading ? (
          <div className="text-center" style={{ marginTop: '20px' }}>
            <Spinner animation="border" variant="primary" />
            <p>Carregando dados...</p>
          </div>
        ) : (
          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Comic Sans MS, cursive', color: '#3333ff', textShadow: '2px 2px #ffcc00' }}>
              Dashboard Geral
            </h1>

            <Row className="my-4 text-center">
              <Col md={4}>
                <InfoCard icon={AiOutlineFundProjectionScreen} title="Total de Locações" value={locacoes.length} bgColor="#ffddc1" textColor="#ff4500" />
              </Col>
              <Col md={4}>
                <InfoCard icon={AiOutlineUser} title="Total de Clientes" value={clientes.length} bgColor="#c1e1ff" textColor="#3333ff" />
              </Col>
              <Col md={4}>
                <InfoCard icon={AiOutlineCalendar} title="Fornecedores Ativos" value={fornecedores.length} bgColor="#d4ffdd" textColor="#33cc33" />
              </Col>
            </Row>

            <Row className="my-4 text-center">
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Tipo de Gráfico: {chartType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setChartType('Bar')}>Barra</Dropdown.Item>
                  <Dropdown.Item onClick={() => setChartType('Line')}>Linha</Dropdown.Item>
                  <Dropdown.Item onClick={() => setChartType('Pie')}>Pizza</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>

            <Row className="my-4">
              <Col md={6}>
                <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                  {chartType === 'Bar' && (
                    <Bar data={generoData} options={{ plugins: { title: { display: true, text: 'Locações por Gênero' } }, responsive: true, maintainAspectRatio: false }} height={300} />
                  )}
                  {chartType === 'Line' && (
                    <Line data={generoData} options={{ plugins: { title: { display: true, text: 'Locações por Gênero' } }, responsive: true, maintainAspectRatio: false }} height={300} />
                  )}
                  {chartType === 'Pie' && (
                    <Pie data={generoData} options={{ plugins: { title: { display: true, text: 'Locações por Gênero' } }, responsive: true, maintainAspectRatio: false }} height={300} />
                  )}
                </div>
              </Col>
              <Col md={6}>
                <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                  <Line data={mesData} options={{ plugins: { title: { display: true, text: 'Locações por Mês' } }, responsive: true, maintainAspectRatio: false }} height={300} />
                </div>
              </Col>
            </Row>

            <Row className="my-4">
              <Col>
                <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ffffff', maxWidth: '300px', margin: '0 auto', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                  <Pie data={setorData} options={{ plugins: { title: { display: true, text: 'Funcionários por Setor' } }, responsive: true, maintainAspectRatio: false }} width={200} height={200} />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>

    </>
  );
}
