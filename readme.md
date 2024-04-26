# Webáruház

## Specifikáció

Az a feladat hogy, hogy a publikus felületen megjelenítsük kártyákat, amiken egy általunk választott témakör van. Ezek után az hogy tudjunk szürni a kartyák között, és rendezni is. Utána az hogy hogyha rákattintunk a szívecskére akkor a kedvencek lapon jelenjenek meg. 

## függvények

1. *** kartyaLetrehoz(lista) *** -> txt - lista alapján készít html tablazat kodot, visszaadja az elkeszult html szoveget.

2. *** megjelenit(txt) *** - megjeleniti a parameterben kapott szoveget egy adott html elemben

3. *** rendez(lista) *** -> rendezettLista - megrendezi a listat adott parameter szerint, a megrendezett listat ujra megjeleniti, megrendezett listat visszaadja akkor fut le amikor rakattintunk hogy mire akarunk szűrni és az oké gombra nyomunk

4. *** szures(lista, keresoSzoveg) *** -> szurtLista - akkor fog lefutni, ha a szuro mezoben valtozas tortenik (keyup) - a listaban a nev mezoben keres egyezeseket es szur ez alapjan filter

5. *** kedvencek(lista, index, kedvencekLista) *** -> kedvencek - ez a lista az adott kártyát fogja a a kedvecek listába teszi amikor  rányomunk a szívre.

6. *** kedvencekLetrehoz(kedvencLista, index) *** - kártya alapján készít html tablazat kodot, visszaadja az elkeszult html szoveget.

6. *** kedvencekMegjelenít(kedvencLista, index) *** - megjeleniti kártyába kapott szoveget egy adott html elemben

7. *** torol(lista, index) *** - torli a lista adott sorat minden sor mellett lesz egy torol gomb, amivel megkapjuk az adott sor indexet es meghivodik a torol fuggveny

8. *** torolesemeny() *** - kitörli az az adott kártyát a kedvencek közül ahol rányomunk a töröl gombra.

<!--5. *** sorBeszur(lista) *** -> ujLista - ha a submit gombra kattintunk akkor fut le urlap adatkat atalakitjuk objektumma es hozzaadjuk a listahoz (push)

 -->

