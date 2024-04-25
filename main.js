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
