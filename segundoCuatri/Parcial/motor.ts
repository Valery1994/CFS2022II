interface motor{
    capacidad:number;
    arrancar():void
}
class aireAcondicionado implements motor{
    capacidad: number=200;
    arrancar(){
        console.log("El motor tiene una capacidad de", this.capacidad)
    }
}
 