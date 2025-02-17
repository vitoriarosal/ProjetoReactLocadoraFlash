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
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem('clientes')) || [];
  }

  function excluir(i) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll();
      itens.splice(i, 1);  
      window.localStorage.setItem('clientes', JSON.stringify(itens)); 
      setClientes(itens); 
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Link href="/clientes/form" className="mb-2">
          <Button style={styleForm.buttonPlus} className="mb-2">
            <AiOutlinePlus />
            Criar novo cliente
          </Button>
        </Link>

        {clientes.map((c, index) => (
          <Card style={styleCard} key={index}>
            <Card.Header as="h5">{c.nome}</Card.Header>
            <Card.Body>
              <Card.Title>Idade: {c.idade}</Card.Title>
              <Card.Title>Email: {c.email}</Card.Title>
              <Card.Title>CPF: {c.cpf}</Card.Title>
              <Card.Title>Telefone: {c.telefone}</Card.Title>
              <Card.Title>Classe Favorita: {c.classFav}</Card.Title>
              <div className="d-flex">
                <Link href={'/clientes/' + index} passHref>
                  <Button variant="link" className="me-2">
                    <TbFeather size={25} className="text-primary" />
                  </Button>
                </Link>
                <Button variant="link" className="text-danger" onClick={() => excluir(index)}>
                  <TbTrashFilled size={25} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default index;
