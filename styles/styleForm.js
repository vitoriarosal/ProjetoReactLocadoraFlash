const styleForm = {
    borderRadius: '15px', // Bordas mais arredondadas para um visual ainda mais suave
    backgroundColor: '#2C2F33', // Fundo escuro com tom neutro (para destacar os campos e botões)
    padding: '30px', // Espaçamento interno mais confortável
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)', // Sombra mais forte para dar destaque ao form
    color: 'white', // Cor branca para o texto no formulário

    buttonSave: {
        backgroundColor: '#FFD700', // Amarelo vibrante que remete ao estilo dos anos 2000
        color: 'black', // Preto para contraste forte
        borderRadius: '8px', // Bordas arredondadas nos botões
        padding: '12px 25px', // Maior área clicável
        border: 'none',
        cursor: 'pointer', // Ícone de "mão" ao passar o mouse
        fontSize: '16px',
        transition: 'background-color 0.3s ease', // Transição suave para o hover
        fontWeight: 'bold',
    },
    
    buttonBack: {
        backgroundColor: '#7289DA', // Azul vibrante
        color: 'white',
        borderRadius: '8px',
        padding: '12px 25px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
        fontWeight: 'bold',
    },

    buttonPlus: {
        backgroundColor: '#FF4500', // Cor laranja vibrante para destacar
        color: 'white',
        padding: '12px 25px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
        fontWeight: 'bold',
    },

    input: {
        borderRadius: '8px', // Bordas arredondadas nos campos de input
        padding: '12px',
        border: '1px solid #ced4da', // Borda suave para os campos
        marginBottom: '15px',
        width: '100%',
        fontSize: '16px',
        backgroundColor: '#40444B', // Fundo mais escuro para os campos
        color: 'white', // Texto branco nos inputs
        transition: 'border-color 0.3s ease', // Transição suave para hover/foco
    },

    label: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '8px',
        display: 'block',
        color: '#FFD700', // Amarelo que combina com o tema
    },
};

export default styleForm;
