
let nombreBaseDatos="ELIANA GONZALEZ"
let correoBaseDatos="emgonzalez@sura.com.co"
let telefonoBaseDatos="3022436769"
let asuntoBaseDatos="CONSULTA"
let mensajeBaseDatos= "HOLA"

let botonFormulario=document.getElementById("enviar")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormulariocorreo=document.getElementById("correo")
let cajaFormulariotelefono=document.getElementById("telefono")
let cajaFormularioasunto=document.getElementById("asunto")
let cajaFormulariomensaje=document.getElementById("mensaje")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()

    //1.capturamos la informacion del formulario    
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormulariocorreo.value
    let telefonoUsuario=cajaFormulariotelefono.value
    let asuntoUsuario=cajaFormularioasunto.value
    let mensajeUsuario=cajaFormulariomensaje.value


    //validando los datos del uusuario
    if(nombreBaseDatos==nombreUsuario && correoBaseDatos==correoUsuario && telefonoBaseDatos==telefonoUsuario && asuntoBaseDatos==asuntoUsuario && mensajeBaseDatos==mensajeUsuario){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
        })
        setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            sessionStorage.setItem("email",correoUsuario)
            sessionStorage.setItem("telefono",telefonoUsuario)
            sessionStorage.setItem("asunto",asuntoUsuario)
            sessionStorage.setItem("mensaje",mensajeUsuario)

        window.location.href="./src/views/home.html"
        

        },1000)

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops... "+nombre+"Tienes un problema",
            text: "Verifica tus credenciales",
            
          });
    }

    



    }



);

