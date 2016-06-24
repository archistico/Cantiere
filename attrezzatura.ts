enum AttrezzaturaTipo { Base, Cavalletto, Trabattello, Furgone, CamionPiccolo, CamionMedio, CamionGrande, Scavatore, Gru};

class Attrezzatura extends Elemento {
  tipologia : AttrezzaturaTipo;
  consumoMax : number;
  consumo   : number;

  constructor(tipologia: AttrezzaturaTipo, consumoMax : number)
  {
    if(tipologia==AttrezzaturaTipo.Base) { super(150);}
    this.tipologia = tipologia;
    this.consumoMax = consumoMax;
    this.consumo = 0;
  }

  visualizza() {
    return "Attrezzatura: " + super.visualizza() + " | tipologia: " + AttrezzaturaTipo[this.tipologia];
  }

  usa():number {
    if(this.consumo < this.consumoMax) { this.consumo-=1; return 1; }
    return 0;
  }
}

var attr1:Attrezzatura = new Attrezzatura(AttrezzaturaTipo.Base, 50);
