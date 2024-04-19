export function kartyaLetrehozasa(lista) {
  let txt = ``;
//   for (let i = 0; i < lista.length; i++) {
//     txt += `<div class="card-header">` + VIRAG[i].kep + `</div>`;
//     txt += `<div class="card-body">` + VIRAG[i].nev + `</div>`;
//     txt +=
//       `<div class="card-footer">` + VIRAG[i].elet + VIRAG[i].szine + `</div>`;

    
//   }
//   
  lista.forEach((elem) => {
    txt += `<div class="card">
    <div class="card-header"><img  class="img-thumbnail" src="${elem.kep}" alt="${elem.nev}"></div>
    <div class="card-body">${elem.nev}</div>
    <div class="card-footer"><p>Élet:</p>${elem.elet}
    <p>Szine:</p>${elem.szine}</div></div>`;
  });
  console.log(txt);
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}
