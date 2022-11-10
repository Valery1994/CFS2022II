
import * as fs from 'fs';
// import * as 'readline-sync'
​

class Auto {
    private marca: string;
    private patente: string;
    private modelo: number;
    
    public constructor(marca: string, patente: string, modelo: number) {
        this.marca=marca;
        this.patente = patente;
        this.modelo = modelo;
    }
    public getPatente() {
        return this.patente;
    }
};
 export class RegistroAutomotor {
         
        private nombre: string;
        private direccion: string;
        private listaAutos: Array<Auto>;
       
        public constructor(nombre: string, direccion: string, listaAutos: Array<Auto> ) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.listaAutos = listaAutos;
             
        }
    
        public getListaAutos() {
            return this.listaAutos;
        }
    };
class GestorDeArchivos {
            private arregloString: string[];
            constructor(txtFileLocation: string) {
                let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
                this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
            }
            public mostrarArreglo(): void {
                console.log(this.arregloString);
            }
            public getArregloString(): string[] {
                return this.arregloString;
            }
        }
function crearAutos(Autos: string, arrayAutos: Array<Auto>, ): void {
            //transformo el elemento de tipo string en un objeto de tipo Auto
            let propiedadAutos = Autos.split(','); // 
            let marca: string = propiedadAutos[0];
            let patente: number = Number(propiedadAutos[1]);
             
            let nuevoAuto : Auto = new Auto("Toyota","aa200", 2021);
            let nuevoAuto1: Auto= new Auto("Peugeot", "ss300", 2000)
            //inserto el elemento de tipo Auto en el arreglo recibido
            let arrayAutosCargados=arrayAutos.push(nuevoAuto); 
        }
        

        //Inicio programa
let datos: GestorDeArchivos = new GestorDeArchivos('Autos.txt');
let arrayAutos: Array<Auto> = [];
 
 
//creo array de objetos
for (let i: number = 0; i < datos.getArregloString().length; i++) {
    //Creo Autos uno por uno leyendo el txt
    
    crearAutos(datos.getArregloString()[i], arrayAutos,);
}
console.log(arrayAutos);
 
        