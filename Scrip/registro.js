function validar (formulario){
    var errorname = document.getElementById('errorName');
    var errorape = document.getElementById('errorApe');
    var errortel = docuemnt.getElementById('errorTel');
    var erroremai = document.getElementById('errorEmail');
    var errorcontra = document.getElementById('errorContraseña');
    var errorconfi = docuemnt.getElementById('errorConfi');
    var emailreg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( formulario.nombres.value.tirm().length == 0){
        errorname.innnerHTML = "Espacio requerido";
        return false;
    }
    if ( formulario.apellidos.value.trim().length == 0){
        errorape.innerHTML = "Espacio requerido";
        return false;
    }
    if ( formulario.telefono.value.trim().length == 0){
        errortel.innerHTML = "Espacio requerido"
        return false;
    }
    if ( !emailreg.test(formulario.email.value)){
        erroremai.innerHTML = "Esto no es un email valido";
        return false;
    }
    if (formulario.contraseña.value.trim().value == 0){
        errorcontra.innerHTML = "Espacio requerido";
        return false;
    }

    return true;
}