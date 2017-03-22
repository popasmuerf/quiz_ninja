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


//--------------------------------------------------
var ask = function(qobj){
	alert(qobj.question())
}
var check = function(qobj){
	var answer = prompt(qobj.question())
	var flag = qobj.check(answer.toString())
	return flag
}
var update = function(qobj){

}

//---------------------------------------------------


var qobjList = [qobj1,qobj2,qobj3]

for(var i = 0 ; i < qobjList.length ; i++){
  //alert(qobjList[i].question())
  ask(qobjList[i])
  var flag = check(qobjList[i])
  if(flag){
  	score = score + 1
  	alert("CORRECT!!! SCORE: " + score.toString())
  }else{
  	score = score - 1
  	alert("CORRECT!!! SCORE: " + score.toString())
  }
}