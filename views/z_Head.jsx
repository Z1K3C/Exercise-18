import React, { Component } from 'react';                           //Mando llamar a React para generar un componente
import { Button } from 'reactstrap';                                //Mando llamar al boton de la biblioteca de Reacstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   //Mando llamar al icono de la biblioteca de Fontawesome
import { faBars } from '@fortawesome/free-solid-svg-icons';         //Solicito el icono faBars
var togglevar;                                                      //Incializo variables
var unstring;

class Head extends Component {                                      //Inicializo al componte/clase
  constructor(props) {                                              //Inicializo al constructor
    super(props);                                                   //Mando llamar a la funcion super
    this.funcion1 = this.funcion1.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {                                                  //Inicializo estados
      toggleprop: false
    };
  }
  componentDidMount() {                                             //Antes de montar el componente ejecuta la funcion update
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {                                          //Despues de montar la aplicacion retiro la funcion update
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {                                              //Inicializo la funcion Update
    if(window.innerWidth<1000){                                     //Si la pantalla es de mobil
      togglevar = true;                                             //Oculta la barra lateral
    }else{
      togglevar = false;                                            //Si no es de movil
    }                                                               //Muestra la barra lateral
    this.setState({
      toggleprop: togglevar                                         //Manda el dato como propiedad
    });    
  }

  funcion1() {                                                      //Inicializo la funcion 1
    this.setState({                                                 //Genero un toogle para la propiedad
      toggleprop: !this.state.toggleprop
    });
    this.props.FuncionA_FrAPP(this.state.toggleprop);               //Ejecuto la funcion A colocada en App
  }

  render() {
    switch(this.props.PropA_FrAPP){                                 //Dependiendo del boton pulsado en Left
      case 2:                                                       //Cambio el texto del encabezado
        unstring = "Graphs";
      break;
      case 3:
        unstring = "Fault History";
      break;
      default:
        unstring = "Main Menu";
    }
    return (                                                        //En el Return del metodo render genero la vista del componente
      <div >  
        <nav className="navbar">                                    {/* Si pulsa el boton ejecuta la funcion 1 */}
          <Button className="navbar-brand nav-item" onClick={this.funcion1}><FontAwesomeIcon icon={faBars} /></Button>    
          <span className="nav-item mr-auto text-white" style={{fontFamily:'Germania One',fontSize:"28px"}}>{unstring}</span>
        </nav>                                                      {/* Genero la etiqueta del encabezado */}
      </div>
    );
  }
}

export default Head;                                                //Exporto el componente