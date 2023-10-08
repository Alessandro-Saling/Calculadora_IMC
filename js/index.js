// peso / (altura * altura) 

function calcular(){
    let imc 
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    
    peso = parseFloat(peso)
    altura = parseFloat(altura)
   
    imc = peso / altura**2 

    imc = imc.toFixed(2)

    document.querySelector('#calcular-resultado').innerText = `IMC: ${imc}`

}