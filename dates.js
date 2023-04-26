let simdi = new Date();

//Get Methods
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getMonth();
sonuc = simdi.getTime();
sonuc = simdi.getSeconds();

//Set Methods
simdi.setFullYear(2025);
simdi.setDate(20);
simdi.setMonth(8);

let dogum_tarihi = new Date(1996,6,1);
let suan = new Date();

let yas = suan.getFullYear() - dogum_tarihi.getFullYear();

sonuc = simdi;

console.log(sonuc);
console.log(typeof sonuc);
console.log("Yaşınız : ",yas);