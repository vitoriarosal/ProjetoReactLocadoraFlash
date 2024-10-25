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
import { mask } from 'remask'; // Importa a biblioteca remask para máscara

const formLocacoes = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [filmes, setFilmes] = useState([]); // Estado para armazenar os filmes cadastrados
  const [locados, setLocados] = useState([]); // Estado para armazenar os filmes já locados

  // Buscar filmes cadastrados e locados no localStorage ao carregar a página
  useEffect(() => {
    const filmesCadastrados = JSON.parse(window.localStorage.getItem('filmes')) || [];
    const filmesLocados = JSON.parse(window.localStorage.getItem('locados')) || [];
    setFilmes(filmesCadastrados); // Armazenar os filmes no estado
    setLocados(filmesLocados); // Armazenar os filmes já locados no estado
  }, []);

  function salvar(dados) {
    const locacoes = JSON.parse(window.localStorage.getItem('locacoes')) || [];
    locacoes.unshift(dados);
    window.localStorage.setItem('locacoes', JSON.stringify(locacoes));

    // Adiciona o filme locado à lista de filmes locados
    const filmesLocados = [...locados, dados.filme];
    window.localStorage.setItem('locados', JSON.stringify(filmesLocados));

    push('/locacoes');
  }

  // Função para aplicar a máscara no campo de valor e outros campos
  function handleChange(event) {
    const { name, value } = event.target;

    let maskedValue = value;

    // Aplica diferentes máscaras para diferentes campos
    if (name === 'valor') {
      maskedValue = mask(value, ['9.999,99']); // Máscara de valor monetário
    }

    setValue(name, maskedValue);
  }

  // Filtrar os filmes que não foram locados
  const filmesDisponiveis = filmes.filter(filme => !locados.includes(filme.nome));

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>
          <Form>

            {/* Campo de seleção para escolher o filme da lista cadastrada */}
            <Form.Group className="py-2 px-3" controlId="filme">
              <Form.Label>Escolha o Filme</Form.Label>
              <Form.Select {...register('filme', geralValidator.notNull)}>
                <option value="">Selecione um filme</option>
                {filmesDisponiveis.length > 0 && filmesDisponiveis.map((filme, index) => (
                  <option key={index} value={filme.nome}>
                    {filme.nome}
                  </option>
                ))}
              </Form.Select>
              {errors.filme && (
                <p className="mt-1 text-light">{errors.filme.message}</p>
              )}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="cliente">
              <Form.Label>Nome do Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do cliente"
                {...register('cliente', geralValidator.notNull)}
                isInvalid={errors.cliente}
              />
              {errors.cliente && (
                <p className="mt-1 text-light">{errors.cliente.message}</p>
              )}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="dataInicio">
              <Form.Label>Data de Início da Locação</Form.Label>
              <Form.Control
                type="date"
                {...register('dataInicio', geralValidator.notNull)}
                isInvalid={errors.dataInicio}
              />
              {errors.dataInicio && (
                <p className="mt-1 text-light">{errors.dataInicio.message}</p>
              )}
            </Form.Group>

            <Form.Group className="py-2 px-3" controlId="dataFim">
              <Form.Label>Data de Fim da Locação</Form.Label>
              <Form.Control
                type="date"
                {...register('dataFim', geralValidator.notNull)}
                isInvalid={errors.dataFim}
              />
              {errors.dataFim && (
                <p className="mt-1 text-light">{errors.dataFim.message}</p>
              )}
            </Form.Group>

            {/* Campo de valor com máscara */}
            <Form.Group className="py-2 px-3" controlId="valor">
              <Form.Label>Valor da Locação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o valor da locação"
                {...register('valor', geralValidator.notNull)}
                isInvalid={errors.valor}
                onChange={handleChange} // Aplica a máscara no campo de valor
                name="valor" // Importante para saber qual campo está sendo mascarado
              />
              {errors.valor && (
                <p className="mt-1 text-light">{errors.valor.message}</p>
              )}
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
              <Link href={'/locacoes'}>
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

export default formLocacoes;
