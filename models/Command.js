const {Sequelize ,DataTypes}= require('sequelize')

let sequelize  =  new Sequelize()

const Command = sequelize.define('Command',{
    id:{
        type:DataTypes.INTEGER(11),
        autoIncrement:true,
        primaryKey:true
    },
    nomCommande:{
        type:DataTypes.STRING(100),
        defaultValue:"",
        allowNull:true
    },
    images:{
        type:DataTypes.STRING(200),
        defaultValue:"",
        allowNull:false
    },
    
    
})

module.export = Command