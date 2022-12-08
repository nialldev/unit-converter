/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box")
const lengthField = document.getElementById("length")
const volumeField = document.getElementById("volume")
const massField = document.getElementById("mass")
const convert = document.getElementById("convert")

let units = {
        meters: 0,
        feet: 0,
        liters: 0,
        gallons: 0,
        pounds: 0,
        kilos: 0
}

function calculate() {
    units.feet = inputBox.value * 3.281
    units.meters = inputBox.value / 3.281
    
    units.gallons = inputBox.value * 0.264
    units.liters = inputBox.value / 0.264
    
    units.pounds = inputBox.value * 2.204
    units.kilos = inputBox.value / 2.204
    
    display()
}

convert.addEventListener("click", calculate)

function display() {
    
    lengthField.textContent = `${inputBox.value} meters = ${ units.feet.toFixed(3)} feet | ${inputBox.value} feet = ${units.meters.toFixed(3)} meters`
    
    volumeField.textContent = `${inputBox.value} liters = ${units.gallons.toFixed(3)} gallons | ${inputBox.value} gallons = ${units.liters.toFixed(3)} liters`
    
    massField.textContent = `${inputBox.value} kilos = ${units.pounds.toFixed(3)} pounds | ${inputBox.value} pounds = ${units.kilos.toFixed(3)} kilos`
}
