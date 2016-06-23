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
    this.dataCorrente.setMinutes(this.dataCorrente.getMinutes() + 15);
  }

  public start() {
    this.timer = setInterval(() => this.cicla(), 1000);
  }
  public stop() {
    clearTimeout(this.timer);
  }

  public visualizza()
  {
    var day = this.dataCorrente.getUTCDate();
    var month = this.dataCorrente.getUTCMonth() + 1;
    var year = this.dataCorrente.getUTCFullYear();

    var h = this.dataCorrente.getHours();
    var m = this.dataCorrente.getMinutes();
    var s = this.dataCorrente.getSeconds();

    m = this.checkTime(m);
    s = this.checkTime(s);

    return day + "/" + month + "/"+year + " " + h + ":" + m + " soldi: € "+this.soldi;
  }

  private checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

}

var simulazione : Tempo = new Tempo(10000);
simulazione.start();
