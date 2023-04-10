function getStringAcak() {
    var panjangString = 10;
    var karakter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
    var hasil = "";
    for (var i = 0; i < panjangString; i++) {
      hasil += karakter.charAt(Math.floor(Math.random() * karakter.length));
    }
  
    return hasil;
  }
  var stringAcak = getStringAcak();
  console.log(stringAcak);