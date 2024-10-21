'use client'

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
import { mask } from 'remask'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const classes = JSON.parse(window.localStorage.getItem('classes')) || [];
    setClasses(classes);

    if (query.id) {
      const filmes = JSON.parse(window.localStorage.getItem('filmes')) || [];
      const filme = filmes[query.id];
      for (let campo in filme) {
        setValue(campo, filme[campo])
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const filmes = JSON.parse(window.localStorage.getItem('filmes')) || []
    filmes.splice(query.id, 1, dados)
    window.localStorage.setItem('filmes', JSON.stringify(filmes))
    push("/filmes")
  }

  function handleChange(event) {
    setValue(event.target.name, (mask(event.target.value, event.target.getAttribute("mask"))))
  }

  return (
    <> 
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>
          <Form>

            <Form.Group className="py-2 px-3" controlId="nome">
              <Form.Label>Título do Filme</Form.Label>
              <Form.Control 
                type="text" 
                isInvalid={errors.nome} 
                placeholder="Digite o título do filme" 
                {...register('nome', geralValidator.notNull)} 
              />
              {errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="classificacao">
              <Form.Label>Classificação Indicativa</Form.Label>
              <Form.Select {...register('classificacao', geralValidator.notNull)}>
                <option value="">Selecione a classificação indicativa</option>
                <option value="Livre">Livre</option>
                <option value="10 anos">10 anos</option>
                <option value="12 anos">12 anos</option>
                <option value="14 anos">14 anos</option>
                <option value="16 anos">16 anos</option>
                <option value="18 anos">18 anos</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="ano">
              <Form.Label>Ano de Lançamento</Form.Label>
              <Form.Control 
                type="number" 
                max={3000} 
                min={1900} 
                placeholder="Digite o ano de lançamento" 
                {...register('ano', geralValidator.notNull)} 
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="duracao">
              <Form.Label>Duração (minutos)</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Digite a duração do filme"  
                {...register('duracao', geralValidator.notNull)} 
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="sinopse">
              <Form.Label>Sinopse</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="Escreva a sinopse do filme" 
                {...register('sinopse', geralValidator.notNull)} 
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="imagem">
              <Form.Label>Imagem do Filme</Form.Label>
              <Form.Control 
                type="file" 
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setValue('imagem', reader.result);  // Salva a imagem em base64 no form
                  };
                  if (file) {
                    reader.readAsDataURL(file);  // Converte para base64
                  }
                }}
              />
            </Form.Group>

            <div className='text-center me-2 py-3'>
              <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
                <RiFilePaperFill /> Salvar
              </Button>
              <Link href={'/filmes'}>
                <Button type="button" style={styleForm.buttonBack}>
                  <TbArrowLeftTail /> Voltar
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default id
