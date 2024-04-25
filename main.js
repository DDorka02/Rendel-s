import { VIRAG } from "./adatok.js";
import { kartyaLetrehozasa, megjelenit } from "./fuggvenyek.js";
import { sorBeszur } from "./urlapKezelo.js";
import { szures } from "./adatKezelo.js";

init(VIRAG);
sorBeszur(VIRAG);
szuresNevSzerint();

export function init(lista) {
  var txt = kartyaLetrehozasa(lista);
  megjelenit(txt);
}

function szuresNevSzerint(){
    const szuroElem = $("#sznev");
    szuroElem.on("keyup", function(){
        let szoveg = szuroElem.val();
        init(szures(VIRAG, szoveg));
    });
}

function rendezesEsemeny(){

  /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
  const nevMezoElem = $(".");
  nevMezoElem.on("click", function(){
      const lista = rendez(VIRAG, "nev", rIrany);
      console.log(lista);
      init(lista);
      rIrany*=-1;
  })
}
