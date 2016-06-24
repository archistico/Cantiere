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
    function Attrezzatura(tipologia, consumoMax) {
        if (tipologia == AttrezzaturaTipo.Base) {
            _super.call(this, 150);
        }
        this.tipologia = tipologia;
        this.consumoMax = consumoMax;
        this.consumo = 0;
    }
    Attrezzatura.prototype.visualizza = function () {
        return "Attrezzatura: " + _super.prototype.visualizza.call(this) + " | tipologia: " + AttrezzaturaTipo[this.tipologia];
    };
    Attrezzatura.prototype.usa = function () {
        if (this.consumo < this.consumoMax) {
            this.consumo -= 1;
            return 1;
        }
        return 0;
    };
    return Attrezzatura;
}(Elemento));
var attr1 = new Attrezzatura(AttrezzaturaTipo.Base, 50);
