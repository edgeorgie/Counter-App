let buttonIncrement = document.getElementById("count-number")
let count = 0
let saveCount = 0

function increment() {
  count += 1
  buttonIncrement.innerText = count
}

function decrement() {
  count -= 1
  buttonIncrement.innerText = count
}

function save() {
  saveCount = count
  console.log(saveCount)
}