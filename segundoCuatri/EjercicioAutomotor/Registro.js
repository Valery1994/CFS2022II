"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
// import * as 'readline-sync'
var Auto = /** @class */ (function () {
    function Auto(marca, patente, modelo) {
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, direccion, listaAutos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAutos = listaAutos;
    }
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
;
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
function crearAutos(Autos, arrayAutos) {
    //transformo el elemento de tipo string en un objeto de tipo Auto
    var propiedadAutos = Autos.split(','); // 
    var marca = propiedadAutos[0];
    var patente = Number(propiedadAutos[1]);
    var nuevoAuto = new Auto("Toyota", "aa200", 2021);
    var nuevoAuto1 = new Auto("Peugeot", "ss300", 2000);
    //inserto el elemento de tipo Auto en el arreglo recibido
    var arrayAutosCargados = arrayAutos.push(nuevoAuto);
}
//Inicio programa
var datos = new GestorDeArchivos('Autos.txt');
var arrayAutos = [];
//creo array de objetos
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Autos uno por uno leyendo el txt
    crearAutos(datos.getArregloString()[i], arrayAutos);
}
console.log(arrayAutos);
