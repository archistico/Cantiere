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
    function Materiale(tipologia) {
        if (tipologia == MaterialeTipo.Legno) {
            _super.call(this, 1500);
        }
        if (tipologia == MaterialeTipo.Cemento) {
            _super.call(this, 150);
        }
        this.tipologia = tipologia;
    }
    Materiale.prototype.visualizza = function () {
        return "Materiale: " + _super.prototype.visualizza.call(this) + " | tipologia: " + MaterialeTipo[this.tipologia];
    };
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
    return Materiali;
}());
var mat1 = new Materiale(MaterialeTipo.Legno);
var mat2 = new Materiale(MaterialeTipo.Cemento);
var mat3 = new Materiale(MaterialeTipo.Legno);
var listaMateriali = new Materiali();
listaMateriali.lista.push(mat1);
listaMateriali.lista.push(mat2);
listaMateriali.lista.push(mat3);
