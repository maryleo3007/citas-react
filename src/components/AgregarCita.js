import React,{Component} from 'react';
import uuid from 'uuid';
import Proptypes from 'prop-types';

class AgregarCita extends Component {

    state = {
        error: true
    }

    nombrePetRef = React.createRef();
    nombreDuenioRef = React.createRef();
    fechaCitaRef = React.createRef();
    timeCitaRef = React.createRef();
    sintomasCitaRef = React.createRef();

    crearNuevaCita = (e) => {
        e.preventDefault();
        const mascota = this.nombrePetRef.current.value,
        duenio = this.nombreDuenioRef.current.value,
        date = this.fechaCitaRef.current.value,
        time = this.timeCitaRef.current.value,
        sintomas = this.sintomasCitaRef.current.value;

       
        if (mascota === '' || duenio === '' || date === ''  || sintomas === '') {
            this.setState({error:false})
        }else{
            const cita = {
                id: uuid(),
                mascota,
                duenio,
                date,
                time,
                sintomas
            }
    
            this.props.crearCita(cita);
            e.currentTarget.reset();
            this.setState({error:true})
        }

    }

    render() {
        const existeError = this.state.error;

        return (
            <div className="card">
                <div className="card-header">
                    AS
                </div>
                <div className="card-body">
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref = {this.nombrePetRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref = {this.nombreDuenioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref ={this.fechaCitaRef } type="date" className="form-control" />
                            </div>                            
                
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref = {this.timeCitaRef} type="time" className="form-control" />
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref = {this.sintomasCitaRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {existeError ? 'si' : <div className="alert alert-danger">Hay campos obligatorios</div>}
                    
                </div>
            </div> 

        );
    }
}

AgregarCita.propTypes = {
    crearCita : Proptypes.func.isRequired

}

export default AgregarCita;