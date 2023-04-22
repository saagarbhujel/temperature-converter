const celElement = document.getElementById("celsius")
const fahrenElement = document.getElementById("fahrenheit");
const kelElement = document.getElementById("kelvin")


//clecius conversion

celElement.addEventListener("change",(e)=>{
console.log(e.target.value)
let currentValue = +e.target.value

if(e.target.name === "celsius"){
     fahrenElement.value = (currentValue*1.8+ 32)
        kelElement.value = (currentValue + 273.32)   
}

})

//fahrenhiet conversion
fahrenElement.addEventListener("change",(e)=>{
console.log(e.target.value)
let currentValue = +e.target.value
 
if(e.target.name === "fahrenheit"){
    celElement.value = ((currentValue - 32) / 1.8)
    kelElement.value = ( (currentValue - 32) / 1.8 + 273.32)
}

})

//kelvin conversion

kelElement.addEventListener("change",(e)=>{
console.log(e.target.value)
let currentValue = +e.target.value

if(e.target.name ==="kelvin"){
    celElement.value = (currentValue - 273.32)
    fahrenElement.value = ((currentValue - 273.32)*1.8 +32)
}


})






// function computeTemp(event){
//     console.log(event.target.value)
// }