export function szures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function(virag){
        return virag.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}

export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function(v1,v2) {
        /* a sort negatív vagy pozitív számot kell, hogy visszaadjon*/
        return v1[kulcs]<v2[kulcs]?-1*rIrany:1*rIrany;
    });
    return rlista;
}
