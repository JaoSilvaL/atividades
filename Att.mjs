import input from "@inquirer/input";

 const data= new Date();
 const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira ", "Sabado"]
 console.log("hoje é dia " + data.toLocaleDateString()+" sendo uma "+ dias[data.getDay()] +" as " + data.toLocaleTimeString());

let numero = await input ({message: 'Insira um numero para saber sua forma original, em dobro e o triplo em binario  :'})
let indice=0;


function binario(numero){
   let restos=[];
   
   while (numero>0){
      restos[indice]= numero%2
      numero= ~~(numero/2);
      indice++;
   }
   return restos.reverse().join("");
}
let resultado =binario(numero);
console.log(`o binario do numero ${numero} é ${resultado}`)
console.log(`o binario do numero ${numero*2} é ${binario(numero*2)}`)
console.log(`o binario do numero ${numero*3} é ${binario(numero*3)}`)


