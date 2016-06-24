var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttrezzaturaTipo;
(function (AttrezzaturaTipo) {
    AttrezzaturaTipo[AttrezzaturaTipo["Base"] = 0] = "Base";
    AttrezzaturaTipo[AttrezzaturaTipo["Cavalletto"] = 1] = "Cavalletto";
    AttrezzaturaTipo[AttrezzaturaTipo["Trabattello"] = 2] = "Trabattello";
    AttrezzaturaTipo[AttrezzaturaTipo["Furgone"] = 3] = "Furgone";
    AttrezzaturaTipo[AttrezzaturaTipo["CamionPiccolo"] = 4] = "CamionPiccolo";
    AttrezzaturaTipo[AttrezzaturaTipo["CamionMedio"] = 5] = "CamionMedio";
    AttrezzaturaTipo[AttrezzaturaTipo["CamionGrande"] = 6] = "CamionGrande";
    AttrezzaturaTipo[AttrezzaturaTipo["Scavatore"] = 7] = "Scavatore";
    AttrezzaturaTipo[AttrezzaturaTipo["Gru"] = 8] = "Gru";
})(AttrezzaturaTipo || (AttrezzaturaTipo = {}));
;
var Attrezzatura = (function (_super) {
    __extends(Attrezzatura, _super);
    function Attrezzatura(tipologia, costo) {
        _super.call(this, costo);
        this.tipologia = tipologia;
        this.quantita = 0;
    }
    Attrezzatura.prototype.visualizza = function () {
        return "Attrezzatura: " + _super.prototype.visualizza.call(this) + " | tipologia: " + MaterialeTipo[this.tipologia];
    };
    Attrezzatura.prototype.compra = function () { this.quantita += 1; return this.costo; };
    return Attrezzatura;
}(Elemento));
var Attrezzature = (function () {
    function Attrezzature() {
        this.lista = Array();
    }
    Attrezzature.prototype.visualizza = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += AttrezzaturaTipo[this.lista[c].tipologia] + "<br>";
        }
        return risultato;
    };
    Attrezzature.prototype.righeTabella = function () {
        var risultato = "";
        for (var c = 0; c < this.lista.length; c++) {
            risultato += "<tr><th scope='row'>" + this.lista[c].quantita + "</th><td>" + AttrezzaturaTipo[this.lista[c].tipologia] + "</td><td>" + this.lista[c].costo + " €</td><td><button>-</button><button onclick='compraAttrezzatura(" + AttrezzaturaTipo[this.lista[c].tipologia].toLowerCase() + ")'>+</button></td></tr>";
        }
        return risultato;
    };
    Attrezzature.prototype.compra = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].compra();
    };
    Attrezzature.prototype.quantita = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].quantita;
    };
    Attrezzature.prototype.costo = function (tipo) {
        return this.lista[this.lista.indexOf(tipo)].costo;
    };
    return Attrezzature;
}());
var base = new Attrezzatura(AttrezzaturaTipo.Base, 150);
var listaAttrezzature = new Attrezzature();
listaAttrezzature.lista.push(base);
