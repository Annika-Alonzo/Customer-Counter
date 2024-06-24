let counterELm = document.getElementById("counter-elm")
let entriesElm = document.getElementById("entries-elm")
let count = 0

function increment() {
    count += 1
    counterELm.textContent = count
}

function save() {
    let entries = count + " - "
    entriesElm.textContent += entries
    counterELm.textContent = 0
    count = 0
}

function refresh() {
    entriesElm.textContent = "Previous entries: "
    counterELm.textContent = 0
    count = 0
}