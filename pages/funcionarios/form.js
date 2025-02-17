'use client'

import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import styleForm from '@/styles/styleForm';
import geralValidator from '@/validators/geralValidator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { RiFilePaperFill } from 'react-icons/ri';
import { TbArrowLeftTail } from 'react-icons/tb';
import { mask } from 'remask';

const formFuncionarios = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  function salvar(dados) {
    console.log(dados);
    const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || [];
    funcionarios.unshift(dados);
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    push("/funcionarios");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const maskedValue = value.replace(/[0-9]/g, ''); 
    setValue(name, maskedValue);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>  
          <Form>
            <Form.Group className="py-2 px-3" controlId="nome">
              <Form.Label>Nome do Funcionário</Form.Label>
              <Form.Control 
                type="text" 
                isInvalid={errors.nome} 
                placeholder="Digite o nome do funcionário" 
                {...register('nome', geralValidator.notNull)}
                onChange={handleChange} 
              />
              { errors.nome && <p className='mt-1 text-light'> {errors.nome.message} </p> } 
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="cargo">
              <Form.Label>Cargo</Form.Label>
              <Form.Control 
                type="text" 
                isInvalid={errors.cargo} 
                placeholder="Digite o cargo do funcionário" 
                {...register('cargo', geralValidator.notNull)}
              />
              {errors.cargo && <p className='mt-1 text-light'>{errors.cargo.message}</p>} 
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="setor">
              <Form.Label>Setor</Form.Label>
              <Form.Select isInvalid={errors.setor} {...register('setor', geralValidator.notNull)}>
                <option value="">Selecione o setor</option>
                <option key={"financeiro"} value={"Financeiro"}>Financeiro</option>
                <option key={"tecnologia"} value={"Tecnologia"}>Tecnologia</option>
                <option key={"recursos-humanos"} value={"Recursos Humanos"}>Recursos Humanos</option>
              </Form.Select>
              {errors.setor && <p className='mt-1 text-light'>{errors.setor.message}</p>}
            </Form.Group>

            <div className='text-center me-2 py-3'>
              <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
                <RiFilePaperFill />
                Salvar
              </Button>
              <Link href={'/funcionarios'}>
                <Button type="button" style={styleForm.buttonBack}>
                  <TbArrowLeftTail />
                  Voltar
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default formFuncionarios;
