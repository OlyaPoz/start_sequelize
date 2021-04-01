'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  }
};