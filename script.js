let btnCounter = document.getElementById("count-number")
let record = document.getElementById("count-record-text")
let count = 0
let saveCount = 0

function increment() {
  count += 1
  btnCounter.innerText = count
}

function decrement() {
  count -= 1
  btnCounter.innerText = count
}

function save() {
  saveCount = count
  record.innerText += ` ${count},`
  count = 0
  btnCounter.innerText = count
}