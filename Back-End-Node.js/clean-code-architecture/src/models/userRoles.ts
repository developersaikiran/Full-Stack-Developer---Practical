import { Sequelize } from "sequelize/types";
const  Image_URL  = process.env.Image_URL;
// const  Image_URL  = "http://178.62.2.250:8001";
const { DataTypes, Model } = require('sequelize');
import { Users} from "./users";

class UserRole extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            }, 
            user_id: DataTypes.UUID,
            role_id  :DataTypes.UUID,
        }, {
            tableName:"user_roles",
            sequelize
        });
    }
    static associate(models: any) {
        this.belongsTo(models.Role, { foreignKey: "role_id" });
     
        //Get Client Name 
        this.belongsTo(models.Users, { foreignKey: "user_id" });
    }
}

UserRole.prototype.toJSON = function () {
    const user = this.get();
    if(user.profile_pic !== null)
    {
        user.profile_pic = Image_URL + "/public/images/user/" + user.profile_pic;
    }
  
    return user;
};

export { UserRole }