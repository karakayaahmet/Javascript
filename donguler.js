for(let i=0; i<10; i++){
    console.log(i);
}

let sayilar = [1,3,5,7,9];
let toplam = 0;

for (let i=0; i<sayilar.length; i++){
    toplam += sayilar[i];
}

console.log(toplam);

let ciftsayilar = [2,4,6,8,0];
let cifttoplam = 0;

for(let i in ciftsayilar){
    cifttoplam += ciftsayilar[i];
}

console.log("Çift toplam : ",cifttoplam);

let teksayilar = [1,3,5,7,9];
let tektoplam = 0;

for(let i of teksayilar){
    tektoplam += i;
}

console.log("Tek toplam : ",tektoplam);

let user = {
    "name" : "Ahmet KARAKAYA",
    "username" : "ahmetkarakaya",
    "password" : "1234",
    "email" : "info@ahmet.com"
}

for(let i in user){
    console.log(i);
    console.log(user[i]);
}

