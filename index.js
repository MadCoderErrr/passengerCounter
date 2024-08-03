//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(countEl)
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}
