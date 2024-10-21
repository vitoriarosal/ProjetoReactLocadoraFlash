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

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();
  const [cargos, setCargos] = useState([])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cargos')) || [] ; 
    setCargos(data); 
    if(query.id) { 
      const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios'))
      const funcionario = funcionarios[query.id]
      for(let campo in funcionario) { setValue(campo, funcionario[campo])}
    }   
  }, [query.id]);

  function salvar(dados) {
    const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || []
    funcionarios.splice(query.id, 1, dados)
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    push("/funcionarios")
  }

  return (
    <> 
    <GlobalStyle/>
    <Header/>
    <Container>
    <div style={styleForm}>  
    <Form>
        <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Nome do Funcionário</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-light'> {errors.nome.message} </p> } 
        </Form.Group>
      
        <Form.Group className="py-2 px-3" controlId="cargo">
          <Form.Label> Cargo </Form.Label>
          <Form.Select isInvalid={errors.cargo} {...register('cargo', geralValidator.notNull)}>
          { errors.cargo && <p className='mt-1 text-light'> {errors.cargo.message} </p> } 
          <option value=""> Selecione um cargo </option>
                  {cargos.map((o,i) => (
                  <option key={i} value={o.value}> {o.descricao} </option>         
          ))}
          </Form.Select>
          <Link href="/cargos/form" className='mb-2' > 
          <Button type="button" style={styleForm.buttonPlus} className='mt-2'> 
            <AiOutlinePlus/>
                Criar cargo
            </Button> 
            </Link>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="setor">
          <Form.Label> Setor </Form.Label>
          <Form.Select isInvalid={errors.setor} {...register('setor', geralValidator.notNull)}>
          { errors.setor && <p className='mt-1 text-light'> {errors.setor.message} </p> }
          <option value=""> Selecione o setor </option>
                <option key={"financeiro"} value={"Financeiro"}> Financeiro </option>
                <option key={"tecnologia"} value={"Tecnologia"}> Tecnologia </option>
                <option key={"recursos-humanos"} value={"Recursos Humanos"}> Recursos Humanos </option>
          </Form.Select>
        </Form.Group>
    
        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave} type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/funcionarios'}>
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

export default id
