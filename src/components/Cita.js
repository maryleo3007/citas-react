import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

    eliminarCita = () =>{
        console.log(this.props.info.id);
        this.props.borrarCita(this.props.info.id);
    }
    
    render() {
        
        const {date, duenio, mascota,sintomas, time} = this.props.info;
        
        return (
            <div className="media mt-5">
                <div className="media-body">
                    <h3>{mascota}</h3>
                    <p><span>Nombre dueño: </span> {duenio}</p>
                    <p><span>Fecha: </span> {date} </p>
                    <p><span>Hora: </span> {time} </p>
                    <p><span>Síntomas: </span> </p>
                    <p> {sintomas} </p>
                    <button onClick={this.eliminarCita} className="alert alert-danger">Borrar &times;</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    borrarCita : PropTypes.func.isRequired,
    info : PropTypes.shape({
        date:  PropTypes.string.isRequired,
        duenio: PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    })
}

export default Cita;