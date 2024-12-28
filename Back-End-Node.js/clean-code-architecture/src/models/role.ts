import { Sequelize } from "sequelize/types";

const { DataTypes, Model } = require('sequelize');

class Role extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            }, 
            role_name: DataTypes.STRING,
            status: DataTypes.STRING
        }, {
            tableName:"roles",
            sequelize
        });
    }
    
    static associate(models: any) {
        this.hasMany(models.UserRole, { foreignKey: "id" })
    }
}

export { Role }