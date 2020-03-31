import React, { Component } from 'react';                //Mando a llamar el metodo Component de React
import { Container, Row, Col, Card } from 'reactstrap';  //Mando a llamar objectos de Reactstrap
import Myquerys from '../src/class.js';                  //Mando a llamar a class.js para poder usar sus metodos
var querys = new Myquerys();                             //Instancio a Myquerys
var mytemps = [0,0,0]                                    //Inicializo variables
var myfontsize= "30px"

class Section11 extends Component {                       //Inicializo el componente/clase
  constructor(props) {                                    //Inicializo el constructor de clase
    super(props);                                         //Declaramos super para adaptar las propiedades en React
    this.state = {};                                      //NO BORRAR Para futuras inicializaciones de estado
  }

  componentDidMount() {                                   //Metodo de REACT encargada de mandar llamar una funcion antes de montar el componente de REACT
    this.timerID = setInterval(()=>this.refesh(),2000);   //Ejecuto la funcion refresh cada 2 segundos
  }

  componentWillUnmount() {                                //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);  
  }

  refesh() {                                              //Declaro a la funcion refresh
    querys.getALL().then(function(resp){                  //Ejecuto la fucnion getALL y utilizo su metodo de promesa           
      for(var i=0; i<3; i++){                             //Usando un For almaceno el estado de las variables
        mytemps[i] = resp[0][i]["TEMPERATURE"].toFixed(1)
        if((mytemps[i]<100)&&(mytemps[i]>0)){             //Si la variable esta dentro de los 100 grados muestra el dato
          mytemps[i] = resp[0][i]["TEMPERATURE"].toFixed(1); 
        }else{
          mytemps[i] = 0;
        }                      
      }
      
    });
    this.setState({});                                    //NO BORRAR Para futuras asignaciones de estado
  }

  render() {
    if(460<window.innerWidth){                            //Si se esta usando una PC asigna 42px al titulo
      myfontsize = "42px";
    }else{
      myfontsize = "30px";                                //Si se esta usando un movil asigna 30px al titulo
    }
    
    return (
      <div className="mx-1">
        <Card style={{opacity:"0.8",minHeight:"175px", backgroundImage:"url(./IMG_1.jpg)",backgroundPosition: "30% 20%"}}>
          <Card className="text-white" style={{backgroundColor:"rgba(0,0,0,0.8)",minHeight:"100px"}}>
            <Container fluid={true} className="px-1">
              <Row className="align-items-center mx-0" style={{minHeight:"100px"}}>
                <Col md="7" className="px-1">

                    <p className="text-left mb-0"  style={{fontFamily:"ZCOOL QingKe HuangYou",fontSize:myfontsize}}>Real Time Monitoring System </p>
                    <p className="text-left mb-0"  style={{fontFamily:'Germania One',fontSize:"26px"}}> Welcome</p>
                  
                </Col>
                <Col md="5" className="px-1">
                  <Row className="justify-content-center mx-0">

                    <Col xs="4" className="text-center px-1">
                                                        {/*El dato consultado de la base de datos se imprime en pantalla */}
                      <p className="mb-0"  style={{fontFamily:"ZCOOL QingKe HuangYou",fontSize:"20px"}}>Machine 1</p>
                      <p className="mb-0"  style={{fontFamily:'Orbitron',fontSize:"21px"}}>{mytemps[0]+" °C"}</p>
                
                    </Col>
                    <Col xs="4" className="text-center px-1">
                      
                      <p className="mb-0"  style={{fontFamily:"ZCOOL QingKe HuangYou",fontSize:"20px"}}>Machine 2</p>
                      <p className="mb-0"  style={{fontFamily:'Orbitron',fontSize:"21px"}}>{mytemps[1]+" °C"}</p>

                    </Col>
                    <Col xs="4" className="text-center px-1">
                      
                      <p className="mb-0"  style={{fontFamily:"ZCOOL QingKe HuangYou",fontSize:"20px"}}>Machine 3</p>
                      <p className="mb-0"  style={{fontFamily:'Orbitron',fontSize:"21px"}}>{mytemps[2]+" °C"}</p>

                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>           
          </Card>
        </Card>
      </div>
    );
  }
}

export default Section11;                   //Exporto el componente