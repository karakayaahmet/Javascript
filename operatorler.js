let sonuc;
let a = 10, b = 20, c = 30;

//Aritmetik Operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
sonuc = a++; //önce ata sonra artır.
sonuc = ++a; //önce artır sonra ata.
sonuc = a--; //önce ata sonra azalt.
sonuc = --a; //önce azalt sonra ata.

//Atama Operatörleri
sonuc = a;
sonuc += a;
sonuc -= a;
sonuc *= a;
sonuc /= a;
sonuc %= a;

//Karşılaştırma Operatörleri
sonuc = (a == b);
sonuc = (a != b);
sonuc = (3 == "3"); //deger kontrolü yapar true döner.
sonuc = (3 === "3"); //hem değer hem de tip kontrolü yapar.
sonuc = (a > b);
sonuc = (a < b); 
sonuc = (a >= b); 
sonuc = (a <= b); 

console.log(sonuc);
