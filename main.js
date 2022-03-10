const firstDiv = document.querySelector(".first-step");
const secondDiv = document.querySelector(".second-step");
const finalDiv = document.querySelector(".final-step");

const go = (currentStep, nextStep)=>{
    let dNone, dBlock;
    if(currentStep == 1){
        dNone = firstDiv;
    } else if(currentStep == 2){
        dNone = secondDiv;
    } else{
        dNone = finalDiv;
    }
    dNone.style.display = 'none';
    if(nextStep == 1){
        dBlock = firstDiv;
    } else if(nextStep == 2){
        dBlock = secondDiv;
    } else{
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

const validate = () =>{
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    if(!peso.value || !altura.value){
        if(!peso.value && !altura.value){
            console.log("Não temos nem peso nem altura")
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        }
        else if(!peso.value){
            console.log("Não temos peso")
            peso.style.border = '1px solid red';
        }
        else if(!altura.value){
            console.log("Não temos altura")
            altura.style.border = '1px solid red';
        }
    } else{
        go(2,3);
        peso.style.border = 'none';
        altura.style.border = 'none';
        let imc = peso.value / (altura.value*altura.value);
        const result = document.querySelector('.resultado')
        if(imc < 18.5){
            console.log(Math.round(imc))
            console.log('Magreza | Obesidade(Grau): 0')
            result.innerHTML = 'Magreza <br>Obesidade(Grau): 0'
            result.style.color = 'yellow';
            result.style.fontSize = '30px';
        } else if(imc >= 18.5 && imc <= 24.9){
            console.log(Math.round(imc))
            console.log('Normal | Obesidade(Grau): 0')
            result.innerHTML = 'Normal <br> Obesidade(Grau): 0'
            result.style.color = '#28c728';
            result.style.fontSize = '30px';
        } else if(imc >= 25 && imc <= 29.9){
            console.log(Math.round(imc))
            console.log('Sobrepeso | Obesidade(Grau): I')
            result.innerHTML = 'Sobrepeso <br> Obesidade(Grau): 0'
            result.style.color = 'yellow';
            result.style.fontSize = '30px';
        } else if(imc >= 30 && imc <= 39.9){
            console.log(Math.round(imc))
            console.log('Obesidade Obesidade(Grau): II')
            result.innerHTML = 'Obesidade <br> Obesidade(Grau): II'
            result.style.color = 'orange';
            result.style.fontSize = '30px';
        } else if(imc > 40){
            console.log(Math.round(imc))
            console.log('Obesidade Grave | Obesidade(Grau): III')
            result.innerHTML = 'Obesidade Grave <br> Obesidade(Grau): III'
            result.style.color = 'red';
            result.style.fontSize = '30px';
        }
    }
}