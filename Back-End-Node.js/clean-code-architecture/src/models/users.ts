"use strict";
import { Sequelize } from "sequelize/types";
require("dotenv").config();
const CLOUDINARY_PROFILE_IMAGE = process.env.CLOUDINARY_PROFILE_IMAGE;

const { DataTypes, Model } = require("sequelize");

class Users extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        name: DataTypes.STRING,
        date_of_birth: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        authy_id: DataTypes.STRING,
        country_code: DataTypes.STRING,
        profile_pic: DataTypes.STRING,
        status: DataTypes.STRING,
        device_token: DataTypes.STRING,
        device_type: DataTypes.STRING,
        model: DataTypes.STRING,
        version: DataTypes.STRING,
        is_deleted:DataTypes.BOOLEAN,
        is_paused:DataTypes.BOOLEAN
      },
      {
        tableName: "users",
        sequelize,
      }
    );
  }

  static associate(models: any) {
    this.hasOne(models.UserRole, { foreignKey: "user_id" });
  }
}

Users.prototype.toJSON = function () {
  const user = this.get();
  user.profile_pic = user.profile_pic?.length > 0 ? CLOUDINARY_PROFILE_IMAGE + user.profile_pic : null;
  return user;
};
export { Users };