//class 91
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;




var answer = 0;

function send() {

    //store & lowercase
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
   
   answer = num1 * num2

   question = num1  + " x " + num2

    question_word = "<h4 id='word_display'> Question. " + question + "</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";



    check_button = "<br><br><button class='btn btn-info' onclick='check()' > Check </button>";


    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

// till class 91




question_turn = "player1";
answer_turn = "player2";


function check() 
{
    word = document.getElementById("input_check_box").value
    //console.log("answer in lower case - " + answer);
    //scoring
if (answer == word) {
        if (answer_turn == "player1") 
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
// changing the question turns
       if (question_turn == "player1") 
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }







    

    // changing answer turn
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
