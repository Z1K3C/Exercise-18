//Genero las vistas para mi aplicacion
//todo el codigo de esta carpeta se debe convertir a bundle.js
//Con webpack como empaquetdor remember: npx webpack (teniendo bien configurado el webpack.config.js)
//y usando a babel como traspilador para convertir de JSX a JS (tenieno bien configurado a .babelrc)
import React, { Component } from 'react';                   //Solicito a REACT desde node modules
import ReactDOM from 'react-dom';                           //Solicito a REACT-DOM para trabajar con el DOM virtual
import 'bootstrap/dist/css/bootstrap.css';                  //Solicito a bootstrap como libreria de CSS
import './app.css';                                         //Solicito mi plantilla personalizada de CSS
import { Container, Row, Col } from 'reactstrap';           //Solicito Reactstrap
import Head from './z_Head.jsx';                            //Solicito al Fragmento de codigo Head
import Left from './z_Left.jsx';                            //Solicito al Fragmento de codigo Left
import Section_11 from './z_Section11.jsx';                 //Solicito al Fragmento de codigo Section 11
import Section_12 from './z_Section12.jsx';                 //Solicito al Fragmento de codigo Section 12
import Section_21 from './z_Section21.jsx';                 //Solicito al Fragmento de codigo Section 21
import Section_31 from './z_Section31.jsx';                 //Solicito al Fragmento de codigo Section 31

                                                            //Inicializo variables
var Colvar;                                                 
var Pagesel=1;                                              
var Htmlvar;
var Htmlvar2 = <div><Section_11/><Section_12/></div>;

class App extends Component {                                 //Genero la clase App
  constructor(props) {                                        //Genero el constructor de clase
    super(props);                                             //Solicito Super
    this.FuncionA_FrAPP = this.FuncionA_FrAPP.bind(this);     
    this.FuncionB_FrAPP = this.FuncionB_FrAPP.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {                                            //Inciializo propieades
      Colprop: Colvar,
      Htmlprop: Htmlvar,
      width: window.innerWidth,
      Htmlprop2: Htmlvar2
    };
  }
  componentDidMount() {                                       //Previo a montar la aplicacion...
    window.addEventListener("resize", this.updateDimensions); //Mando llamar a update
    this.updateDimensions();

  }
  componentWillUnmount() {                                    //Despues de generar la aplicacion...
    window.removeEventListener("resize", this.updateDimensions);
  }                                                           //Retiro a la funcion update


  updateDimensions() {                              
    if(window.innerWidth<1000){                               //Inicializo la funcion Updatedimension
      Htmlvar = "";                                           //Si la pantalla es menor a 1000 px
      Colvar = 12;                                            //Oculta la barra
    }
    else{
      Htmlvar = <Col lg="2" className="px-0"><Left FuncionB_FrAPP={this.FuncionB_FrAPP} PropB_FrAPP={Colvar}/></Col>;
      Colvar = 10;                                            //Si la pantalla es mayor a 1000px
    }                                                         //Muestra la barra
    this.setState({
      Colprop: Colvar,                                        //Envia los datos mediante propiedades
      Htmlprop: Htmlvar,
      width: window.innerWidth
    });
  }
  FuncionA_FrAPP(e){                                          //Inicializo la funcion A
    if(e){                                                    //La mando llamar desde otra aplicacion para compartir informacion
      Htmlvar = <Col lg="2" className="px-0"><Left FuncionB_FrAPP={this.FuncionB_FrAPP} PropB_FrAPP={Colvar}/></Col>; 
      Colvar = 10;                                            //Si el usuario pulsa el boton de la esquina
    }else{                                                    //Oculta/Mestra la barra
      Htmlvar = "";
      Colvar = 12;
    }  
    this.setState({                                           //Envia los datos mediante propiedades
      Colprop: Colvar,
      Htmlprop: Htmlvar
    });
  }
  FuncionB_FrAPP(e){                                          //Inicializo la funcion B
    if(e != Pagesel){                                         //La mando llamar desde otra aplicacion para compartir informacion
      Pagesel=e;                                              //Pregunto por el valor ingresado desde Left
      switch(Pagesel){                                        //Si el valor es el mismo sale del if
        case 2:                                               //Mediante un switch pregunto por el boton presionado
          Htmlvar2 = <div><Section_21/></div>;                //Cargo la aplicacion correspondiente
        break;
        case 3:
          Htmlvar2 = <div><Section_31/></div>;
        break;
        default:
          Htmlvar2 = <div><Section_11/><Section_12/></div>;
      }
    }
    this.setState({
      Htmlprop2: Htmlvar2                                   //La envio mediante propiedad
    });
  };


  render() {                                                //Inicializo el metodo render
    return (
      <div id="App" className="">                          
        <Container fluid={true} className="px-0">   
          <Row className="mx-0">
            {this.state.Htmlprop}                           {/*Mediante la propiedad retiro/inserto codigo JSX  /*/}
            
            <Col lg={this.state.Colprop} id="COL_2" className="px-0">         
              <Head FuncionA_FrAPP={this.FuncionA_FrAPP} PropA_FrAPP={Pagesel}/>      
                                                            {/* Envio la funcion y la propiedad a Head */}
              {this.state.Htmlprop2}                        {/*Mediante la propiedad retiro/inserto codigo JSX */}
      
            </Col>
          </Row>
        </Container>
      </div>
    );
    
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));    //Lanzo a la etiqueta App en la id "app" del HTML
