class Elemento {
  nome: string;
  costo: number;
  quantita: number;

  constructor(nome: string, costo:number, quantita: number) {
    this.nome = nome;
    this.costo = costo;
    this.quantita = quantita;
  }

  visualizza() {
    return "nome: "+ this.nome +" | costo: " + this.costo +" | quantita: "+ this.quantita;
  }

  aggiungi() {
    this.quantita = this.quantita +1;
  }
}

enum LavoratoreTipo { Manovale, Muratore, Carpentiere, Elettricista, Idraulico, Preposto, Direttore, Architetto, Ingegnere};

class Lavoratore extends Elemento {
  tipologia : LavoratoreTipo;

  constructor(nome: string, costo: number, quantita: number, tipologia: LavoratoreTipo)
  {
    super(nome, costo, quantita);
    this.tipologia = tipologia;
  }

  visualizza() {
    return super.visualizza() + " | tipologia: " + LavoratoreTipo[this.tipologia];
    //return this.nome +" - " + this.costo +" - "+ LavoratoreTipo[this.tipologia];
  }
}

var emilie:Elemento = new Elemento("Emilie", 10.50, 1);
var emilieLav:Lavoratore = new Lavoratore("Emilie", 10.50, 1, LavoratoreTipo.Architetto);

// let button = document.createElement('button');
// button.textContent = "Visualizza";
// button.onclick = function() { alert(emilieLav.visualizza()); }
//document.body.appendChild(button);
