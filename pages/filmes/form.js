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
import { mask } from 'remask'; // Importação da máscara

const formFilmes = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [imagem, setImagem] = useState(null); // Estado para armazenar a imagem em Base64

  // Gêneros de filmes tradicionais
  const generosFilmes = [
    "Ação", "Aventura", "Comédia", "Drama", "Ficção Científica", 
    "Romance", "Terror", "Suspense", "Fantasia", "Animação"
  ];

  // Função para converter imagem para Base64
  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // Função para capturar o arquivo de imagem e converter para Base64
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const base64 = await toBase64(file); // Converte a imagem para Base64
    setImagem(base64); // Salva a imagem convertida no estado
  }

  // Função para salvar os dados do filme e a imagem no localStorage
  function salvar(dados) {
    const filmes = JSON.parse(window.localStorage.getItem('filmes')) || [];
    
    // Adicionando a imagem Base64 aos dados do filme
    const novoFilme = { ...dados, imagem: imagem }; // Adiciona a imagem convertida em Base64
    filmes.unshift(novoFilme);
    window.localStorage.setItem('filmes', JSON.stringify(filmes));
    push("/filmes"); // Redireciona para a página de listagem de filmes
  }

  // Função para lidar com a máscara do campo de duração
  function handleChange(event) {
    const { name, value, mask: maskPattern } = event.target;
    setValue(name, mask(value, maskPattern)); // Aplica a máscara e atualiza o valor
  }

  return (
    <> 
    <GlobalStyle/>
    <Header/>
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
            {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
    </Form.Group>

    {/* Campo para o gênero do filme */}
    <Form.Group className="py-2 px-3" controlId="genero">
          <Form.Label>Gênero do filme</Form.Label>
          <Form.Select {...register('genero', geralValidator.notNull)}>
          <option value=""> Selecione o gênero </option>
                  {generosFilmes.map((genero, i) => (
                  <option key={i} value={genero}> {genero} </option>               
          ))}      
          </Form.Select>
    </Form.Group>

    {/* Campo para classificação indicativa */}
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

    {/* Campo para duração do filme com máscara */}
    <Form.Group className="py-2 px-3" controlId="duracao">
          <Form.Label>Duração (minutos)</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Digite a duração do filme"  
            {...register('duracao', geralValidator.notNull)}
            onChange={handleChange} // Aplicação da máscara
            mask="999" // Limitar a duração a até 999 minutos
          />
    </Form.Group>

    {/* Campo para sinopse */}
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

    {/* Botões de salvar e voltar */}
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

export default formFilmes;
