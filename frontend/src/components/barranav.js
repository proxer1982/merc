import React, { Component } from "react"
import Inicio from "./inicio"
import Login from "./login"
import Registar from "./registrar"

class BarraNav extends Component {
    constructor(){
        super()
        this.state = {
            estado:"https://www.mammal.org.uk/wp-content/uploads/2019/02/Red-fox-Katie-Nethercoat.jpg"
        }
    }

    render(){
        let iniciar = () => {
            this.setState({estado:<Inicio></Inicio>})
        }

        let loguear = () => {
            this.setState({estado:<Login />})
        }

        let registrar = () => {
            this.setState({estado:<Registar />})
        }

        let contactar = () => {
            this.setState({estado:"https://www.mammal.org.uk/wp-content/uploads/2019/02/Red-fox-Katie-Nethercoat.jpg"})
        }

        return(
            <div>
                <div className="barra">
                    <button className="botonBarra" onClick={iniciar}>Inicio</button>
                    <button className="botonBarra" onClick={loguear}>Login</button>
                    <button className="botonBarra" onClick={registrar}>Registro</button>
                    <button className="botonBarra" onClick={contactar}>Contacto</button>
                </div>
                {this.state.estado}
            </div>
        )
    }
}

export default BarraNav