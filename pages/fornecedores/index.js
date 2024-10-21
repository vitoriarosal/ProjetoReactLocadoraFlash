import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleCard from '@/styles/styleCard'
import styleForm from '@/styles/styleForm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbFeather, TbTrashFilled } from 'react-icons/tb'

const index = () => {
  const [fornecedores, setFornecedores] = useState([])

  useEffect(() => {
    setFornecedores(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('fornecedores')) || []
  }

  function excluir(i) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll()
      itens.splice(i, 1)
      window.localStorage.setItem('fornecedores', JSON.stringify(itens))
      setFornecedores(itens)
    }
  }

  return (
    <> 
    <GlobalStyle/>
      <Header/>
      <Container> 
        <Link href="/fornecedores/form" className='mb-2'> 
          <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
              Adicionar fornecedor
          </Button>
        </Link>

        {fornecedores.map((f, index) => (
          <Card style={styleCard} key={index}>     
            <Card.Header as="h5"> {f.nome} </Card.Header>
            <Card.Body>
              <Card.Title> Tipo de Serviço: {f.tipoServico} </Card.Title>
              <Card.Title> Contato: {f.contato} </Card.Title>
              <Card.Title> Email: {f.email} </Card.Title>
              <Card.Title> Telefone: {f.telefone} </Card.Title>
              <Link href={'/fornecedores/' + index}>
                <TbFeather size={25} className='text-light' /> 
              </Link>
              <TbTrashFilled size={25} onClick={() => excluir(index)} className="text-danger me-2"/>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default index
