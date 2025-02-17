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

const formClientes = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('classes')) || [];
    setClasses(data);
  }, []);

  function salvar(dados) {
    const clientes = JSON.parse(window.localStorage.getItem('clientes')) || [];

    clientes.unshift(dados);

    window.localStorage.setItem('clientes', JSON.stringify(clientes));

    push('/clientes');
  }

  function handleChange(event) {
    setValue(event.target.name, mask(event.target.value, event.target.getAttribute('mask')));
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>
          <Form onSubmit={handleSubmit(salvar)}>
            <Form.Group className="py-2 px-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                isInvalid={errors.nome}
                placeholder="Digite o nome"
                {...register('nome', geralValidator.notNull)}
              />
              {errors.nome && <p className="mt-1 text-danger">{errors.nome.message}</p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                max={100}
                min={1}
                placeholder="Digite sua idade"
                {...register('idade', geralValidator.notNull)}
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="stannis@gmail.com"
                {...register('email', geralValidator.notNull)}
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                {...register('cpf', geralValidator.notNull)}
                onChange={handleChange}
                mask="999.999.999-99"
              />
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(xx)xxxxx-xxxx"
                {...register('telefone', geralValidator.notNull)}
                mask="(99)99999-9999"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center me-2 py-3">
              <Button style={styleForm.buttonSave} type="submit" className="me-2">
                <RiFilePaperFill /> Salvar
              </Button>
              <Link href="/clientes">
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
};

export default formClientes;
