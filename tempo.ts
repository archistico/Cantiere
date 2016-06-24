class Tempo
{
  public dataIniziale : Date;
  public dataCorrente : Date;
  public soldi: number;
  private timer:number;

  constructor(soldi:number)
  {
    this.soldi = soldi;
    this.dataIniziale = new Date();
    this.dataCorrente = new Date();
  }

  public cicla() {
    //this.dataCorrente.setMinutes(this.dataCorrente.getMinutes() + 15);
    this.dataCorrente.setHours(this.dataCorrente.getHours() + 1);
  }

  public start() {
    this.timer = setInterval(() => this.cicla(), 1000);
  }
  public stop() {
    clearTimeout(this.timer);
  }

  public visualizza()
  {
    var diff = Math.round(this.dataCorrente.valueOf() - this.dataIniziale.valueOf())/1000;
    var days = parseInt( ((diff / 86400) ).toString() );
    var hours = parseInt( ((diff / 3600) % 24).toString() );
    var minutes = parseInt(((diff / 60) % 60).toString() );
    var seconds = diff % 60;

    var result = (hours < 10 ? "0" + hours : hours) + "-" + (minutes < 10 ? "0" + minutes : minutes) + "-" + (seconds  < 10 ? "0" + seconds : seconds);

    return "D:"+ days + " H:" + hours + " M:" + minutes + " S:"+seconds;
  }

  private checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

}

var simulazione : Tempo = new Tempo(10000);
simulazione.start();
