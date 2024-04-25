export function szures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function(virag){
        return virag.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}