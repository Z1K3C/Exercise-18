//Configuro las rutas hacia mi servidor

const express = require('express');               //Solicito a Express
const router = express.Router();                  //Solicito solo el metodo Routes de Express
const DBconnection = require('./database.js');    //Instancio a database.js para usar sus metodos

//SELECT ALL DATA
router.get('/ALL',function(req1,res1){               //Mediante el metodo GET realizo una consulta
  DBconnection.query("SELECT * FROM [EXAMPLE].[dbo].[MAIN_R]",   //Genero el query...
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2){                                     //Si hay un error lo imprime en pantalla
      console.log(err2);
      throw err2;
    }
    else{                                         //Si no hay error...
      //console.log("Todos los datos");             //Imprime en consola todos los datos
      res1.status('200').json(res2.recordsets);              //Imprimo en el explorador todos los datos
    }
  });
});

router.get('/GRAPH',function(req1,res1){
  DBconnection.query("SELECT TOP 475 [DATE_],[MOTOR_1],[MOTOR_2],[MOTOR_3],[MOTOR_4] FROM [EXAMPLE].[dbo].[GRAPH_R] ORDER BY [DATE_] DESC",   //Genero el query...
  function(err2,res2){                            //y despues ejecuto una funcion
    if(err2){                                     //Si hay un error lo imprime en pantalla
      console.log(err2);
      throw err2;
    }
    else{                                         //Si no hay error...
      //console.log("Todos los datos");             //Imprime en consola todos los datos
      res1.status('200').json(res2);              //Imprimo en el explorador todos los datos
    }
  });
});

module.exports = router;                          //Exporto las rutas, sus metodos y funciones