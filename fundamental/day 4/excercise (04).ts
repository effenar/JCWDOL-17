//Excercise 1


//Excercise 2


//Excercise 3
function bmiIndex(w:number, h:number){
    
    const hasilCek:number = w/((h/100)*(h/100))

    if (hasilCek <= 18.5 ) return ("less weight");
    else if (hasilCek >= 18.5 && hasilCek <= 24.9) return ("ideal");
    else if (hasilCek >= 25.0 && hasilCek <= 29.9) return ("overweight");
    else if (hasilCek >= 30.0 && hasilCek <= 39.9) return ("very overweight");
    else console.log("obesity");
}

const w:number = 65
const h:number = 175

console.log(`Orang dengan Berat ${w}kg dan Tinggi ${h}cm, memiliki index berat badan ` + bmiIndex(w,h)); 

//Excercise 4
const deretAngka:number [] = [1,2,3,4,5,6,7,8,9,10]
const bilGenap:number [] = deretAngka.filter((number) =>
    !(number % 2) ? true : false
  );

console.log(bilGenap);

//Excercise 5
const str:string = "Hello World"
const arraySplit:string [] = str.split (" ")

console.log(arraySplit);
