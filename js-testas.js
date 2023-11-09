/* 
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// let atsitiktinisSkaicius = Math.floor(Math.random() * (1000) + 1)

// function konvertavimas(skaicius) {
//     let doleris = 1.07
//     let pavertimas = (skaicius * doleris).toFixed(2);
//     console.log(`Iš turimų ${skaicius} eur galima gauti ${pavertimas} dol.`);
// }

// konvertavimas(atsitiktinisSkaicius)

/* 
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

// let atsitiktinisSkaicius = Math.floor(Math.random() * (1000) + 1)

// function konvertavimas(skaicius) {
//     let euras = 0.93
//     let pavertimas = (skaicius * euras).toFixed(2);
//     console.log(`Iš turimų ${skaicius} dol galima gauti ${pavertimas} eur.`);
// }

// konvertavimas(atsitiktinisSkaicius)

/* 
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris.
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu.
Pvz. svoris = 80kg, ūgis = 1.8 m.
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

// function BMI (svoris, ugis) {
//     let formule = (svoris / ugis**2).toFixed(2)
//     if (formule > 25) {
//         console.log(`Jūsų BMI yra ${formule}, pagal jį jūs turite viršsvorį, kadangi BMI yra daugiau nei 25.`);
//     } else if (formule >= 18.5 && formule < 25) {
//         console.log(`Jūsų BMI yra ${formule}, pagal jį jūs esate normalaus svorio.`);
//     } else if (formule < 18.5) {
//         console.log(`Jūsų BMI yra ${formule}, pagal jį jūsų svoris yra per mažas, kadangi BMI nesiekia 18.5.`);
//     }
// }

// BMI(82, 1.8)


/* 
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

// function amziausVertimas (amzius) {
//     let dienomis = amzius * 365
//     let valandomis = dienomis * 24
//     let minutemis = valandomis * 60
//     let sekundemis = minutemis * 60
//     console.log(`Jūsų amžius yra ${amzius} m., dienomis tai yra ${dienomis} d., valandomis: ${valandomis} val., minutėmis: ${minutemis} min., sekundėmis: ${sekundemis} s.`);
// }

// amziausVertimas(24)

/* 
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

// // iš Farenheito į Celsijų
// function konvertavimasF (duomenys) {
//     let skaiciavimas1 = (duomenys -32) / 1.80
//     console.log(`${duomenys} °F yra ${skaiciavimas1.toFixed(2)} °C`);
// }

// konvertavimasF(0.1)

// //iš Celsijaus į Farenheitą
// function konvertavimasC (duomenys) {
//     let skaiciavimas2 = (duomenys * 1.80) + 32
//     console.log(`${duomenys} °C yra ${skaiciavimas2.toFixed(2)} °F`);
// }

// konvertavimasC(102)


/* 
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

// let skaiciai = []

// for (let i = 1; i <= 10; i++) {
//     skaiciai.push(i)
// }

// let masyvas = skaiciai.join('-')
// console.log(masyvas);

/* 
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

// let masyvas = ""

// for(let i = 1; i <= 5; i++) {
//     for(let j = 0; j < i; j++) {
//         masyvas += "*"
//     }
//     masyvas += "\n"
// }

// console.log(masyvas)

/* 
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

// let siandiena = new Date();
// let kaledos = new Date(2023, 11, 25)

// let skirtumas = kaledos - siandiena
// let likoDienu = Math.ceil(skirtumas / (1000 * 60 * 60 * 24))

// console.log(`Iki Kalėdų liko ${likoDienu} dienos(-ų) !`);

/* 
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

// let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"]

// let tekstas1 = vardai.join(',')
// let tekstas2 = vardai.join('+')

// console.log(tekstas1);
// console.log(tekstas2);

/* 
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

// let mazosiosRaides = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// let didziosiosRaides = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let simboliai = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", "/"]

// let slaptazodis = ""
// let slaptazodzioIlgis = 12

// function atsitiktineReiksme (masyvas) {
//     let reiksme = Math.floor(Math.random() * masyvas.length)
//     return masyvas[reiksme]
// }

// for (let i = 0; i < 1; i++) {
//     slaptazodis += atsitiktineReiksme(mazosiosRaides)
//     slaptazodis += atsitiktineReiksme(didziosiosRaides)
//     slaptazodis += atsitiktineReiksme(skaiciai)
//     slaptazodis += atsitiktineReiksme(simboliai)
// }

// let sujungtasMasyvas = mazosiosRaides.concat(didziosiosRaides, skaiciai, simboliai);

// while(slaptazodis.length < slaptazodzioIlgis) {
//     slaptazodis += atsitiktineReiksme(sujungtasMasyvas)
// }

// console.log(slaptazodis); 

// Žinau, kad pradžia pirmų keturių slaptažodžio simbolių nelabai skaitosi kaip atsistiktinė, bet kitaip nelabai gaunasi man..
