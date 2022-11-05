import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

function Login () {
    return(
        <div class="contanier-fluid h-100 mt-5">
            <div class="row h-100 d-flex justify-content-center align-items-center">
                <div class="col-md-4 caja-login p-4">
                    <div class="row mb-5 mt-5">
                        <div class="col text-center"><h1>Login</h1></div>
                    </div>
                    <div class="row mb-5 mt-5">
                        <div class="col-4"><label>Email</label></div>
                        <div class="col"><input class="form-control" type="email" /></div>
                    </div>
                    <div class="row">
                        <div class="col-4"><label>Contraseña</label></div>
                        <div class="col"><input class="form-control" type="password" /></div>
                    </div>
                    <div class="row mt-5">
                        <div class="col text-center"><button type="button" class="btn btn-success">Entrar</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login