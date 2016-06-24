enum MaterialeTipo { Legno, Cemento, Sabbia};

class Materiale extends Elemento {
  tipologia : MaterialeTipo;
  quantita : number;

  constructor(tipologia: MaterialeTipo, costo : number)
  {
    super(costo);
    this.tipologia = tipologia;
    this.quantita = 0;
  }

  visualizza() {
    return "Materiale: " + super.visualizza() + " | tipologia: " + MaterialeTipo[this.tipologia];
  }

  compra() : number { this.quantita+=1; return this.costo; }
}

class Materiali {
  public lista : Array<Materiale> = Array<Materiale>();

  visualizza() {
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) { risultato += MaterialeTipo[this.lista[c].tipologia] + "<br>"; }
    return risultato;
  }

  righeTabella() {
    //<tr><th scope="row">100</th><td>Legno</td><td>3000 €</td><td><button>-</button><button>+</button></td></tr>
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) {
      risultato += "<tr><th scope='row'>"+this.lista[c].quantita+"</th><td>"+MaterialeTipo[this.lista[c].tipologia]+"</td><td>"+this.lista[c].costo+" €</td><td><button>-</button><button onclick='compraMateriale("+MaterialeTipo[this.lista[c].tipologia].toLowerCase()+")'>+</button></td></tr>";
    }
    return risultato;
  }

  compra(tipo : Materiale) : number {
      return this.lista[this.lista.indexOf(tipo)].compra();
  }

  quantita(tipo : Materiale)
  {
    return this.lista[this.lista.indexOf(tipo)].quantita;
  }

  costo(tipo : Materiale)
  {
    return this.lista[this.lista.indexOf(tipo)].costo;
  }
}

var cemento:Materiale = new Materiale(MaterialeTipo.Cemento, 600);
var legno:Materiale = new Materiale(MaterialeTipo.Legno, 1500);
var sabbia:Materiale = new Materiale(MaterialeTipo.Sabbia, 200);

var listaMateriali: Materiali = new Materiali();
listaMateriali.lista.push(cemento);
listaMateriali.lista.push(legno);
