let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.includes("django");
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(5,10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10,-5);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Egitimi","Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];

console.log(sonuc);