module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Paciente = sequelize.define(
        'Paciente',
        {
            cpf: {
                type: DataTypes.CHAR(14),
                primaryKey: true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            endereco: {
                type: DataTypes.TEXT,
            },
            comorbidades: {
                type: DataTypes.TEXT,
            },
            situacao: {
                type: DataTypes.STRING,
            },
            agente_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Agentes',
                    key: 'id',
                },
            },
            microarea_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Microareas',
                    key: 'id',
                },
            },
        },
        {
            tableName: 'Pacientes',
            timestamps: false,
        }
    );

    Paciente.associate = (models) => {
        // Um paciente é cadastrado por um agente
        Paciente.belongsTo(models.Agente, {
            foreignKey: 'agente_id',
            onDelete: 'SET NULL',
        });

        // Um paciente pertence a uma microárea
        Paciente.belongsTo(models.Microarea, {
            foreignKey: 'microarea_id',
            onDelete: 'SET NULL',
        });

        // Um paciente pode estar vinculado a várias tarefas
        Paciente.hasMany(models.Tarefa, {
            foreignKey: 'paciente_cpf',
            onDelete: 'CASCADE',
        });

        // Relacionamento muitos-para-muitos com Microárea
        Paciente.belongsToMany(models.Microarea, {
            through: 'PacienteMicroarea',
            foreignKey: 'paciente_cpf',
        });
    };

    return Paciente;
};
