//FUNCION CONSTRUCTORA DE "CONSULTORIO"
function Consultorio(nombre,paciente){
    var _nombre = nombre;
    var _paciente = paciente || [];
    Object.defineProperty(this, "_getNombre",{
        get: function(){
            return _nombre
        }
    });
    Object.defineProperty(this, "_setNombre",{
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    })
    Object.defineProperty(this, "_getPaciente",{
        get: function(){
            return _paciente
        }
    })
}

//FUNCION CONSTRUCTORA DE "PACIENTE"
function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    //Nombre
    Object.defineProperty(this, "_getNombrePaciente",{
        get: function(){
            return _nombre;
        }
    })
    Object.defineProperty(this, "_setNombrePaciente",{
        set: function(nuevoNombrePaciente){
            _nombre = nuevoNombrePaciente;
        }
    })
    //Edad
    Object.defineProperty(this, "_getEdadPaciente",{
        get: function(){
            return _edad;
        }
    })
    Object.defineProperty(this, "_setEdadPaciente",{
        set: function(nuevaEdad){
            _edad = nuevaEdad;
        }
    })
    //Rut
    Object.defineProperty(this, "_getRutPaciente",{
        get: function(){
            return _rut;
        }
    })
    Object.defineProperty(this, "_setRutPaciente",{
        set: function(nuevoRut){
            _rut = nuevoRut;
        }
    })
    //Diagnóstico
    Object.defineProperty(this, "_getDiagnosticoPaciente",{
        get: function(){
            return _diagnostico;
        }
    })
    Object.defineProperty(this, "_setDiagnosticoPaciente",{
        set: function(nuevoDiagnostico){
            _diagnostico = nuevoDiagnostico;
        }
    })
}
//PROTOTIPOS DE FUNCIÓN CONSTRUCTORA "CONSULTORIO"
Consultorio.prototype.getNombre = function(){
    return this._getNombre;
}
Consultorio.prototype.setNombre = function(nuevoNombre){
    this._setNombre = nuevoNombre;
}
Consultorio.prototype.getPaciente = function(){
    return this._getPaciente
}

//PROTOTIPOS DE FUNCIÓN CONSTRUCTORA "PACIENTE"

Paciente.prototype.getNombrePaciente = function(){
    return this._getNombrePaciente;
}

Paciente.prototype.setNombrePaciente = function(nuevoNombrePaciente){
    this._setNombrePaciente = nuevoNombrePaciente;
}

Paciente.prototype.getEdadPaciente = function(){
    return this._getEdadPaciente;
}

Paciente.prototype.setEdadPaciente = function(nuevaEdad){
    this._setEdadPaciente = nuevaEdad;
}

Paciente.prototype.getRutPaciente = function(){
    return this._getRutPaciente;
}

Paciente.prototype.setRutPaciente = function(nuevoRut){
    this._setRutPaciente = nuevoRut;
}

Paciente.prototype.getDiagnosticoPaciente = function(){
    return this._getDiagnosticoPaciente;
}

Paciente.prototype.setDiagnosticoPaciente = function(nuevoDiagnostico){
    this._setDiagnosticoPaciente = nuevoDiagnostico;
}

//Asignación de pacientes mediante constructor "Paciente"
var paciente1 = new Paciente("Alfredo", 25, 159821654, "Dolor Muscular")
var paciente2 = new Paciente("Jon", 30, 51268412, "Dolor de Muelas")
var paciente3 = new Paciente("Pia", 33, 34145165, "Dolor de estómago")
var paciente4 = new Paciente("Nicolas",19, 2131381, "Dolor de espalda")
var paciente5 = new Paciente("Abdiel", 22, 6511689, "Dolor de canillas" )
//Asignación de consultorio mediante constructor "Consultorio"
var consultorio1 = new Consultorio("Consultorio Iquique", [paciente1,paciente2,paciente3,paciente4,paciente5]);

//FUNCIÓN PARA ENTREGAR LISTA DE PACIENTES
Consultorio.prototype.listaDePacientes = function(){
    this.getPaciente().forEach(function(element){
        console.log("Nombre: " + element.getNombrePaciente() + " | " +
        "Edad: " + element.getRutPaciente() + " | " +
        "Rut: " + element.getRutPaciente() + " | " +
        "Diagnóstico: " + element.getDiagnosticoPaciente());
    })
}

//FUNCIÓN PARA BUSCAR PACIENTES
Consultorio.prototype.buscarPaciente = function(buscarPaciente){
    var accederPacientes = this.getPaciente();
    
    var objetoEncontrado = {};
    for (i = 0; i < this.getPaciente().length; i++){
        var paciente = accederPacientes[i].getNombrePaciente();
        if (paciente == buscarPaciente){
            objetoEncontrado.nombre = accederPacientes[i].getNombrePaciente();
            objetoEncontrado.edad = accederPacientes[i].getEdadPaciente()
            objetoEncontrado.rut = accederPacientes[i].getRutPaciente();
            objetoEncontrado.diagnostico = accederPacientes[i].getDiagnosticoPaciente();
        };
    };
    if(Object.keys(objetoEncontrado).length > 0){
        console.log(
        "Nombre: "+ objetoEncontrado.nombre + " | " +
        "Rut: " + objetoEncontrado.rut + " | " +
        "Edad: " + objetoEncontrado.edad + " | " +
        "Diagnóstico: " + objetoEncontrado.diagnostico
        )

    }
    else{
        console.log("El Paciente no existe")
    };

};

console.log("Función buscar paciente")
console.log("");
consultorio1.buscarPaciente("Alfredo");
console.log("");
console.log("");
console.log("Función lista de pacientes")
console.log("");
consultorio1.listaDePacientes()