const qry = {
    
    qry: () =>{
        let mysql = require('mysql');
        let pool = mysql.createPool({
            host    : "database-1.cd0y6cznt0fl.us-east-1.rds.amazonaws.com",
            user    : "admin",
            password: "adminaws",
            database: "database-1"
        });
        
        var results;
      
        return exports.handler_2 = async function( event, context, callback ){
          context.callbackWaitsForEmptyEventLoop = false;
          let respuesta = ( await pool.query( "SELECT ct_descripcion FROM tramites_bd.cat_tramites WHERE id_tramite = 1", (err, rows) => {
            if (err) throw err;
              results = rows;
              return results;
            }) );
            return respuesta;
        }

    }
}

module.exports = qry;