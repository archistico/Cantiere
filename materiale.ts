enum MaterialeTipo { Legno, Cemento, Sabbia};

class Materiale extends Elemento {
  tipologia : MaterialeTipo;

  constructor(tipologia: MaterialeTipo)
  {
    if(tipologia==MaterialeTipo.Legno) { super(1500);}
    if(tipologia==MaterialeTipo.Cemento) { super(150);}
    this.tipologia = tipologia;
  }

  visualizza() {
    return "Materiale: " + super.visualizza() + " | tipologia: " + MaterialeTipo[this.tipologia];
  }
}

class Materiali {
  public lista : Array<Materiale> = Array<Materiale>();

  visualizza() {
    var risultato : string = "";
    for(var c=0; c<this.lista.length; c++ ) { risultato += MaterialeTipo[this.lista[c].tipologia] + "<br>"; }
    return risultato;
  }
}

var mat1:Materiale = new Materiale(MaterialeTipo.Legno);
var mat2:Materiale = new Materiale(MaterialeTipo.Cemento);
var mat3:Materiale = new Materiale(MaterialeTipo.Legno);

var listaMateriali: Materiali = new Materiali();
listaMateriali.lista.push(mat1);
listaMateriali.lista.push(mat2);
listaMateriali.lista.push(mat3);
