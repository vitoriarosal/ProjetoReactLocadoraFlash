'use client'
import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import styleForm from '@/styles/styleForm';
import geralValidator from '@/validators/geralValidator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { RiFilePaperFill } from 'react-icons/ri';
import { TbArrowLeftTail } from 'react-icons/tb';

const id = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if(query.id) { 
      const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || [];
      const funcionario = funcionarios[query.id];
      for (let campo in funcionario) { 
        setValue(campo, funcionario[campo]);
      }
    }   
  }, [query.id]);

  function salvar(dados) {
    const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || [];
    funcionarios.splice(query.id, 1, dados);
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    push("/funcionarios");
  }

  return (
    <> 
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>  
          <Form onSubmit={handleSubmit(salvar)}>
            <Form.Group className="py-2 px-3" controlId="nome">
              <Form.Label>Nome do Funcionário</Form.Label>
              <Form.Control 
                type="text" 
                isInvalid={errors.nome} 
                placeholder="Digite o nome" 
                {...register('nome', geralValidator.notNull)}
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
                <option key="financeiro" value="Financeiro">Financeiro</option>
                <option key="tecnologia" value="Tecnologia">Tecnologia</option>
                <option key="recursos-humanos" value="Recursos Humanos">Recursos Humanos</option>
              </Form.Select>
              {errors.setor && <p className='mt-1 text-light'>{errors.setor.message}</p>}
            </Form.Group>
        
            <div className='text-center me-2 py-3'>
              <Button style={styleForm.buttonSave} type="submit" className='me-2'>
                <RiFilePaperFill /> Salvar
              </Button>
              <Link href={'/funcionarios'}>
                <Button type="button" style={styleForm.buttonBack}>
                  <TbArrowLeftTail /> Voltar
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default id;
