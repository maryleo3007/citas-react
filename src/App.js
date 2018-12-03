import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'

class App extends Component {

  render() {
    crearCita () => {
      
    }
    return (
      <div className="container">
            <Header 
              titulo = "Agregar cita"
            />
        <div className="col-md-6 mt-5">
        <AgregarCita />
        </div>
      </div>
    );
  }
}

export default App;
