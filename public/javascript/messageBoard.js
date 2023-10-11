const nameInput = document.getElementById('nameInput')
const msgInput = document.getElementById('msgInput')

const btn = document.getElementById('btn')
const exp = document.getElementById('experiment')
const list = document.getElementById('showAllMsg')

// const fs = require("fs")
// let fileData


btn.addEventListener('click', function () {
  exp.innerHTML = `${nameInput.value} just sent the message: ${msgInput.value}`
  console.log(`You just click the btn. And it will show at below without any change in db.`)

  const newP = document.createElement("p")
  newP.innerHTML = exp.innerHTML
  list.appendChild(newP)

  // btnClick()
})

// function btnClick() {
//   fs.readFile("./data/messageBoard.json", (err, data) => {
//     fileData = data
//     console.log(filedata)
//     console.log(`btnClick() has been called.`)
//   })
// }
console.log(`/public/javascript/messageBoard.js is running`)