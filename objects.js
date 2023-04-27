let kullanici = {
    "ad" : "Sadık",
    "soyad" : "Turan",
    "yas" : 38,
    "adres" : {
        "il" : "kocaeli",
        "ilce" : "izmit"
    },
    "hobiler" : ["sinema","golf"]
}

let sonuc;

sonuc = kullanici.ad;
sonuc = kullanici.soyad;
sonuc = kullanici["yas"];
sonuc = kullanici.adres.il;
sonuc = kullanici.adres.ilce;
sonuc = kullanici.hobiler[0];

console.log(sonuc);
