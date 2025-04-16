module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Microarea = sequelize.define(
        'Microarea',
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
            descricao: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: 'Microareas',
            timestamps: false,
        }
    );

    Microarea.associate = (models) => {
        // Uma microárea pode ter vários agentes
        Microarea.hasMany(models.Agente, {
            foreignKey: 'microarea_id',
            onDelete: 'SET NULL',
        });

        // Uma microárea pode ter vários pacientes
        Microarea.hasMany(models.Paciente, {
            foreignKey: 'microarea_id',
            onDelete: 'SET NULL',
        });

        // Relacionamento muitos-para-muitos com Paciente
        Microarea.belongsToMany(models.Paciente, {
            through: 'PacienteMicroarea',
            foreignKey: 'microarea_id',
        });
    };

    return Microarea;
};
