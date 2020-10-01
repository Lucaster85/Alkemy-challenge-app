module.exports = (sequelize, dataTypes) => {

    const alias = 'Transaction';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            reference: {
                model: 'User',
                key: 'id'
            }
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            reference: {
                model: 'Category',
                key: 'id'
            }
        }
    }

    const config = {
        tableName: 'transactions',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = models => {
        Transaction.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Transaction.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
    };

    return Transaction;
}