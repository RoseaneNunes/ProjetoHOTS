module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Tarefa = sequelize.define(
        'Tarefa',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            descricao: {
                type: DataTypes.TEXT,
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: 'pendente',
            },
            prioridade: {
                type: DataTypes.STRING,
                defaultValue: 'media',
            },
            data_criacao: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            data_limite: {
                type: DataTypes.DATE,
            },
            data_conclusao: {
                type: DataTypes.DATE,
            },
            tipo: {
                type: DataTypes.STRING,
            },
            agente_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Agentes',
                    key: 'id',
                },
            },
            paciente_cpf: {
                type: DataTypes.CHAR(14),
                references: {
                    model: 'Pacientes',
                    key: 'cpf',
                },
            },
        },
        {
            tableName: 'Tarefas',
            timestamps: false,
        }
    );

    Tarefa.associate = (models) => {
        // Uma tarefa é criada por um agente
        Tarefa.belongsTo(models.Agente, {
            foreignKey: 'agente_id',
            onDelete: 'CASCADE',
        });

        // Uma tarefa está vinculada a um paciente
        Tarefa.belongsTo(models.Paciente, {
            foreignKey: 'paciente_cpf',
            onDelete: 'CASCADE',
        });
    };

    return Tarefa;
};
