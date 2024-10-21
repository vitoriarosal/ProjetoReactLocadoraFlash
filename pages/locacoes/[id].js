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
    if (query.id) {
      const locacoes = JSON.parse(window.localStorage.getItem('locacoes')) || [];
      const locacao = locacoes[query.id];
      for (let campo in locacao) {
        setValue(campo, locacao[campo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const locacoes = JSON.parse(window.localStorage.getItem('locacoes')) || [];
    locacoes.splice(query.id, 1, dados);
    window.localStorage.setItem('locacoes', JSON.stringify(locacoes));
    push('/locacoes');
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>
          <Form>
            <Form.Group className="py-2 px-3" controlId="filme">
              <Form.Label>Escolha o Filme</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Digite o nome do filme"
                {...register('filme', geralValidator.notNull)}
                isInvalid={errors.filme}
              />
              {errors.filme && <p className="mt-1 text-light">{errors.filme.message}</p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="cliente">
              <Form.Label>Nome do Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do cliente"
                {...register('cliente', geralValidator.notNull)}
                isInvalid={errors.cliente}
              />
              {errors.cliente && <p className="mt-1 text-light">{errors.cliente.message}</p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="dataInicio">
              <Form.Label>Data de Início da Locação</Form.Label>
              <Form.Control
                type="date"
                {...register('dataInicio', geralValidator.notNull)}
                isInvalid={errors.dataInicio}
              />
              {errors.dataInicio && <p className="mt-1 text-light">{errors.dataInicio.message}</p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="dataFim">
              <Form.Label>Data de Fim da Locação</Form.Label>
              <Form.Control
                type="date"
                {...register('dataFim', geralValidator.notNull)}
                isInvalid={errors.dataFim}
              />
              {errors.dataFim && <p className="mt-1 text-light">{errors.dataFim.message}</p>}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="valor">
              <Form.Label>Valor da Locação</Form.Label>
              <Form.Control
                type="number"
                placeholder="Digite o valor da locação"
                {...register('valor', geralValidator.notNull)}
                isInvalid={errors.valor}
              />
              {errors.valor && <p className="mt-1 text-light">{errors.valor.message}</p>}
            </Form.Group>

            <div className="text-center me-2 py-3">
              <Button
                style={styleForm.buttonSave}
                type="button"
                className="me-2"
                onClick={handleSubmit(salvar)}
              >
                <RiFilePaperFill />
                Salvar
              </Button>
              <Link href="/locacoes">
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

export default id;
