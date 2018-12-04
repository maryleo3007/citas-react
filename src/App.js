import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'
import ListaCita from './components/ListaCita';

class App extends Component {

  state = {
    citas : []
  }

  crearCita = (nuevaCita) => {
    
    const citas = [...this.state.citas, nuevaCita];

    this.setState({citas})
    
  }

  render() {
    return (
      <div className="container">
          <Header 
            titulo = "Agregar cita"
          />
          <div className="row">
          <div className="col-md-6 mt-5">
              <AgregarCita 
                crearCita = {this.crearCita}
              />
          </div>
          <div className="col-md-6 mt-5">
              <ListaCita
                citas = {this.state.citas}
              />
          </div>
          </div>
      </div>
    );
  }
}

export default App;
