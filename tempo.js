var Tempo = (function () {
    function Tempo(soldi) {
        this.soldi = soldi;
        this.dataIniziale = new Date();
        this.dataCorrente = new Date();
    }
    Tempo.prototype.cicla = function () {
        this.dataCorrente.setHours(this.dataCorrente.getHours() + 1);
    };
    Tempo.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () { return _this.cicla(); }, 1000);
    };
    Tempo.prototype.stop = function () {
        clearTimeout(this.timer);
    };
    Tempo.prototype.visualizza = function () {
        var diff = Math.round(this.dataCorrente.valueOf() - this.dataIniziale.valueOf()) / 1000;
        var days = parseInt(((diff / 86400)).toString());
        var hours = parseInt(((diff / 3600) % 24).toString());
        var minutes = parseInt(((diff / 60) % 60).toString());
        var seconds = diff % 60;
        var result = (hours < 10 ? "0" + hours : hours) + "-" + (minutes < 10 ? "0" + minutes : minutes) + "-" + (seconds < 10 ? "0" + seconds : seconds);
        return "Soldi: " + this.soldi + " D:" + days + " H:" + hours + " M:" + minutes + " S:" + seconds;
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
