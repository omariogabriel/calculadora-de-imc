let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let button = document.querySelector(".calc-imc")
let result = document.querySelector(".result")

weight.focus()


button.addEventListener("click", ()=> {

    let imc = weight.value / (height.value * height.value)

    if( imc < 18.5) {
        result.innerHTML= `Seu imc é ${parseInt(imc)}, você está abaixo do peso!`
    }


    if (imc >=18.5 | imc < 24.9) {
        result.innerHTML= `Seu imc é ${parseInt(imc)}, você está no peso ideal!`
    }

    if (imc >=25 | imc < 29.9) {
        result.innerHTML= `Seu imc é ${parseInt(imc)}, você está com sobrepeso!`
    }

    if (imc >=30) {
        result.innerHTML= `Seu imc é ${parseInt(imc)}, você está com obesidade!`
    }

    if (weight.value.length == "" | height.value.length == "") {
        result.innerHTML= `Não foi possível calcular seu imc, você precisa preencher todos os campos necessários`
        weight.focus()
    }

})