class Elemento {
  nome: string;
  costo: number;

  constructor(nome: string, costo: number) {
    this.nome = nome;
    this.costo = costo;
  }

  visualizza() {
    return "nome: "+ this.nome +" | costo: " + this.costo;
  }
}

enum LavoratoreTipo { Manovale, Muratore, Carpentiere, Elettricista, Idraulico, Preposto, Direttore, Architetto, Ingegnere};

class Lavoratore extends Elemento {
  tipologia : LavoratoreTipo;

  constructor(nome: string, tipologia: LavoratoreTipo)
  {
    if(tipologia==LavoratoreTipo.Manovale) { super(nome, 180);}
    if(tipologia==LavoratoreTipo.Muratore) { super(nome, 220);}
    if(tipologia==LavoratoreTipo.Carpentiere) { super(nome, 240);}
    if(tipologia==LavoratoreTipo.Elettricista) { super(nome, 300);}
    if(tipologia==LavoratoreTipo.Idraulico) { super(nome, 300);}
    if(tipologia==LavoratoreTipo.Preposto) { super(nome, 280);}
    if(tipologia==LavoratoreTipo.Direttore) { super(nome, 300);}
    if(tipologia==LavoratoreTipo.Architetto) { super(nome, 400);}
    if(tipologia==LavoratoreTipo.Ingegnere) { super(nome, 400);}
    this.tipologia = tipologia;
  }

  visualizza() {
    return super.visualizza() + " | tipologia: " + LavoratoreTipo[this.tipologia];
  }
}

var emilieLav:Lavoratore = new Lavoratore("Emilie", LavoratoreTipo.Architetto);
