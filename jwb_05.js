function printData(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log("Nama: " + arr[i].name + ", Usia: " + arr[i].age);
    }
  }
  var data = [
      {
          name:"udin",
          age:10
      },
      {
          name:"ujang",
          age:11
      },
      {
          name:"asep",
          age:12
      }
  ];
  
  printData(data);