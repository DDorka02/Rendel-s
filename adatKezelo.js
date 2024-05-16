export function szures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function(virag){
        return virag.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}

<<<<<<< HEAD
=======
export function szinszures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function(virag){
        return virag.szine.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}


>>>>>>> 45ba65201fa8139fdc007722df51147ca6d14b6d
export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function(v1,v2) {
        return v1[kulcs]<v2[kulcs]?-1*rIrany:1*rIrany;
    });
    return rlista;
}

export function kedvencek(lista, kartya) {
    lista.push(kartya)
    return lista;
}

export function torol(lista, index) {
    lista.splice(index,1)
    return kedvencLista;
}