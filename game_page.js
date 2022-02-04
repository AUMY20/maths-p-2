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
     input_box = "<br> Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-sucess' onclick='check()'>Check</button>";
     row = question_number + input_box +check_button;

     document.getElementById("output").innerHTML = row;
     document.getElementById("nmber1").value = "";
     document.getElementById("nmber2").value = "";
 }