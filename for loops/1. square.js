function square() {
  let str = "";
  for (i = 0; i < 9; i++) {
    for (j = 1; j <= 18; j++) {
      if (i == 0 || i == 8) {
        str += "=";
      } else if (j == 1 || j == 18) {
        str += "|";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
console.log(square());


