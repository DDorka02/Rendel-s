import { VIRAG } from "./adatok.js";
import { kartyaLetrehozasa, megjelenit,  } from "./fuggvenyek.js";
import { sorBeszur } from "./urlapKezelo.js";
import { szures, rendez, kedvencek, torol } from "./adatKezelo.js";

let rIrany=1;
init(VIRAG);
sorBeszur(VIRAG);
szuresNevSzerint();

export function init(lista) {
  var txt = kartyaLetrehozasa(lista);
  megjelenit(txt);
  rendezesEsemeny();
}

function szuresNevSzerint(){
    const szuroElem = $("#sznev");
    szuroElem.on("keyup", function(){
        let szoveg = szuroElem.val();
        init(szures(VIRAG, szoveg));
    });
}

function rendezesEsemeny(){
  const nevMezoElem = $("#rend");
  nevMezoElem.on("change", function(){
    console.log(nevMezoElem.val())
      const lista = rendez(VIRAG, nevMezoElem.val(), rIrany);
      console.log(lista);
      init(lista);
      rIrany*=-1;
  })
}


