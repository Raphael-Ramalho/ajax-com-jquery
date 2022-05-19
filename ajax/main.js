let pageCounter = 1
const animalContainer = document.getElementById("animal-info")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest()
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
  ourRequest.onload = function(){
    let ourData = JSON.parse(ourRequest.responseText)
    renderHTML(ourData)
  }
  ourRequest.send()
  pageCounter++
  if(pageCounter >3){
    btn.classList.add("hide-me")
  }
})

function renderHTML(data){
  let htmlString = ""

  for( let i = 0; i< data.length; i++){
    htmlString += "<p>"+ data[i].name + " is a " + data[i].species + " that likes to eat "
    for(m = 0; m < data[i].foods.likes.length; m++){
      if(m == 0){
        htmlString += data[i].foods.likes[m]
      } else {
        htmlString += " and " + data[i].foods.likes[m]
      }
    }
    
    htmlString += ' and dislikes '

    for(m = 0; m < data[i].foods.dislikes.length; m++){
      if(m == 0){
        htmlString += data[i].foods.dislikes[m]
      } else {
        htmlString += " and " + data[i].foods.dislikes[m]
      }
    }

    htmlString += '.</p>'
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString)
}