function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  var year = 2024;
  var isLeap = isLeapYear(year);
  console.log(isLeap);