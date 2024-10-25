const geralValidator = {
    notNull: {
        required: "Preencha o campo"
    },
    nome: {
        required: "Preencha o nome",
        minLength: {
            value: 3,
            message: "O nome deve ter pelo menos 3 caracteres"
        }
    },
    telefone: {
        required: "Preencha o telefone",
        pattern: {
            value: /^\(\d{2}\) \d{5}-\d{4}$/,
            message: "O telefone deve estar no formato (99) 99999-9999"
        }
    },
    email: {
        required: "Preencha o email",
        pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido"
        }
    },
    valor: {
        required: "Preencha o valor",
        min: {
            value: 1,
            message: "O valor deve ser maior que 0"
        },
        max: {
            value: 10000,
            message: "O valor não pode exceder R$ 10.000,00"
        }
    },
    data: {
        required: "Selecione uma data válida",
    },
    cargo: {
        required: "Selecione um cargo"
    },
    tipoServico: {
        required: "Selecione o tipo de serviço"
    },
    cliente: {
        required: "Preencha o nome do cliente",
        minLength: {
            value: 3,
            message: "O nome do cliente deve ter pelo menos 3 caracteres"
        }
    },
    qtd: {
        required: "Preencha o campo",
        min: {
            value: 1,
            message: "Escolha pelo menos uma opção"
        },
        max: {
            value: 100,
            message: "Limite de 100 ultrapassado"
        }
    },
    duracao: {
        required: "Preencha a duração",
        min: {
            value: 1,
            message: "A duração deve ser no mínimo 1 minuto"
        },
        max: {
            value: 999,
            message: "A duração não pode exceder 999 minutos"
        }
    },
    genero: {
        required: "Selecione o gênero do filme"
    }
};

export default geralValidator;
