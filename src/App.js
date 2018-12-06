import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'
import ListaCita from './components/ListaCita';

class App extends Component {

  state = {
    citas : []
  }

  componentDidMount() {
    const citasList = localStorage.getItem('citas');
    if(citasList){
      this.setState({
        citas : JSON.parse(citasList)
      })
    }
  }

  componentDidUpdate() {
     localStorage.setItem('citas',JSON.stringify(this.state.citas))
  }

 
  crearCita = (nuevaCita) => {
    
    const citas = [...this.state.citas, nuevaCita];

    this.setState({citas})
    
  }

  borrarCita = (id) => {
    const citasClone = [...this.state.citas];

    const citas = citasClone.filter((cita)=> cita.id !== id)

    this.setState({
      citas
    })
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
                borrarCita = {this.borrarCita}
              />
          </div>
          </div>
      </div>
    );
  }
}

export default App;
