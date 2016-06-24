var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MaterialeTipo;
(function (MaterialeTipo) {
    MaterialeTipo[MaterialeTipo["Legno"] = 0] = "Legno";
    MaterialeTipo[MaterialeTipo["Cemento"] = 1] = "Cemento";
    MaterialeTipo[MaterialeTipo["Sabbia"] = 2] = "Sabbia";
})(MaterialeTipo || (MaterialeTipo = {}));
;
var Materiale = (function (_super) {
    __extends(Materiale, _super);
    function Materiale(tipologia, costo) {
        _super.call(this, costo);
        this.tipologia = tipologia;
        this.quantita = 0;
    }
    Materiale.prototype.visualizza = function () {
        return "Materiale: " + _super.prototype.visualizza.call(this) + " | tipologia: " + MaterialeTipo[this.tipologia];
    };
    Materiale.prototype.compra = function () { this.quantita += 1; return this.costo; };
    return Materiale;
}(Elemento));
var Materiali = (function () {
    function Materiali() {
        this.lista = Array();
    }
    Materiali.prototype.visualizza = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += MaterialeTipo[this.lista[c].tipologia] + "<br>";
        }
        return risultato;
    };
    Materiali.prototype.righeTabella = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += "<tr><th scope='row'>" + this.lista[c].quantita + "</th><td>" + MaterialeTipo[this.lista[c].tipologia] + "</td><td>" + this.lista[c].costo + " €</td><td><button>-</button><button onclick='compraMateriale(" + MaterialeTipo[this.lista[c].tipologia].toLowerCase() + ")'>+</button></td></tr>";
        }
        return risultato;
    };
    Materiali.prototype.compra = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].compra();
    };
    Materiali.prototype.quantita = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].quantita;
    };
    return Materiali;
}());
var cemento = new Materiale(MaterialeTipo.Cemento, 600);
var legno = new Materiale(MaterialeTipo.Legno, 1500);
var sabbia = new Materiale(MaterialeTipo.Sabbia, 200);
var listaMateriali = new Materiali();
listaMateriali.lista.push(cemento);
listaMateriali.lista.push(legno);
