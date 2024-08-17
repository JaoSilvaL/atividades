import input from "@inquirer/input";
//Um

 let tarifa =2.50

 let idade = await input ({message: 'Insira sua idade para verificar o valor da tarifa :'})
 if (idade <6){
    tarifa = 0;
    console.log("O VALOR DA TARIFA É DE R$"+ tarifa)
 }
 else if(idade >= 6 && idade <18) {
    tarifa = tarifa -(tarifa* 0.1)
    console.log("O VALOR DA TARIFA É DE R$"+ tarifa)
 }
 else if (idade >=18 && idade <60){
    console.log("O VALOR DA TARIFA É DE R$"+ tarifa)
 }
 else{
   tarifa=tarifa-(tarifa* 0.3)
   console.log("O VALOR DA TARIFA É DE R$"+ tarifa )
 }          
 
//Dois
let num = await input ({message: 'Insira um numero para saber seu fatorial :'})
let fatorial
fatorial = num
while (num > 1){

   fatorial = fatorial*(num-1 )
   num=num-1
}
console.log(fatorial)
//mt fofo esse jeito que fiz, kwai.