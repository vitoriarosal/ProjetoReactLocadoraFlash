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
import { AiOutlinePlus } from 'react-icons/ai'
import { RiFilePaperFill } from 'react-icons/ri'
import { TbArrowLeftTail } from 'react-icons/tb'

const formFornecedores = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();
  const [fornecedores, setFornecedores] = useState([])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('fornecedores')) || [] ; 
    setFornecedores(data); 
  }, []);

  function salvar(dados) {
    const fornecedores = JSON.parse(window.localStorage.getItem('fornecedores')) || []
    fornecedores.unshift(dados)
    window.localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    push("/fornecedores")
  }

  return (
    <> 
    <GlobalStyle/>
    <Header/>
    <Container>
    <div style={styleForm}>  
    <Form>
        <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Nome do Fornecedor</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome do fornecedor" {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>
       
        <Form.Group className="py-2 px-3" controlId="tipoServico">
          <Form.Label> Tipo de Serviço </Form.Label>
          <Form.Select {...register('tipoServico', geralValidator.notNull)}>
          <option value=""> Selecione o tipo de serviço oferecido </option>
                <option value={"Transporte"}> Transporte </option>
                <option value={"Alimentação"}> Alimentação </option>
                <option value={"Tecnologia"}> Tecnologia </option>
                <option value={"Consultoria"}> Consultoria </option>
                <option value={"Segurança"}> Segurança </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="contato">
          <Form.Label>Contato</Form.Label>
          <Form.Control type="text" isInvalid={errors.contato} placeholder="Digite o contato do fornecedor" {...register('contato', geralValidator.notNull)}/>
          { errors.contato && <p className='mt-1 text-danger'> {errors.contato.message} </p> } 
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email do fornecedor" {...register('email', geralValidator.notNull)}/>
          { errors.email && <p className='mt-1 text-danger'> {errors.email.message} </p> }
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" isInvalid={errors.telefone} placeholder="Digite o telefone do fornecedor" {...register('telefone', geralValidator.notNull)}/>
          { errors.telefone && <p className='mt-1 text-danger'> {errors.telefone.message} </p> }
        </Form.Group>

        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/fornecedores'}>
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

export default formFornecedores
