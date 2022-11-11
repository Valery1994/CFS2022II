var aireAcondicionado = /** @class */ (function () {
    function aireAcondicionado() {
        this.capacidad = 200;
    }
    aireAcondicionado.prototype.arrancar = function () {
        console.log("El motor tiene una capacidad de", this.capacidad);
    };
    return aireAcondicionado;
}());
