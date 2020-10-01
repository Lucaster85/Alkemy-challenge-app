module.exports = (sequelize, dataTypes) => {
    
    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING(16),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }

    const config = {
        tableName: 'users',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updetadAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Transaction, {
            as: 'transaction',
        });
    }

    return User;
}