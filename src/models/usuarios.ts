import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const UserModel = sequelize.define('gestor_usuario',{
    idusuario:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    comitente:{
        type: DataTypes.INTEGER,
    },

    loginacceso:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    cedula:{
        type: DataTypes.STRING,
    },
   
})