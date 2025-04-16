CREATE TABLE Microareas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE Agentes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cargo VARCHAR(50),
    id_microarea INT REFERENCES Microareas(id)
);

CREATE TABLE Pacientes (
    cpf CHAR(14) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco TEXT,
    comorbidades TEXT,
    situacao VARCHAR(50),
    id_agente INT REFERENCES Agentes(id),
    id_microarea INT REFERENCES Microareas(id)
);

CREATE TABLE Tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    status VARCHAR(50) DEFAULT 'pendente',
    prioridade VARCHAR(50) DEFAULT 'media',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_limite TIMESTAMP,
    data_conclusao TIMESTAMP,
    tipo VARCHAR(100),
    id_agente INT REFERENCES Agentes(id),
    id_paciente CHAR(14) REFERENCES Pacientes(cpf)
);