class Henkilo{
    constructor(etunimi,sukunimi,kutsumanimi,syntymavuosi){
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }

    puhuRuotsia(){
        console.log("hellå");
    }
}
class Urheilija extends Henkilo{
    constructor(etunimi,sukunimi,kutsumanimi,syntymavuosi, linkki, omapaino, laji, saavutukset){
        super(etunimi,sukunimi,kutsumanimi,syntymavuosi);
        this.linkki = linkki;
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }
    lajiTsekkaus(){
        console.log("henkiön " + this.etunimi + " laji on "  + this.laji)
    }
        
        
    getLinkki() {
        return this.linkki;
    }
    setLinkki(value) {
        this.linkki = value;
    }

}
let jere = new Urheilija("jere", "karhu", "jerkku", "1.1.2019", " dsds" , "23kg", "pingis", "pm pronssi");
let uti = new Urheilija("jere", "karhu", "jerkku", "1.1.2019", " dsds" , "23kg", "jalkapallo", "pm pronssi");
let jarno = new Urheilija("jere", "karhu", "jerkku", "1.1.2019", " dsds" , "23kg", "tennis", "pm pronssi");
console.log(jere);

console.log("minun lajini on " + jere.laji);
console.log("minun lajini on " + jarno.laji);

jere.lajiTsekkaus();

uti.lajiTsekkaus();