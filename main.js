import { VIRAG } from "./adatok.js";
import {
  kartyaLetrehozasa,
  megjelenit,
} from "./fuggvenyek.js";
import { sorBeszur } from "./urlapKezelo.js";
import { szures, rendez, kedvencek, torol } from "./adatKezelo.js";

const kedvenceLISTA = []
let rIrany = 1;
init(VIRAG);
szuresNevSzerint();
kedvencekesemeny(VIRAG)
sorBeszur(VIRAG);
Kedvenceklistazasa();

export function init(lista) {
  var txt = kartyaLetrehozasa(lista);
  megjelenit(txt);
  rendezesEsemeny();
}

function szuresNevSzerint() {
  const szuroElem = $("#sznev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szures(VIRAG, szoveg));
  });
}

function rendezesEsemeny() {
  const nevMezoElem = $("#rend");
  nevMezoElem.on("change", function () {
    console.log(nevMezoElem.val());
    const lista = rendez(VIRAG, nevMezoElem.val(), rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
  });
}

function kedvencekesemeny(lista) {
  const kedvencELEM = $(".sziv")
        kedvencELEM.on("click", function (event) {
          let index = event.target.id;
            const hozzaad = $(".card-footer").eq(index)
            //hozzaad.append("<p>❤️</p>") 
            console.log(lista)
            lista[index].kedvenc=true
            const LISTA= kedvencek(kedvenceLISTA,lista[index])
            init(lista)
        })
/* aKKOR FUT LE, HA RÁKATTINTUNK A KÁRTYÁK ALJÁN LÉVŐ KEDVENCEKHEZ AD GOMBRA */
//aKKOR A KÁRTYÁBAN MEGJELENIK EGY SZIVECSKE
// ÉS AZ ADOTT KÁRTYA ÁTKERÜL A KEDVENCEK LISTÁBA
}

function Kedvenceklistazasa(){
  //Kedvencek mutatása 1db, ha erre kattintunk, akkor kilistázza a kedvencekLista tartalámt. 
  const GOMB = $(".kedv")
  GOMB.on("click", function () {
    init(kedvenceLISTA)
    
  })
}
