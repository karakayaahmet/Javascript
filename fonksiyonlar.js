function selamlama(){
    console.log("merhabalar")
}

selamlama();

function selamlama2(msg){
    console.log(msg);
}

selamlama2("iyi günler");
selamlama2("Selamlar");

function yasHesapla(dogum_yili){
    console.log(new Date().getFullYear()-dogum_yili);
}

yasHesapla(1993);

function yasHesapla2(dogum_yili){
    return new Date().getFullYear()-dogum_yili;
}

console.log(yasHesapla2(1990));

function emeklilikHesapla(isim, dogum_yili){
    let yas = yasHesapla2(dogum_yili);

    if(yas < 65){
        return `${isim} emekliliğinize ${yas} kalmıştır.`;
    }
    else{
        return `${isim} zaten emekli oldunuz.`;
    }
}

console.log(emeklilikHesapla("Ali", 1990));