'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('user_roles',
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },

        user_id: {
          type: Sequelize.UUID,
          references: { model: "users", key: "uuid" },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
          allowNull: true,
          comment: "id of user",
        },
        role_id: {
          type: Sequelize.UUID,
          references: { model: "roles", key:"uuid" },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
          allowNull: true,
          comment: "id of roles",
        },
        status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active',
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_roles');
  }
};
