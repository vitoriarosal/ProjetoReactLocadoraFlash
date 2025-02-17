import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardCadastros = ({ nome, img, desc, link }) => {
  return (
    <Card
      className="shadow-lg border-0"
      style={{
        width: '18rem',
        background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', 
        borderRadius: '15px', 
        overflow: 'hidden', 
        color: '#fff', 
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
          objectFit: 'cover', 
          borderBottom: '4px solid #FFC107' 
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
