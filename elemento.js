var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Elemento = (function () {
    function Elemento(costo) {
        this.costo = costo;
    }
    Elemento.prototype.visualizza = function () {
        return "costo: " + this.costo;
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
    function Lavoratore(tipologia) {
        if (tipologia == LavoratoreTipo.Manovale) {
            _super.call(this, 180);
        }
        if (tipologia == LavoratoreTipo.Muratore) {
            _super.call(this, 220);
        }
        if (tipologia == LavoratoreTipo.Carpentiere) {
            _super.call(this, 240);
        }
        if (tipologia == LavoratoreTipo.Elettricista) {
            _super.call(this, 300);
        }
        if (tipologia == LavoratoreTipo.Idraulico) {
            _super.call(this, 300);
        }
        if (tipologia == LavoratoreTipo.Preposto) {
            _super.call(this, 280);
        }
        if (tipologia == LavoratoreTipo.Direttore) {
            _super.call(this, 300);
        }
        if (tipologia == LavoratoreTipo.Architetto) {
            _super.call(this, 400);
        }
        if (tipologia == LavoratoreTipo.Ingegnere) {
            _super.call(this, 400);
        }
        this.tipologia = tipologia;
    }
    Lavoratore.prototype.visualizza = function () {
        return "Lavoratore: " + _super.prototype.visualizza.call(this) + " | tipologia: " + LavoratoreTipo[this.tipologia];
    };
    return Lavoratore;
}(Elemento));
var emilieLav = new Lavoratore(LavoratoreTipo.Architetto);
