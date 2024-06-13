(function () {
    const formLogin = document.querySelector(".form-login");
    const inputEmail = document.querySelector(".form-login input[type='email']");
    const inputPass = document.querySelector(".form-login input[type='password']");
    const alertaError = document.querySelector(".form-login .alerta-error")
    const alertaExito = document.querySelector(".form-login .alerta-exito")
    
    
    const emailRegex= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{4,12}/;
    
    const estadoValidacionCampos = {
        userEmail: false,
        userPassword: false,
    };
    
    document.addEventListener("DOMContentLoaded", ()=>{
        formLogin.addEventListener("submit", e => {
            e.preventDefault();
            enviarFormulario()
        });
    inputEmail.addEventListener ("input", () => {
        validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, numeros, puntos y guion bajo.")
    })
    inputPass.addEventListener ("input", () => {
        validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 digitos.")
    })
    
    
    })
    
    function validarCampo(regularExpresion, campo, mensaje){
        const validarCampo = regularExpresion.test(campo.value);
        if (validarCampo)
            {
                console.log("campo correcto")
                eliminarAlerta(campo.parentElement.parentElement)
                estadoValidacionCampos[campo .name] = true;
                campo.parentElement.classList.remove("error");
                return;
            }
                estadoValidacionCampos[campo.name] = false;
                mostrarAlerta(campo.parentElement.parentElement,mensaje)
                campo.parentElement.classList.add("error");
            
    }
    
    function mostrarAlerta(referencia,mensaje)
    {
        eliminarAlerta(referencia)
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv)
    }
    function eliminarAlerta(referencia){
    const alerta = referencia.querySelector(".alerta");
    if (alerta) {
        alerta.remove()
    }
    }
    function enviarFormulario() {
    if(estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        formLogin.reset();
        setTimeout(()=> {
            alertaExito.classList.remove("alertaExito");
        }, 3000);
    return;
    }
    alertaExito.classList.remove("alertaExito");
    alertaError.classList.add("alertaError");
    setTimeout(()=> {
        alertaError.classList.remove("alertaError");
    }, 3000);
    }
    })();