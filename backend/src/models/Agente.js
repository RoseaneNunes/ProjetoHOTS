module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Agente = sequelize.define(
        'Agente',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cargo: {
                type: DataTypes.STRING,
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
            tableName: 'Agentes',
            timestamps: false,
        }
    );

    Agente.associate = (models) => {
        // Um agente pode ter várias tarefas
        Agente.hasMany(models.Tarefa, {
            foreignKey: 'agente_id',
            onDelete: 'CASCADE',
        });

        // Um agente pode cadastrar vários pacientes
        Agente.hasMany(models.Paciente, {
            foreignKey: 'agente_id',
            onDelete: 'SET NULL',
        });

        // Um agente pertence a uma microárea
        Agente.belongsTo(models.Microarea, {
            foreignKey: 'microarea_id',
            onDelete: 'SET NULL',
        });
    };

    return Agente;
};
