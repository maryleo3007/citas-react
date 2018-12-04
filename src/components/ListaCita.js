import React,{Component} from 'react';

class ListaCita extends Component {

    render() {
        const citas = this.props.citas;
        console.log(Object.keys(citas));

        return (
            <div className="card">
                <div className="card-header">
                    Lista Cita
                </div>
                <div className="card-body">
                   citas
                </div>
            </div> 
        );
    }
}

export default ListaCita;