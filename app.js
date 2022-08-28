
let display = document.querySelector(".display")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let plus = document.querySelector(".plus")
let zero = document.querySelector(".zero")
let zero2 = document.querySelector(".zero2")
let minus = document.querySelector(".minus")
let mul = document.querySelector(".mul")
let divide = document.querySelector(".divide")
let equal = document.querySelector(".equal")
let dot = document.querySelector(".dot")
let clr = document.querySelector(".clr")
let light = document.querySelector(".light")
let button = document.querySelector(".button")

clr.onclick = function () {
    display.innerHTML = ""
}
one.onclick = function () {
    display.innerHTML += 1
}
two.onclick = function () {
    display.innerHTML += 2
}
three.onclick = function () {
    display.innerHTML += 3
}
four.onclick = function () {
    display.innerHTML += 4
}
five.onclick = function () {
    display.innerHTML += 5
}
six.onclick = function () {
    display.innerHTML += 6
}
seven.onclick = function () {
    display.innerHTML += 7
}
eight.onclick = function () {
    display.innerHTML += 8
}
nine
    .onclick = function () {
        display.innerHTML += 9
    }
zero.onclick = function () {
    display.innerHTML += 0
}
zero2.onclick = function () {
    display.innerHTML += "00"
}
dot.onclick = function () {
    display.innerHTML += "."
}

plus.onclick = function () {
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar != "+") {
        display.innerText += "+"
    }
}
mul.onclick = function () {
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar != "*") {
        display.innerText += "*"
    }
}
minus.onclick = function () {
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar != "-") {
        display.innerText += "-"
    }
}
divide.onclick = function () {
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar != "/") {
        display.innerText += "/"
    }
}
equal.onclick = function () {
    let plus_index = display.innerText.indexOf("+")
    let minus_index = display.innerText.indexOf("-")
    let divide_index = display.innerText.indexOf("/")
    let mul_index = display.innerText.indexOf("*")

    if (plus_index != -1) {
        arr = display.innerText.split("+")
        result = add(arr[0], arr[1])
        display.innerText = result
    }

    if (minus_index != -1) {
        arr = display.innerText.split("-")
        result = subFunc(arr[0], arr[1])
        display.innerText = result
    }


    if (divide_index != -1) {
        arr = display.innerText.split("/")
        result = divFunc(arr[0], arr[1])
        display.innerText = result
    }


    if (mul_index != -1) {
        arr = display.innerText.split("*")
        result = multi(arr[0], arr[1])
        display.innerText = result
    }
}


function add(x, y) {
    return Number(x) + Number(y)
}

function subFunc(x, y) {
    return Number(x) - Number(y)
}

function multi(x, y) {
    return Number(x) * Number(y)
}

function divFunc(x, y) {
    return Number(x) / Number(y)
}
