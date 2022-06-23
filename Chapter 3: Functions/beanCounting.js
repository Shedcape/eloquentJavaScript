let string = prompt("Write a sentence");
let char = prompt("Which letter do you want to count?");
function countChar(s, c){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if (s[i] === c){
            count++
        }
    }
    alert(`There are ${count} instances of ${c} in the sentence "${s}"`);
}
countChar(string, char)
