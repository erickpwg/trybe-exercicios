let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}
 
for (let i = 0; i < numbers.length; i += 1){
    console.log(soma += numbers[i]);
}

let media = soma / numbers.length;
    console.log(media);