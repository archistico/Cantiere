class Elemento {
  costo: number;

  constructor(costo: number) {
    this.costo = costo;
  }

  visualizza() {
    return "costo: " + this.costo;
  }
}

enum LavoratoreTipo { Manovale, Muratore, Carpentiere, Elettricista, Idraulico, Preposto, Direttore, Architetto, Ingegnere};

class Lavoratore extends Elemento {
  tipologia : LavoratoreTipo;

  constructor(tipologia: LavoratoreTipo)
  {
    if(tipologia==LavoratoreTipo.Manovale) { super(180);}
    if(tipologia==LavoratoreTipo.Muratore) { super(220);}
    if(tipologia==LavoratoreTipo.Carpentiere) { super(240);}
    if(tipologia==LavoratoreTipo.Elettricista) { super(300);}
    if(tipologia==LavoratoreTipo.Idraulico) { super(300);}
    if(tipologia==LavoratoreTipo.Preposto) { super(280);}
    if(tipologia==LavoratoreTipo.Direttore) { super(300);}
    if(tipologia==LavoratoreTipo.Architetto) { super(400);}
    if(tipologia==LavoratoreTipo.Ingegnere) { super(400);}
    this.tipologia = tipologia;
  }

  visualizza() {
    return "Lavoratore: " + super.visualizza() + " | tipologia: " + LavoratoreTipo[this.tipologia];
  }
}

var emilieLav:Lavoratore = new Lavoratore(LavoratoreTipo.Architetto);
