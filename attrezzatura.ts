enum AttrezzaturaTipo { Base, Cavalletto, Trabattello, Furgone, CamionPiccolo, CamionMedio, CamionGrande, Scavatore, Gru};

class Attrezzatura extends Elemento {
  tipologia : AttrezzaturaTipo;
  quantita : number;

  constructor(tipologia: AttrezzaturaTipo, costo : number)
  {
    super(costo);
    this.tipologia = tipologia;
    this.quantita = 0;
  }

  visualizza() {
    return "Attrezzatura: " + super.visualizza() + " | tipologia: " + MaterialeTipo[this.tipologia];
  }

  compra() : number { this.quantita+=1; return this.costo; }
}

class Attrezzature {
  public lista : Array<Attrezzatura> = Array<Attrezzatura>();

  visualizza() {
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) { risultato += AttrezzaturaTipo[this.lista[c].tipologia] + "<br>"; }
    return risultato;
  }

  righeTabella() {
    //<tr><th scope="row">100</th><td>Legno</td><td>3000 €</td><td><button>-</button><button>+</button></td></tr>
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) {
      risultato += "<tr><th scope='row'>"+this.lista[c].quantita+"</th><td>"+AttrezzaturaTipo[this.lista[c].tipologia]+"</td><td>"+this.lista[c].costo+" €</td><td><button>-</button><button onclick='compraAttrezzatura("+AttrezzaturaTipo[this.lista[c].tipologia].toLowerCase()+")'>+</button></td></tr>";
    }
    return risultato;
  }

  compra(tipo : Attrezzatura) : number {
      return this.lista[this.lista.indexOf(tipo)].compra();
  }

  quantita(tipo : Attrezzatura)
  {
    return this.lista[this.lista.indexOf(tipo)].quantita;
  }

  costo(tipo : Attrezzatura)
  {
    return this.lista[this.lista.indexOf(tipo)].costo;
  }
}

var base:Attrezzatura = new Attrezzatura(AttrezzaturaTipo.Base, 150);

var listaAttrezzature: Attrezzature = new Attrezzature();
listaAttrezzature.lista.push(base);
