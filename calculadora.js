const resultado = document.getElementById('resultado');

function imc () {
    
    const nome = document.getElementById('nome').value; // const nome da variável que quero criar = documento que contem um elemtento ID do html entre parenteses id nome.
    const altura = document.getElementById('altura').value; // .value vai pegar só valor que foi preenchido no campo não toda tag.
    const peso = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular');

    if (nome !== '' && altura !== '' && peso !== '') { // Aqui foi feita a validação do campo nome = se nome for diferente de vazio = pass
       
        const valorIMC = (peso / (altura * altura)).toFixed(2); // .tofixed para somente escrever na tela duas casas decimais após a virgula.

        resultado.textContent = valorIMC;

        let classificacao = '';   // variável do tipo let pq ela será alterada depois

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        }else if (valorIMC < 25){
            classificacao = 'com seu peso ideal. Parabéns';
        }else if (valorIMC < 30){
            classificacao = 'com sobrepeso. Cuidado!';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau 1'
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau 2'
        }else{
            classificacao = 'com obesidade grau 3. Procure ajuda urgentemente!!!'    
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}.` //atenção para usar acento grave para reconhecer os ${}

    }else{
        resultado.textContent = 'Preencha todos os campos!';              // usado o comando textContent pq eu quero o conteudo da div.
    }

}



calcular.addEventListener('click', imc) // sempre se usa a variável (nesse caso calcular) ponto para chamar um evento nesse caso o 'click' virgula uma função ou variável
