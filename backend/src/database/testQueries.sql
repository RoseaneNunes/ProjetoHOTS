INSERT INTO
    Microareas (nome, descricao)
VALUES
    ('Centro', 'Região central da cidade');

INSERT INTO
    Agentes (nome, email, senha, cargo, id_microarea)
VALUES
    (
        'João Silva',
        'joao.silva@example.com',
        'senha123',
        'Agente Comunitário',
        1
    );

INSERT INTO
    Pacientes (
        cpf,
        nome,
        endereco,
        comorbidades,
        situacao,
        id_agente,
        id_microarea
    )
VALUES
    (
        '12345678901234',
        'Maria Souza',
        'Rua A, 123',
        'Hipertensão',
        'Ativo',
        1,
        1
    );

INSERT INTO
    Tarefas (
        titulo,
        descricao,
        status,
        prioridade,
        id_agente,
        id_paciente
    )
VALUES
    (
        'Visita domiciliar',
        'Realizar visita ao paciente Maria Souza',
        'pendente',
        'alta',
        1,
        '12345678901234'
    );