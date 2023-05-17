
var menu =("A - calcular a media de x e y \n B - calcular a area do trapezio\n C - gerar uma vogal aleatoriamente\n D - somar todos os valores de um vetor qualquer\n S - sair do programa\n ")
var opcao

while(opcao!="s"){
    opcao = prompt(menu);
    
    if(opcao=="a"){
        var nota1 = Number(prompt("Digite sua nota1"));
        var nota2 = Number(prompt("Digite sua nota2"));
        var resposta = calcular_media(nota1, nota2);

      alert(`Media eh igual a ${resposta}`);
           break
    }else if(opcao == "b"){
       var baseM = Number(prompt("digite o valor da base maior")); 
       var basem = Number(prompt("digite o valor da base menor")); 
       var altura = Number(prompt("digite o valor da altura")); 
       var final = area_trapezio(baseM, basem, altura)
       alert(`a area eh igual a ${final} `);
    }   else if(opcao == "c"){
        vogal_aleatoria()
    } else if (opcao == "d"){
        somarvetor()
    }
    }  

    function calcular_media(nota1, nota2){
        var media = (nota1+nota2)/2;
      
        return media;
      }

      

function area_trapezio(baseM, basem, altura) {
    var area = (baseM+basem)*altura/2
    var altura = altura
    return area
}

function vogal_aleatoria(){
var x
x = 1+(parseInt(Math.random()*5));
if (x == 1) {
   alert("vogal sorteada foi A")
} else if (x == 2) {
    alert("vogal sorteada foi E")
} else if(x == 3) {
    alert("vogal sorteda foi I")
} else if (x == 4) {
    alert("vogal sorteada foi O")
} else if(x == 5) {
   alert("vogal sorteada foi U")
}
}

function somarvetor() {
    vetor = [1,2,3,4,5]
    total = 0 
    for(i=0;i<vetor.length;i++){
        total = total + vetor[i]
        
    }
   alert(total)
}

 