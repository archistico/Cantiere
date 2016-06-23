var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Elemento = (function () {
    function Elemento(nome, costo, quantita) {
        this.nome = nome;
        this.costo = costo;
        this.quantita = quantita;
    }
    Elemento.prototype.visualizza = function () {
        return "nome: " + this.nome + " | costo: " + this.costo + " | quantita: " + this.quantita;
    };
    Elemento.prototype.aggiungi = function () {
        this.quantita = this.quantita + 1;
    };
    return Elemento;
}());
var LavoratoreTipo;
(function (LavoratoreTipo) {
    LavoratoreTipo[LavoratoreTipo["Manovale"] = 0] = "Manovale";
    LavoratoreTipo[LavoratoreTipo["Muratore"] = 1] = "Muratore";
    LavoratoreTipo[LavoratoreTipo["Carpentiere"] = 2] = "Carpentiere";
    LavoratoreTipo[LavoratoreTipo["Elettricista"] = 3] = "Elettricista";
    LavoratoreTipo[LavoratoreTipo["Idraulico"] = 4] = "Idraulico";
    LavoratoreTipo[LavoratoreTipo["Preposto"] = 5] = "Preposto";
    LavoratoreTipo[LavoratoreTipo["Direttore"] = 6] = "Direttore";
    LavoratoreTipo[LavoratoreTipo["Architetto"] = 7] = "Architetto";
    LavoratoreTipo[LavoratoreTipo["Ingegnere"] = 8] = "Ingegnere";
})(LavoratoreTipo || (LavoratoreTipo = {}));
;
var Lavoratore = (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(nome, costo, quantita, tipologia) {
        _super.call(this, nome, costo, quantita);
        this.tipologia = tipologia;
    }
    Lavoratore.prototype.visualizza = function () {
        return _super.prototype.visualizza.call(this) + " | tipologia: " + LavoratoreTipo[this.tipologia];
    };
    return Lavoratore;
}(Elemento));
var emilie = new Elemento("Emilie", 10.50, 1);
var emilieLav = new Lavoratore("Emilie", 10.50, 1, LavoratoreTipo.Architetto);