let isloggedin = true;

if (isloggedin){
    console.log("uygulamaya giriş yapıldı");
}

else{
    console.log("merhaba");
}

let username = "ahmetkarakaya";
let password = "1234";
let girisYap = (username == "ahmetkarakaya");
let sifre = (password == "12345")

if (girisYap){
    if(girisYap && sifre){
        console.log("başarılı bir şekilde giriş yapıldı");
    }
    else{
        console.log("kullanıcı adı veya parola yanlış");
    }
}

if (!girisYap){
    console.log("uygulamaya giriş başarısız");
}

let mezuniyet = "üniversite";
let yas = 20;

if ((yas>18) && (mezuniyet=="lise") || (mezuniyet=="üniversite")){
    console.log("ehliyet alabilir");
}

else{
    console.log("ehliyet şartlarını sağlamıyor");
}