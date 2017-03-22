function createElement (tag,text){
  var el = document.createElement(tag)
  el.textContent = text
  return el
}
//var pgDom = document.body
var para1 = createElement("p","Transistion 1")
para1.style.backroundColor = "green"
var para2 = createElement("p","Transistion 2")
para2.style.backroundColor = "blue"
var sportsEl = document.getElementById('sports')
sportsEl.append(para1)
sportsEl.append(para2)
