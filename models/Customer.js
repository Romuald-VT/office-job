const {Sequelize ,DataTypes}= require('sequelize')

const sequelize = new Sequelize()
const Customer = sequelize.define('Customer',{

    id:{
        type:DataTypes.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue:'',
        allowNull:false
    },
    prenom:{
        type:DataTypes.STRING(100),
        defaultValue:'',
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING(64),
        is:/^[0-9a-f](64)$/i
    },
    phoneNumber:{
        type:DataTypes.STRING(25),
        is:/^[0-9](25)/
    }

},{paranoid:true})

module.exports= Customer