enum CantiereTipo { Bagno, Appartamento, Villetta, Palazzo, Condominio, Uffici, Negozio, Supermercato, Grattacielo};

class Cantiere extends Elemento {
  tipologia : CantiereTipo;
  quantita : number;

  constructor(tipologia: CantiereTipo, costo : number)
  {
    super(costo);
    this.tipologia = tipologia;
    this.quantita = 0;
  }

  visualizza() {
    return "Cantiere: " + super.visualizza() + " | tipologia: " + CantiereTipo[this.tipologia];
  }

  compra() : number { this.quantita+=1; return this.costo; }
}

class Cantieri {
  public lista : Array<Cantiere> = Array<Cantiere>();

  visualizza() {
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) { risultato += CantiereTipo[this.lista[c].tipologia] + "<br>"; }
    return risultato;
  }

  righeTabella() {
    //<tr><th scope="row">100</th><td>Legno</td><td>3000 €</td><td><button>-</button><button>+</button></td></tr>
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) {
      risultato += "<tr><td scope='row'>"+this.lista[c].quantita+"</th><td>"+AttrezzaturaTipo[this.lista[c].tipologia]+"</td><td>"+this.lista[c].costo+" €</td><td><button>-</button><button onclick='compraAttrezzatura("+CantiereTipo[this.lista[c].tipologia].toLowerCase()+")'>+</button></td></tr>";
    }
    return risultato;
  }

  compra(tipo : Cantiere) : number {
      return this.lista[this.lista.indexOf(tipo)].compra();
  }

  quantita(tipo : Cantiere)
  {
    return this.lista[this.lista.indexOf(tipo)].quantita;
  }

  costo(tipo : Cantiere)
  {
    return this.lista[this.lista.indexOf(tipo)].costo;
  }
}

//var base:Attrezzatura = new Attrezzatura(AttrezzaturaTipo.Base, 150);
var listaCantieri: Cantieri = new Cantieri();
//listaAttrezzature.lista.push(base);
