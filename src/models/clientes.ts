import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const ClienteModel = sequelize.define('clientes',{
    codigo:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    cedula:{
        type: DataTypes.STRING,
    },
    comitente:{
        type: DataTypes.INTEGER,
    },
    asesor:{
        type: DataTypes.INTEGER,
    },
})