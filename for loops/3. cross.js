function cross() {
    let str = "";
  
    for (i = 1; i <= 6; i++) {
      for (j = 1; j <= 6; j++) {
        if (j == i || j + i == 6 + 1) {
          str += "1";
        }
        else{
          str += " ";
  
        }
      }
      str += "\n";
    }
    return str;
  }
  console.log(cross());