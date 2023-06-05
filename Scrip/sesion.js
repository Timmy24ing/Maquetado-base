function validar(formulario){
 var Emailerror = document.getElementById(`errorEmail`);
 var errorPasword = documen.getElementById('errorContraseña');
 var confiEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(formulario.email.value.trim().length == 0){
    Emailerror.innerHTML("Ingrese un correo")
    return false;
 }else{
    if (!confiEmail.test(formulario.email.value)){
        Emailerror.innerHTML("Esto no es un correo")
        return false;
    }
 }
 if(formulario.contraseña.value.trim().length == 0 ){
    errorPasword.innerHTML("Debe ingresar una contraseña")
    return false;
 }
 return true;
}