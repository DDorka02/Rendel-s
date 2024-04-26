export function kartyaLetrehozasa(lista) {
  let txt = ``;
  lista.forEach((elem, index) => {
    txt += `<div class="card">
    <div class="card-header"><img  class="img-thumbnail" src="${elem.kep}" alt="${elem.nev}"></div>
    <div class="card-body">${elem.nev}</div>
    <div class="card-footer"><p>Élet: ${elem.elet}</p>
    <p>Szine: ${elem.szine}</p></div>
    <button id="${index}" class="sziv">❤️</button></div>`;
  });
 
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}

export function kedvencekLetrehoz(kedvencLista, index) {
  let txt = "";
  lista.forEach((elem, index) => {



  })
}
