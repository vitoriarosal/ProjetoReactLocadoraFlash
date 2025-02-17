'use client'
import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import styleForm from '@/styles/styleForm';
import geralValidator from '@/validators/geralValidator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { RiFilePaperFill } from 'react-icons/ri';
import { TbArrowLeftTail } from 'react-icons/tb';
import { mask } from 'remask';

const formFilmes = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [imagem, setImagem] = useState(null);

  const generosFilmes = [
    "Ação", "Aventura", "Comédia", "Drama", "Ficção Científica", 
    "Romance", "Terror", "Suspense", "Fantasia", "Animação"
  ];

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    setImagem(base64);
  }

  function salvar(dados) {
    const filmes = JSON.parse(window.localStorage.getItem('filmes')) || [];
    const novoFilme = { ...dados, imagem };
    filmes.unshift(novoFilme);
    window.localStorage.setItem('filmes', JSON.stringify(filmes));
    push("/filmes");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const maskedValue = mask(value, ['999']); 
    setValue(name, maskedValue);
  }

  return (
    <> 
      <GlobalStyle />
      <Header />
      <Container>
        <div style={styleForm}>  
          <Form>

            {/* Campo para o título do filme */}
            <Form.Group className="py-2 px-3" controlId="nome">
              <Form.Label>Título do Filme</Form.Label>
              <Form.Control 
                type="text" 
                isInvalid={errors.nome} 
                placeholder="Digite o título do filme" 
                {...register('nome', geralValidator.notNull)}
              />
              { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
            </Form.Group>

            {/* Campo para o gênero do filme */}
            <Form.Group className="py-2 px-3" controlId="genero">
              <Form.Label>Gênero do filme</Form.Label>
              <Form.Select {...register('genero', geralValidator.notNull)}>
                <option value="">Selecione o gênero</option>
                {generosFilmes.map((genero, i) => (
                  <option key={i} value={genero}>{genero}</option>               
                ))}      
              </Form.Select>
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

            <Form.Group className="py-2 px-3" controlId="duracao">
              <Form.Label>Duração (minutos)</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite a duração do filme"  
                {...register('duracao', geralValidator.notNull)}
                onChange={handleChange} // Aplicação da máscara
              />
            </Form.Group>

            {/* Campo para sinopse */}
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
                onChange={handleImageUpload}
              />
            </Form.Group>

            <div className='text-center me-2 py-3'>
              <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
                <RiFilePaperFill />
                Salvar
              </Button>
              <Link href={'/filmes'}>
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
}

export default formFilmes;
