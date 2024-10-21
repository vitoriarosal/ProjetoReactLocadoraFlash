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
  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    setFuncionarios(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('funcionarios')) || []
  }

  function excluir(i) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll()
      itens.splice(i, 1)
      window.localStorage.setItem('funcionarios', JSON.stringify(itens))
      setFuncionarios(itens)
    }
  }

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container> 
        <Link href="/funcionarios/form" className='mb-2'> 
          <Button style={styleForm.buttonPlus} className='mb-2'> 
            <AiOutlinePlus />
            Adicionar Funcionário
          </Button>
        </Link>

        {funcionarios.map((f, index) => (
          <Card style={styleCard} key={index}>     
            <Card.Header as="h5"> {f.nome} </Card.Header>
            <Card.Body>
              <Card.Title> Cargo: {f.cargo} </Card.Title>
              <Card.Title> Setor: {f.setor} </Card.Title>
              <Link href={'/funcionarios/' + index}>
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
