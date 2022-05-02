var newH1 = document.createElement(`h1`)
newH1.textContent = "Hello, World!"
newH1.style.textAlign = "Center"
document.body.prepend(newH1)

var newP1 = document.createElement(`p`)
newP1.textContent = "I hope it's been a great day!"
newH1.style.fontSize = "30px"
document.body.appendChild(newP1)

var newListItem1 = document.createElement(`li`)
newListItem1.textContent = "Kind"
var newListItem2 = document.createElement(`li`)
newListItem2.textContent = "Gentle"
var newListItem3 = document.createElement(`li`)
newListItem3.textContent = "Love"

var myList = document.getElementById("BeingNice")
myList.appendChild(newListItem1)
myList.appendChild(newListItem2)
myList.appendChild(newListItem3)

var newFooter = document.createElement('footer')
newFooter.textContent = "Thanks for BEING N.I.C.E."
newFooter.style.fontSize = '30px'
document.body.append(newFooter)
