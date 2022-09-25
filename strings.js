let ad = "Ahmet";
let soyad = "Kaya";
let yas = 60;
let sehir = "İzmir";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad +". " + sehir + "'de yaşıyorum. " + "Emekliliğe " + (65-yas) + " yılım kaldı.";

//backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} de yaşıyorum. Emekliliğe ${65-yas} yılım kaldı.`;

//ternary operatör
let emeklilik = (65-yas > 0) ? "Emekliliğe " + (65-yas) + " yılım kaldı." : "Zaten Emekli oldunuz.";

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj);
