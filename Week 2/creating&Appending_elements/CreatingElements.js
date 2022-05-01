var title = document.createElement(`h1`)
title.textContent = "Welcome to my JS website!"
title.style.textAlign = "Center"
title.style.fontSize = "50px"
document.body.prepend(title)

var para = document.createElement(`p`)
title.textContent = "All of this was created with JavaScript!"
title.style.textAlign = "Center"
title.style.fontSize = "30px"
document.body.prepend(para)

var newListItem1 = document.createElement(`li`)
newListItem1.textContent = "Apples"
var newListItem2 = document.createElement(`li`)
newListItem2.textContent = "Bananas"
var newListItem3 = document.createElement(`li`)
newListItem3.textContent = "Oranges"

var list = document.getElementById("Fruitful")
list.appendChild(newListItem1)
list.appendChild(newListItem2)
list.appendChild(newListItem3)
