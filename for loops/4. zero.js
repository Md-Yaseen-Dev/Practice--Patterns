
function zero(){

    let str = "";

    for( i=1; i<=6;i++){

        for( j=1;j<=6;j++){

            if(i == j || i+j == 6+1){

                str+= " "
            }
            else{
                str+= "0 "

            }
        }
        str+="\n"
    }
    return str;
}
console.log(zero());



// other method



function makes_Rug(row, col) {
    let line = '';
    for (let i = 1 ; i <= row; i++) {
        for (let j = 1 ; j <= col; j++) {
            if (j == i || j == col- i+1) {
                line += ' ';
            }
            else{
                line += 'k ';
                
            }
        }
        line+= "\n"
    }
    console.log(line);

}
makes_Rug(6,6)