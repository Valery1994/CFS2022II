var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Motor = /** @class */ (function () {
    function Motor(marca) {
        this.marca = marca;
    }
    Motor.prototype.getMarca = function () {
        return this.marca;
    };
    return Motor;
}());
var AireAcondicionado = /** @class */ (function () {
    function AireAcondicionado(marca, motor, temperatura) {
        this.marca = marca;
        this.temperatura = temperatura;
    }
    AireAcondicionado.prototype.aclimatar = function () {
        console.log(this.aclimatar());
    };
    AireAcondicionado.prototype.getMarca = function () {
        return this.marca;
    };
    AireAcondicionado.prototype.getTemperatura = function () {
        return this.temperatura;
    };
    return AireAcondicionado;
}());
var AireFrio = /** @class */ (function (_super) {
    __extends(AireFrio, _super);
    function AireFrio(marca, motor, temperatura) {
        return _super.call(this, marca, motor, temperatura) || this;
    }
    AireFrio.prototype.aclimatar = function () {
        console.log("El aire acondicionado", this.marca, "enfria", this.temperatura, "grados");
    };
    AireFrio.prototype.enfriar = function () {
        this.temperatura -= 1;
    };
    return AireFrio;
}(AireAcondicionado));
var AireCaliente = /** @class */ (function (_super) {
    __extends(AireCaliente, _super);
    function AireCaliente(marca, motor, temperatura) {
        return _super.call(this, marca, motor, temperatura) || this;
    }
    AireCaliente.prototype.aclimatar = function () {
        console.log("El aire acondicionado", this.marca, " calienta", this.temperatura, "grados");
    };
    AireCaliente.prototype.calentar = function () {
        this.temperatura += 1;
    };
    return AireCaliente;
}(AireAcondicionado));
var aire1 = new AireFrio('Samsung', this.motor, 10);
aire1.aclimatar(); // ->  
var aire2 = new AireCaliente("Philips", this.motor, 20);
aire2.aclimatar();
var temperaturaInicial = 10;
aire1.enfriar();
console.log(aire1);
aire2.calentar();
console.log(aire2);
