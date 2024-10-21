const styleCard = {
    borderRadius: '10px',
    backgroundColor: '#708090',
    height: "100%",
    width: "100%",
    color: "white", // Mudei a cor do texto para contrastar melhor com o fundo
    marginBottom: "10px",
    padding: "15px", // Adicionei padding para melhorar o espaçamento interno
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave para dar mais destaque ao card
    img: {
        height: '250px', // Ajuste na altura da imagem
        width: '100%', // A imagem ocupa 100% da largura
        objectFit: 'cover', // Impede que a imagem fique esticada ou distorcida
        borderRadius: '8px' // Adiciona cantos levemente arredondados à imagem
    },
    buttonSave: {
        backgroundColor: '#228B22',
        color: "white", // Cor do texto branco para contraste com o botão verde
        borderRadius: '5px', // Botão com bordas arredondadas
        padding: '10px 20px', // Ajuste no tamanho do botão para maior área clicável
    },
};

export default styleCard;
