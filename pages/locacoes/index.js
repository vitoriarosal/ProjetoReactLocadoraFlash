import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import styleCard from '@/styles/styleCard';
import styleForm from '@/styles/styleForm';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbFeather, TbTrashFilled } from 'react-icons/tb';

const index = () => {
  const [locacoes, setLocacoes] = useState([]);

  useEffect(() => {
    setLocacoes(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem('locacoes')) || [];
  }

  function excluir(i) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll();
      itens.splice(i, 1);
      window.localStorage.setItem('locacoes', JSON.stringify(itens));
      setLocacoes(itens);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Link href="/locacoes/form" className="mb-2">
          <Button style={styleForm.buttonPlus} className="mb-2">
            <AiOutlinePlus />
            Criar Locação
          </Button>
        </Link>
        {locacoes.map((l, index) => (
          <Card style={styleCard} key={index}>
            <Card.Header as="h5">{l.filme}</Card.Header>
            <Card.Body>
              <Card.Title>Cliente: {l.cliente}</Card.Title>
              <Card.Text>Data de Início: {l.dataInicio}</Card.Text>
              <Card.Text>Data de Fim: {l.dataFim}</Card.Text>
              <Card.Text>Valor: R$ {l.valor}</Card.Text>
              <div className="d-flex align-items-center">
                <Link href={'/locacoes/' + index}>
                  <TbFeather size={25} className="text-light me-2" />
                </Link>
                <TbTrashFilled
                  size={25}
                  onClick={() => excluir(index)}
                  className="text-danger"
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default index;
