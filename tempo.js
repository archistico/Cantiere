var Tempo = (function () {
    function Tempo(soldi) {
        this.soldi = soldi;
        this.dataIniziale = new Date();
        this.dataCorrente = new Date();
    }
    Tempo.prototype.cicla = function () {
        this.dataCorrente.setMinutes(this.dataCorrente.getMinutes() + 15);
    };
    Tempo.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () { return _this.cicla(); }, 1000);
    };
    Tempo.prototype.stop = function () {
        clearTimeout(this.timer);
    };
    Tempo.prototype.visualizza = function () {
        var day = this.dataCorrente.getUTCDate();
        var month = this.dataCorrente.getUTCMonth() + 1;
        var year = this.dataCorrente.getUTCFullYear();
        var h = this.dataCorrente.getHours();
        var m = this.dataCorrente.getMinutes();
        var s = this.dataCorrente.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        return day + "/" + month + "/" + year + " " + h + ":" + m + " soldi: € " + this.soldi;
    };
    Tempo.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        ;
        return i;
    };
    return Tempo;
}());
var simulazione = new Tempo(10000);
simulazione.start();
