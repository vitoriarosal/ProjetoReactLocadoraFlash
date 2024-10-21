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
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    setFilmes(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('filmes')) || []
  }

  function excluir(i) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll()
      itens.splice(i, 1)
      window.localStorage.setItem('filmes', JSON.stringify(itens))
      setFilmes(itens)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Link href="/filmes/form" className='mb-2'>
          <Button style={styleForm.buttonPlus} className='mb-2'>
            <AiOutlinePlus />
            Criar novo filme
          </Button>
        </Link>

        {filmes.length === 0 && <p>Nenhum filme cadastrado ainda.</p>}

        {filmes.map((f, index) => (
          <Card style={styleCard} key={index}>
            <Card.Header as="h5"> {f.nome} </Card.Header>
            <Card.Body>
              {f.imagem && (
                <img 
                  src={f.imagem} 
                  alt={`Imagem do filme ${f.nome}`} 
                  style={{ maxWidth: '200px', height: 'auto' }} 
                />
              )}
              <Card.Title> Diretor: {f.diretor} </Card.Title>
              <Card.Title> Gênero: {f.genero} </Card.Title>
              <Card.Title> Classificação Indicativa: {f.classificacao} </Card.Title>
              <Card.Title> Duração: {f.duracao} minutos </Card.Title>
              <hr />
              <Card.Title> Sinopse: </Card.Title>
              <Card.Text> {f.sinopse} </Card.Text>

              <div className="d-flex align-items-center">
                <Link href={'/filmes/' + index}>
                  <TbFeather size={25} className='text-primary me-3' />
                </Link>
                <TbTrashFilled size={25} onClick={() => excluir(index)} className="text-danger" />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default index
