import React,{Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCita extends Component {

    render() {
        const citas = this.props.citas;
        const mensaje = (Object.keys(citas).length === 0) ? 'No hay citas' : 'Agregue sus citas aquí';
        
        return (

            <div className="card">
                <div className="card-header">
                    Lista Cita
                </div>
                <div className="card-body">
                    <p className="text-center">{mensaje}</p>
                    <div className="lista-cita">
                        {Object.keys(citas).map( cita =>(
                            <Cita 
                                key = {cita}
                                info = {citas[cita]}
                                borrarCita = {this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div> 
        );
    }
}

ListaCita.propTypes = {
    borrarCita: PropTypes.func.isRequired,
    citas: PropTypes.array.isRequired
}

export default ListaCita;