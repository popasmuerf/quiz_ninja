function doSomething(event){
	console.log("EventType: " + event.type )
	console.log("EventTarget: " + event.target)
	console.log("Coordinates: " +event.screenX,event.screenY)
	console.log("MouseButtonClicked: "+event.which)
}
//var click = document.getElementById("click")
click.addEventListener("mousedown",function(){
	console.log("down")
})
click.addEventListener("mouseup",function(){
	console.log("up")
})
function highlight(event){
	event.target.classList.toggle("highlight")
}
var dbclick = document.getElementById("dbclick")
dbclick.addEventListener("dbclick",highlight)

var mouse = document.getElementById("mouse")
mouse.addEventListener("mouseover",highlight)
mouse.addEventListener("mouseout",highlight)
mouse.addEventListener("mousemove",function(){
	console.log("You Moved!")
})