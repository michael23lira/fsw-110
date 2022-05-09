const sports = ["Basketball", "Baseball", "Football", "Soccer", "Tennis"];

var sportsList = document.getElementById("myList")

for (var i = 0; i < sports.length; i++) {

    var newSport = document.createElement("h2")
    newSport.textContent = sports[i]
    sportsList.ap
    prepend(newSport)
}
