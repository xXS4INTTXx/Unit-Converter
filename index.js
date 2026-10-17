/*Initialize references to the HTML elements*/
const input = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-button")
const resetBtn = document.getElementById("reset-button")
const lengthRes = document.getElementById("length-result")
const volumeRes = document.getElementById("volume-result")
const massRes = document.getElementById("mass-result")
/*Add event listeners buttons*/
convertBtn.addEventListener("click", function(){
    const inputValue = input.value
    const metersToFeet = inputValue * 3.28084
    const feetToMeters = inputValue / 3.28084
    const litersToGallons = inputValue * 0.264172
    const gallonsToLiters = inputValue / 0.264172
    const kilogramsToPounds = inputValue * 2.20462
    const poundsToKilograms = inputValue / 2.20462

    lengthRes.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    volumeRes.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    massRes.textContent = `${inputValue} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
})

resetBtn.addEventListener("click", function(){
    input.value = ""
    lengthRes.textContent = ""
    volumeRes.textContent = ""
    massRes.textContent = ""
})