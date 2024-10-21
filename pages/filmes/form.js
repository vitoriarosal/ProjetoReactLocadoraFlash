import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleForm from '@/styles/styleForm'
import geralValidator from '@/validators/geralValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { RiFilePaperFill } from 'react-icons/ri'
import { TbArrowLeftTail } from 'react-icons/tb'

const formFilmes = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors } } = useForm();
  const [imagem, setImagem] = useState(null); // Estado para armazenar a imagem

  // Gêneros de filmes tradicionais
  const generosFilmes = [
    "Ação", "Aventura", "Comédia", "Drama", "Ficção Científica", 
    "Romance", "Terror", "Suspense", "Fantasia", "Animação"
  ];

  function salvar(dados) {
    const filmes = JSON.parse(window.localStorage.getItem('filmes')) || []
    
    // Adicionando a imagem aos dados do filme
    const novoFilme = { ...dados, imagem: imagem ? URL.createObjectURL(imagem) : null };
    filmes.unshift(novoFilme)
    window.localStorage.setItem('filmes', JSON.stringify(filmes))
    push("/filmes")
  }

  function handleImageUpload(event) {
    setImagem(event.target.files[0]); // Armazena o arquivo da imagem no estado
  }

  return (
    <> 
    <GlobalStyle/>
    <Header/>
    <Container>
    <div style={styleForm}>  
    <Form>
    
    <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Título do Filme</Form.Label>
          <Form.Control 
            type="text" 
            isInvalid={errors.nome} 
            placeholder="Digite o título do filme" 
            {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
    </Form.Group>

    <Form.Group className="py-2 px-3" controlId="genero">
          <Form.Label>Gênero do filme</Form.Label>
          <Form.Select {...register('genero', geralValidator.notNull)}>
          <option value=""> Selecione o gênero </option>
                  {generosFilmes.map((genero, i) => (
                  <option key={i} value={genero}> {genero} </option>               
          ))}      
          </Form.Select>
    </Form.Group>

    <Form.Group className="py-2 px-3" controlId="classificacao">
          <Form.Label> Classificação Indicativa </Form.Label>
          <Form.Select {...register('classificacao', geralValidator.notNull)}>
          <option value=""> Selecione a classificação indicativa </option>
                <option key={1} value={"Livre"}> Livre </option>     
                <option key={2} value={"10 anos"}>  10 anos </option>   
                <option key={3} value={"12 anos"}> 12 anos </option>   
                <option key={4} value={"14 anos"}> 14 anos </option>   
                <option key={5} value={"16 anos"}> 16 anos </option>   
                <option key={6} value={"18 anos"}> 18 anos </option>                    
          </Form.Select>
    </Form.Group>

    <Form.Group className="py-2 px-3" controlId="duracao">
          <Form.Label>Duração (minutos)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Digite a duração do filme"  
            {...register('duracao', geralValidator.notNull)}/>
    </Form.Group>

    <Form.Group className="py-2 px-3" controlId="sinopse">
          <Form.Label>Sinopse</Form.Label>
          <Form.Control 
            as="textarea"
            type="text" 
            placeholder="Escreva a sinopse do filme" 
            {...register('sinopse', geralValidator.notNull)}/>
    </Form.Group>

    {/* Novo campo para upload de imagem */}
    <Form.Group className="py-2 px-3" controlId="imagem">
          <Form.Label>Imagem do Filme</Form.Label>
          <Form.Control 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} // Função de controle de upload
          />
    </Form.Group>

    <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/filmes'}>
        <Button type="button" style={styleForm.buttonBack}>
          <TbArrowLeftTail/> 
          Voltar
        </Button>
        </Link>
    </div>
    </Form>
    </div>
    </Container>
    </>
  )
}

export default formFilmes
