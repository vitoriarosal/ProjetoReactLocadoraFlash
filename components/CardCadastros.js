import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardCadastros = ({ nome, img, desc, link }) => {
  return (
    <Card
      className="shadow-lg border-0"
      style={{
        width: '18rem',
        background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Gradiente para o fundo
        borderRadius: '15px', // Bordas arredondadas para um visual suave
        overflow: 'hidden', // Para garantir que os cantos fiquem arredondados
        color: '#fff', // Texto branco para contraste
        textDecoration: 'none'
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        height="250px"
        className="rounded"
        alt={`Imagem de ${nome}`}
        style={{
          objectFit: 'cover', // Evita que a imagem fique distorcida
          borderBottom: '4px solid #FFC107' // Linha vibrante embaixo da imagem
        }}
      />
      <Card.Body className="text-center">
        <Card.Title className="mb-3" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          <h4>{nome}</h4>
        </Card.Title>
        <Card.Text className="text-light mb-4" style={{ fontSize: '14px' }}>
          {desc}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Link href={link} passHref>
            <Button
              variant="outline-light"
              style={{
                borderColor: '#FFC107',
                color: '#FFC107',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Ver {nome}
            </Button>
          </Link>
          <Link href={`${link}/form`} passHref>
            <Button
              variant="light"
              style={{
                backgroundColor: '#FFC107',
                color: '#000',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              Criar
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardCadastros;
