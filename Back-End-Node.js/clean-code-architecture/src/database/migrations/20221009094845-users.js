'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('users',
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        date_of_birth: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING(200),
          allowNull: true,
          validate: {
            isEmail: true,
          },
          unique: {
            args: true,
            msg: "The email has already been taken.",
          },
        },
        password: {
          type: Sequelize.STRING(200),
           allowNull: true,
          set(value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
          },
        },
        phone_number : {
          type: Sequelize.STRING(15),
          allowNull: true,
        },
        otp : {
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        profile_pic : {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        country_code : {
          type : Sequelize.STRING,
          allowNull : true,
        },
        // device_token: {
        //   type: Sequelize.STRING(100),
        //   allowNull: true,
        // },
        device_token: {
          type: Sequelize.STRING(250),
          allowNull: true,
        },
        device_type: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        model: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        version: {
          type: Sequelize.STRING(255),
          allowNull: true,
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
    await queryInterface.dropTable('users');
  }
};
