var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CantiereTipo;
(function (CantiereTipo) {
    CantiereTipo[CantiereTipo["Bagno"] = 0] = "Bagno";
    CantiereTipo[CantiereTipo["Appartamento"] = 1] = "Appartamento";
    CantiereTipo[CantiereTipo["Villetta"] = 2] = "Villetta";
    CantiereTipo[CantiereTipo["Palazzo"] = 3] = "Palazzo";
    CantiereTipo[CantiereTipo["Condominio"] = 4] = "Condominio";
    CantiereTipo[CantiereTipo["Uffici"] = 5] = "Uffici";
    CantiereTipo[CantiereTipo["Negozio"] = 6] = "Negozio";
    CantiereTipo[CantiereTipo["Supermercato"] = 7] = "Supermercato";
    CantiereTipo[CantiereTipo["Grattacielo"] = 8] = "Grattacielo";
})(CantiereTipo || (CantiereTipo = {}));
;
var Cantiere = (function (_super) {
    __extends(Cantiere, _super);
    function Cantiere(tipologia, costo) {
        _super.call(this, costo);
        this.tipologia = tipologia;
        this.quantita = 0;
    }
    Cantiere.prototype.visualizza = function () {
        return "Cantiere: " + _super.prototype.visualizza.call(this) + " | tipologia: " + CantiereTipo[this.tipologia];
    };
    Cantiere.prototype.compra = function () { this.quantita += 1; return this.costo; };
    return Cantiere;
}(Elemento));
var Cantieri = (function () {
    function Cantieri() {
        this.lista = Array();
    }
    Cantieri.prototype.visualizza = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += CantiereTipo[this.lista[c].tipologia] + "<br>";
        }
        return risultato;
    };
    Cantieri.prototype.righeTabella = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += "<tr><td scope='row'>" + this.lista[c].quantita + "</th><td>" + AttrezzaturaTipo[this.lista[c].tipologia] + "</td><td>" + this.lista[c].costo + " €</td><td><button>-</button><button onclick='compraAttrezzatura(" + CantiereTipo[this.lista[c].tipologia].toLowerCase() + ")'>+</button></td></tr>";
        }
        return risultato;
    };
    Cantieri.prototype.compra = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].compra();
    };
    Cantieri.prototype.quantita = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].quantita;
    };
    Cantieri.prototype.costo = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].costo;
    };
    return Cantieri;
}());
var listaCantieri = new Cantieri();
