import React, { Component } from 'react';               //Solicito al metodo componente de React
import Plot from 'react-plotly.js';                     //Solicito al metodo Plotly-React
import { Card } from 'reactstrap';                      //Solicito un Card desde Reacstrap
import Gconfig from '../src/t_graph_config1.js';        //Solicito la configuracion de las graficas
import Myquerys from '../src/class.js';                 //Solicito a class.js donde para usar sus metodos
var querys = new Myquerys();                            //Instancio Myquerys para realizar consultas a la DB
var loop;                                               //Inicializo las variables
var beforedata = [];
var afterdata = [];
var beforelayout = [];
var afterlayout = [];
var l=0;

for(var i=0; i<Gconfig.length;i++){                     //Inicializo a beforedata y a beforelayout...
  beforedata[i] = Gconfig[i][0];                        //Con los datos de las configuracion de las graficas
  beforelayout[i] = Gconfig[i][1];
}

function MyGraphArray(arg) {                            //Inicializo al componente MyGraph 
  var data = arg.propdata;                              //Almaceno las propiedades que tiene el componente
  var layout = arg.proplayout;
  var i=0;                                              //Genero un map y este ejcuta una funcion por cada elemento del arreglo Gconfig
  var html1 = Gconfig.map((info) =>
      <Card key={i} className="m-2" style={{height:"200px",backgroundColor:"rgb(60,80,100)"}}>
        <Plot key={i}
          data={[data[i]]} layout={layout[i++]} config={info[2]} 
        />
      </Card>
  );
  return (                                              //Retorno un fragmento de codigo JSX
    <div>{html1}</div>
  );
}

class Section12 extends Component {                     //Inicializo al componente/clase
  constructor(props) {                                  //Inicializo al constructor de clase
    super(props);                                       //Declaramos super para adaptar las propiedades en React
    this.state = {                                      //Inicializo estados
      propsdata: beforedata,
      propslayout: beforelayout
    };
  }

  componentDidMount() {                                 //Metodo de REACT encargado de mandar llamar una funcion antes de montar el componente
    this.timerID = setInterval(()=>this.refesh(),500);  //Se ejecuta una funcion cada medio segundo
  }

  componentWillUnmount() {                              //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);  
  }

  refesh() {
    afterdata = beforedata;                             //Igualo los datos after desde before
    afterlayout = beforelayout;                         
    
    querys.getGRAPH_data().then(function(resp){         //Ejecuto la consulta a la DB y este lo regresa mediante la promesa
      loop = resp['rowsAffected'][0];                   //Pregunto por la cantidad de datos
      for(var j=0;j<loop;j++){                          //Almaceno los datos en la seccion array Y de cada before data
        beforedata[0]['y'][j] = resp['recordset'][j]['MOTOR_1'];
        beforedata[1]['y'][j] = resp['recordset'][j]['MOTOR_4'];
        beforedata[2]['y'][j] = resp['recordset'][j]['MOTOR_3'];
        beforedata[3]['y'][j] = resp['recordset'][j]['MOTOR_2'];
      } 
    });                                                 //PAra actualizar de una manera eficiente los datos de after los incializo pro separado
    for(var k=0;k<4;k++){                               //Este FOR es por cada grafica a utilizar
      afterdata[k] = { x:[] ,y: beforedata[k]['y'],type: beforedata[k]["type"] ,mode: beforedata[k]["mode"] ,line: beforedata[k]["line"]};
      
      afterlayout[k]['shapes'][0]['x1'] = loop;         //Extiendo el limite de color amarillo al ultimo dato del arreglo de datos
      afterlayout[k]['shapes'][1]['x1'] = loop;         //Extiendo el limite de color rojo al ultimo dato del arreglo de datos
      afterlayout[k]['xaxis']['dtick'] = ((35*loop)/window.innerWidth).toFixed(0);
      afterlayout[k]['height'] = 195;
    }                                                   //Modifico la separacion del eje X dependiendo de la cantidad de datos y del tamano del dispositivo
    for(var k=0;k<loop;k++){                            //Este FOR es para los datos encontrados en X
      afterdata[0]["x"][k] = k+1 ;
      afterdata[1]["x"][k] = k+1 ;
      afterdata[2]["x"][k] = k+1 ;
      afterdata[3]["x"][k] = k+1 ;
    }
    for(var k=0;k<10;k++){
      afterlayout[k]['height'] = 195;
    }

    this.setState({                                     //Envio los datos mediante estados
      propsdata: afterdata,
      propslayout: afterlayout
    });
    
  }


  render() {
    if(360<window.innerWidth){                        //Si la pantalla es de escritorio genera un tamano de 18
      Gconfig[1][1]['font']['size'] = 18;
    }else{                                            //Si la pantalla es de movil genera un tamano de 18
      Gconfig[1][1]['font']['size'] = 10;
    }

    return (
      <div >
        <Card className="m-1" style={{height:"500px",overflowX:"hidden",overflowY:"scroll",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                                                    {/*Mando llamar al componente personalizado el cual imprimira N Graficas */}
           <MyGraphArray propdata={this.state.propsdata} proplayout={this.state.propslayout}/>
            
          </div>
        </Card>
      </div>
    );
  }
}

export default Section12;                   //Exporto el componente