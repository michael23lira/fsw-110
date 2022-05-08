var newH1 = document.createElement(`h1`)
newH1.textContent = "Hello World."
document.body.prepend(newH1)

for (let i = 0; i < 10; i ++) {
    const header = document.createElement(`h1`);
    header.innerHTML = "Hello World."
    document.body.prepend(header);
}

var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#1e32c1";
h1Elements[i].style.textAlign = "center" };

const names = ["steve", "larry", "joe", "shirly", "steph", "nate", "rick", "emily"];

var namesList = document.getElementById("myList")

for (var i = 0; i < names.length; i++) {

    var newName = document.createElement("li")
    newName.textContent = names[i]
    namesList.appendChild(newName)
}
