'use client'

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
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    setFornecedores(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem('fornecedores')) || [];
  }

  function excluir(i) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(i, 1);
      window.localStorage.setItem('fornecedores', JSON.stringify(itens));
      setFornecedores(itens);
    }
  }

  return (
    <> 
      <GlobalStyle />
      <Header />
      <Container> 
        <Link href="/fornecedores/form" passHref>
          <Button style={styleForm.buttonPlus} className="mb-3">
            <AiOutlinePlus />
            Adicionar fornecedor
          </Button>
        </Link>

        {fornecedores.length === 0 ? (
          <p className="text-center mt-4">Nenhum fornecedor cadastrado.</p>
        ) : (
          fornecedores.map((f, index) => (
            <Card style={styleCard} key={index} className="mb-3">     
              <Card.Header as="h5"> {f.nome} </Card.Header>
              <Card.Body>
                <Card.Text><strong>Tipo de Serviço:</strong> {f.tipoServico}</Card.Text>
                <Card.Text><strong>Contato:</strong> {f.contato}</Card.Text>
                <Card.Text><strong>Email:</strong> {f.email}</Card.Text>
                <Card.Text><strong>Telefone:</strong> {f.telefone}</Card.Text>
                <div className="d-flex align-items-center">
                  <Link href={'/fornecedores/' + index} passHref>
                    <TbFeather size={25} className="text-light me-2" role="button" style={{ cursor: 'pointer' }} />
                  </Link>
                  <TbTrashFilled
                    size={25}
                    onClick={() => excluir(index)}
                    className="text-danger"
                    role="button"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}

export default index;
