let btn = document.querySelector("div #sete")
let visor = document.querySelector("#resultado");
let num = []

function inserir(num){
    var numero = document.querySelector("#resultado").innerHTML;
    var numeros = document.querySelector("#resultado").innerHTML;
    document.querySelector('#resultado').innerHTML = numeros + num;
}

function limpar(){
    visor.innerHTML = '';
}

function back(){
    var resultado = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length-1)
}

function calcular(){
    var resultado = document.querySelector("#resultado").innerHTML

    if(resultado){
        document.querySelector("#resultado").innerHTML = eval(resultado);
    }
}