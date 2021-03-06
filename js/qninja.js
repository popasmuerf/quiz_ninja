score = 0 
var qobj1 = {
  sname : "Superman",
  cname : "Kal El",
  question: function(){
    return "What is " + this.sname + "'s" + "real name ?"
  },
  check : function(answer){
    var pattern = /[Kk][Aa][Ll]\s*[Ee][Ll]/
    if(answer.match(pattern)){
      return true
    }else{
      return false
    }
  }
}

var qobj2 = {
  sname : "Wonder Woman",
  cname : "Dianna Prince",
  question: function(){
    return "What is " + this.sname + "'s" + "real name ?"
  },
  check : function(answer){
    var pattern = /[Dd][Ii][Aa][Nn][Nn][Aa]\s*[Pp][Rr][Ii][Nn][Cc][Ee]/
    if(answer.match(pattern)){
      return true
    }else{
      return false
    }
  }
}

var qobj3 = {
  sname : "Batman",
  cname : "Bruce Wayne",
  question: function(){
    return "What is " + this.sname + "'s" + "real name ?"
  },
  check : function(answer){
    var pattern = /[Bb][Rr][Uu][Cc][Ee]\s*[Ww][Aa][Yy][Nn][Ee]/
    if(answer.match(pattern)){
      return true
    }else{
      return false
    }
  }
}
//------------------------------------------------------



//--------------------------------------------------

var $start = document.getElementById("start")

var ask = function(qobj){
  //var answer = prompt(qobj.question())
  var $question = document.getElementById("question")
  update($question,qobj.question(),null)
}
var check = function(qobj){
  var $feedback = document.getElementById("feedback")
  var answer = prompt("Your answer is ?: ")
	update($feedback,qobj.cname.toString(),null)
  var flag = qobj.check(answer.toString())
	return flag
}
var update = function(element,content,klass){
  var p  = element.firstChild || document.createElement("p")
  //var p  =  document.createElement("p")
  p.textContent = content
  element.appendChild(p)
  if(klass){
    p.className = klass
  }
}
//--------------------------------------------
var gameOver = function(){
  var $game_status = document.getElementById("gamestatus")
  update($game_status,"Game Over Final Score:" + score)
}
//---------------------------------------------------


var qobjList = [qobj1,qobj2,qobj3]

for(var i = 0 ; i < qobjList.length ; i++){
  ask(qobjList[i])
  var flag = check(qobjList[i])
  var $score = document.getElementById("score")
  if(flag){
    score = score + 1
    update($score,score)
    //alert("CORRECT!!! SCORE: " + score.toString())
  }else{
    score = score - 1
    update($score,score.toString())
    //alert("CORRECT!!! SCORE: " + score.toString())
  }
  gameOver()
  score = 0
  update($score,score)
}