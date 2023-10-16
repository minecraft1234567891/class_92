player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="questionturn-"+player1_name;
document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    charAt2=word.charAt(Math.floor(word.length/2));
    charAt3=word.charAt(word.length-1);
    remove_1=word.replace(charAt1,"_");
    remove_2=remove_1.replace(charAt2,"_")
    remove_3=remove_2.replace(charAt3,"_");
    question_word="<h4 id='word_display'>q."+remove_3+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
    button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
var question_turn="player1"
var answer_turn="player2"
function check(){
    console.log("the value of word"+word)
    get_answer=document.getElementById("word").value ;
    answer=get_answer.toLowerCase();
    console.log(answer)
    if(answer==word){
      if(answerturn=="player1"){
        player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
      }
      else{
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score
      }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn -"+question_turn
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn -"+question_turn
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn -"+question_turn
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn -"+question_turn
    }
    document.getElementById("output").innerHTML="";
}