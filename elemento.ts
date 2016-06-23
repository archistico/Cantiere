class Elemento {
  nome: string;
	costo: number;

	constructor(nome: string, costo:number) {
        this.nome = nome;
		this.costo = costo;
    }

	visualizza() {
        return this.nome +" - " + this.costo;
    }
}

enum LavoratoreTipo { Manovale, Muratore, Carpentiere, Elettricista, Idraulico, Preposto, Direttore, Architetto, Ingegnere};

class Lavoratore extends Elemento {
	tipologia : LavoratoreTipo;

	constructor(nome: string, costo: number, tipologia: LavoratoreTipo)
	{
		super(nome, costo);
		this.tipologia = tipologia;
	}

	visualizza() {
		return this.nome +" - " + this.costo +" - "+ LavoratoreTipo[this.tipologia];
	}
}

var emilie:Elemento = new Elemento("Emilie", 10.50);
var emilieLav:Lavoratore = new Lavoratore("Emilie", 10.50, LavoratoreTipo.Architetto);

// let button = document.createElement('button');
// button.textContent = "Visualizza";
// button.onclick = function() { alert(emilieLav.visualizza()); }
//document.body.appendChild(button);
