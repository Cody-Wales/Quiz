var forA = document.getElementById("a")
var ansA = document.getElementById("ansA")
var forB = document.getElementById('b')
var forC = document.getElementById('c')
var forD = document.getElementById('d')
var ansB = document.getElementById('ansB')
var ansC = document.getElementById('ansC')
var ansDm = document.getElementById('ansD')
console.log(forA)

forA.onsubmit = () => {
    event.preventDefault()
    ansA.classList.remove('invis')
  }

  forB.onsubmit = () => {
    event.preventDefault()
    ansB.classList.remove('invis')
  }

  forC.onsubmit = () => {
    event.preventDefault()
    ansC.classList.remove('invis')
  }

  forD.onsubmit = () => {
    event.preventDefault()
    ansD.classList.remove('invis')
  }