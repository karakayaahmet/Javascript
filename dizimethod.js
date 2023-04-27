let ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;

//array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

//eleman silme
sonuc = ogrenciler.pop();  //son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogrenciler.shift();  //ilk eleman silinir.

//eleman ekleme
sonuc = ogrenciler.push("sena");    //dizinin sonuna eklenir.
sonuc = ogrenciler.unshift("sena");  //diziye baştan eklenir.

console.log(sonuc);
console.log(typeof sonuc);
