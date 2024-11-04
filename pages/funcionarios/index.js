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
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    setFuncionarios(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem('funcionarios')) || [];
  }

  function excluir(i) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(i, 1);
      window.localStorage.setItem('funcionarios', JSON.stringify(itens));
      setFuncionarios(itens);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container> 
        <Link href="/funcionarios/form" passHref>
          <Button style={styleForm.buttonPlus} className='mb-3'> 
            <AiOutlinePlus />
            Adicionar Funcionário
          </Button>
        </Link>

        {funcionarios.length === 0 ? (
          <p className="text-center mt-4">Nenhum funcionário cadastrado.</p>
        ) : (
          funcionarios.map((f, index) => (
            <Card style={styleCard} key={index} className="mb-3">     
              <Card.Header as="h5"> {f.nome} </Card.Header>
              <Card.Body>
                <Card.Text><strong>Cargo:</strong> {f.cargo}</Card.Text>
                <Card.Text><strong>Setor:</strong> {f.setor}</Card.Text>
                <div className="d-flex align-items-center">
                  <Link href={'/funcionarios/' + index} passHref>
                    <TbFeather size={25} className='text-light me-2' role="button" style={{ cursor: 'pointer' }} /> 
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
