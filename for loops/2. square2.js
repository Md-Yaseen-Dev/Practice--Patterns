
function square1() {
    let str = "";
    for (i = 0; i < 9; i++) {
      for (j = 1; j <= 18; j++) {
        if (i == 0) {
          str += "=";
        } else if (i == 8) {
          str += "*";
        } else if (j == 1) {
          str += "+";
        } else if (j == 18) {
          str += "&";
        } else {
          str += " ";
        }
      }
      str += "\n";
    }
    return str;
  }
  console.log(square1());
  