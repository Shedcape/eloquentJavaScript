function chessboard(nr){
    let string = "";
    let counter = 1;
    let modifier = 0;
    while (counter <= nr * nr){
        if (counter % 2 === modifier){
            string += "#";
        } else {
            string += " ";
        }
        if (counter % nr === 0){
            string += "\n"
            if (modifier === 0){
                modifier = 1;
            } else {
                modifier = 0;
            }
        }
        counter++;
    }
    return string;
}
