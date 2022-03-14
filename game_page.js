player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("playername1").innerHTML = player1_name;
document.getElementById("playername2").innerHTML = player2_name;

 function send() {
     number1 = document.getElementById("Number_input_1").value;
     number2 = document.getElementById("Number_input_2").value;
     actual_answer = parseInt(number1) * parseInt(number2);

     question_number = "<h4>" + number1 + "x" + number2 + "</h4";
     input_box = "<br> Answer : <input type='number' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-sucess' onclick='check()'>Check</button>";
     row = question_number + input_box +check_button;

     document.getElementById("output").innerHTML = row;
     document.getElementById("nmber1").value = "";
     document.getElementById("nmber2").value = "";
 }
 question_turn = "player1"
 answer_turn = "plater2"
  function check()
  {
      actual_answer = number1 * number2 ;
      answer_given = document.getElementById("input_check_box").value 

      if(actual_answer == answer_given)
      {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1 ;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else
        {
            player2_score = player2_score + 1 ;
            document.getElementById("player2_score").innerHTML = player2_score

        }
      }
      if (question_turn == "player1")
        {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
            
        }
        else
        {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
        }