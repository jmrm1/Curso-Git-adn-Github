function Saludo()
{
    let hour = new Date().getHours();
    let greeting = "\n Good afternoon";
    if (hour >=7 && hour <=12){
        greeting = "\n Good morning";
    }else if (hour >=13 && hour <=22){
        greeting = "\n Good afternoon";
    }
    
    console.log(`${greeting}, its ${hour} o’clock`);
    //console.log(greeting+", its "+hour +" o’clock");
}

function tablaNumeros(fin)
{
   // console.log("\n***  La tabla con los números enteros de 0 a 22 en decimal, hexadecimal, octal y binario:");
    
    for(let i=0; i<= fin; i++)
    {
        console.log("\n"+ i + " dec = " + i.toString(10)+ " hex = " +i.toString(16)+" oct = "+i.toString(8)+" bin = "+i.toString(2));    
    }
}

function tablaNumerosPares(inicio, fin)
{
    //console.log("\n***  Una tabla similar de 1 a 21, pero solo con los impares no incluidos en el intervalo de 10 a 20");
    let resto;
    for(let i=inicio; i<= fin; i++)
    {
        if (i <10 || i>20){
            resto=(i%2);
            //console.log("resto: "+ resto +"numero: "+ i);
            if (resto!==0){ 
                console.log("\n"+ i + " dec = " + i.toString(10)+ " hex = " +i.toString(16)+" oct = "+i.toString(8)+" bin = "+i.toString(2)); 
            }
        }
    }
}

// muestra el saludo.
Saludo();

// muestra el valor de PI con 6 decimales
console.log("\nNúmero PI con 6 decimales: "+ Math.PI.toFixed(6) );

// muetra los números enteros de 0 a 22 en decimal, hexadecimal, octal y binario
tablaNumeros(22);

// muetra los números  de 1 a 21, pero solo con los impares no incluidos en el intervalo de 10 a 20    
tablaNumerosPares(1,21);

// Escribe la siguiente frase utilizando caracteres escapados para representar hola en chino
console.log("\nHi in Chinese is written as: " + String("\u55e8\uff0c\u4f60\u597d\u5417"));

//Finalizar con la siguiente línea
console.log("\nThe program has ﬁnished");



