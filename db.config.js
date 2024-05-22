const Sequelize = require('sequelize')

//creation de la base de donnee

let DBConnection = new Sequelize(
    process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:'mysql',
        logging:false
    }
)
//synchronisation des donnees

DBConnection.sync(err=>{
    console.log("database snchronization error ")
})

module.exports = DBConnection