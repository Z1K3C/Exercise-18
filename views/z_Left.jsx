import React, { Component } from 'react';                     //Mando llamar al metodo componente de react
import { Row, Col, Button,ListGroup, ListGroupItem,Card, CardTitle, CardText } from 'reactstrap';   //Mando a llamar componentes de Reacstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   //Mando llamar al componte de Fontawesome
import { faHome, faChartLine, faClipboard, faCogs, faClone, faColumns, faPager, faServer} from '@fortawesome/free-solid-svg-icons'; //Mando a llamar compontes de Fontawesome
var backcolorvar = [];                                        //Inicializo variables
var textcolorvar = [];
var radio = 1;

class Left extends Component {                                //Inicializo la clase/componente
  constructor(props) {                                        //Inicializo el constructor de clase
    super(props);                                             //Inicializo a super
    this.Ref1 = React.createRef();
    this.Ref2 = React.createRef();
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {                                            //Inicializo las propiedades
      rSelected: 1,
    };
  }

  onRadioBtnClick(rSelected) {                                //Genero la funcion onRadio
    this.setState({                                           //El valor capturado por el boton es enviado a estado
      rSelected: rSelected,
    });
    radio = rSelected;                                        //El valor capturado por el boton es enviado a radio
    this.props.FuncionB_FrAPP(rSelected);                     //Ejecuto la funcion B que se encuentra en App
  };

  render() {                                                  //Inicializo el metodo Render

    for(var i=1;i<=6;i++){                                    //Pregunto por los 6 botones
      if(radio != i){                                         //Si no es el boton pulsado pinta de color normal...
        backcolorvar[i] = "rgb(40,60,80)";                    //los demas botones
        textcolorvar[i] = "rgb(255,255,255)";
      }else{                                                  //El boton pulsado...
        backcolorvar[i] = "rgb(20,190,150)";                  //Cambia de color
        textcolorvar[i] = "rgb(40,60,80)";
      }
    };

    return (                                                  //Retorno el codigo de la vista del componente
      <div>
        
        <ListGroup className="pb-2">        
        
          <ListGroupItem className="pt-3 px-0" style={{backgroundColor:"transparent"}}>
          
            <Row className="mx-0 align-items-center">
              <Col lg="12" xs="4" className="px-2 text-center">
                <img src="./IMG_2.png" height="100px" alt=""/>
              </Col>
              <Col lg="12" xs="8" className="px-2 py-2">
                <Card body className="p-1 text-center" style={{backgroundColor:"rgb(60,80,100)"}}>
                  <CardTitle className ="text-white" style={{fontFamily:"Baloo Chettan",fontSize:"26px"}}>Ing. John Dust</CardTitle>
                  <CardText className="text-white" style={{fontFamily:"Germania One", fontSize:"22px"}}>Administrator</CardText>
                </Card>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
            <Row className="mx-0">
              <Col lg="12" xs="6" className="px-0">         {/*Al pulsar el boton ejecuta la funcion RadioBtn  */}
                <Button ref={this.Ref1} color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[1] ,borderColor:'rgb(20,190,150)'}}
                        onClick={() => this.onRadioBtnClick(1)}
                        active={this.state.rSelected === 1}
                        >                                   {/*Si el boton es pulsado regresa la propiedad en true iluminano el boton */}                                     
                  <FontAwesomeIcon icon={faHome}style={{fontSize:"20px",color:textcolorvar[1]}}/>
                  <span className="px-1" style={{color:textcolorvar[1], fontFamily:"Orbitron", fontSize:"13px"}}> HOME</span>

                </Button>
              </Col>
              <Col lg="12" xs="6" className="px-0">
                <Button ref={this.Ref2}
                        color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[2],borderColor:'rgb(20,190,150)'}}
                        onClick={() => this.onRadioBtnClick(2)}
                        active={this.state.rSelected === 2}
                        >
                  <FontAwesomeIcon icon={faChartLine} style={{fontSize:"20px",color:textcolorvar[2]}}/>
                  <span className="px-1" style={{color:textcolorvar[2], fontFamily:"Orbitron", fontSize:"13px"}}> GRAPHS</span>
                  
                </Button>                  
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
            <Row className="mx-0">
              <Col lg="12" xs="6" className="px-0">
                <Button color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[3],borderColor:"rgb(20,190,150)"}}
                        onClick={() => this.onRadioBtnClick(3)}
                        active={this.state.rSelected === 3}
                        >
                  <FontAwesomeIcon icon={faClipboard} className="" style={{fontSize:"20px",color:textcolorvar[3]}}/>
                  <span className="px-2" style={{color:textcolorvar[3], fontFamily:"Orbitron", fontSize:"13px"}}> HISTORY</span>
                </Button>
              </Col>
              <Col lg="12" xs="6" className="px-0">
                <Button color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[4],borderColor:"rgb(20,190,150)"}}
                        onClick={() => this.onRadioBtnClick(4)}
                        active={this.state.rSelected === 4}
                        >
                  <FontAwesomeIcon icon={faCogs} className="" style={{fontSize:"20px",color:textcolorvar[4]}}/>
                  <span className="px-0" style={{color:textcolorvar[4], fontFamily:"Orbitron", fontSize:"13px"}}> CONFIGURATION</span>
                </Button>                  
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
            <Row className="mx-0">
              <Col lg="12" xs="6" className="px-0">
                <Button color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[5],borderColor:"rgb(20,190,150)"}}
                        onClick={() => this.onRadioBtnClick(5)}
                        active={this.state.rSelected === 5}
                        >
                  <FontAwesomeIcon icon={faClone} className="" style={{fontSize:"20px",color:textcolorvar[5]}}/>
                  <span className="px-2" style={{color:textcolorvar[5], fontFamily:"Orbitron", fontSize:"13px"}}> OTHER</span>
                </Button>
              </Col>
              <Col lg="12" xs="6" className="px-0">
                <Button color="success" 
                        className="w-100 text-left" 
                        style={{backgroundColor:backcolorvar[6],borderColor:"rgb(20,190,150)"}}
                        onClick={() => this.onRadioBtnClick(6)}
                        active={this.state.rSelected === 6}
                        >
                  <FontAwesomeIcon icon={faColumns} className="" style={{fontSize:"20px",color:textcolorvar[6]}}/>
                  <span className="px-2" style={{color:textcolorvar[6], fontFamily:"Orbitron", fontSize:"13px"}}> ABOUT</span>
                </Button>                  
              </Col>
            </Row>
          </ListGroupItem>

        </ListGroup>

        
        <br></br>
        <Card className="m-1" style={{backgroundColor:"rgb(60,80,100)", borderColor:"rgb(20,190,150)"}}>
          <Row className="mx-0 ">

            <Col xs="6" className="pr-0 py-1">
              <span className="" style={{color:"rgb(255,255,255)", fontFamily:"ZCOOL QingKe HuangYou", fontSize:"18px"}}>
                PLC Status : 
              </span>
            </Col>
            <Col xs="6" className="pl-0 d-flex align-items-center py-1">
              <FontAwesomeIcon icon={faPager}style={{fontSize:"26px",color:"rgb(20,190,150)"}}/>
              <span className="mx-2 " style={{color:"rgb(255,255,255)", fontFamily:"Orbitron", fontSize:"16px"}}>
                 {" Run"}
              </span>
            </Col>

            <Col xs="6" className="pr-0 py-1">
              <span className="" style={{color:"rgb(255,255,255)", fontFamily:"ZCOOL QingKe HuangYou", fontSize:"18px"}}>
                Server Status : 
              </span>
            </Col>
            <Col xs="6" className="pl-0 d-flex align-items-center py-1">
              <FontAwesomeIcon icon={faServer}style={{fontSize:"25px",color:"rgb(20,190,150)"}}/>
              <span className="mx-2" style={{color:"rgb(255,255,255)", fontFamily:"Orbitron", fontSize:"16px"}}>
                 {" Online"}
              </span>
            </Col>

          </Row>
        </Card>

      </div>
    );
  }
}

export default Left;                        //Exporto el componente