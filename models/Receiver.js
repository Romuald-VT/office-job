const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize()

const Receiver = sequelize.define('Receiver',{
    id:{
        type:DataTypes.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue:"",
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(64),
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING(50),
        is:/^[0-9a-f](64)$/i
    },
    phoneNumber:{
        type:DataTypes.STRING(25),
        is:/^[0-9]/
    }
})

module.exports=Receiver