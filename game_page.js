player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score   ;
document.getElementById("player2_score").innerHTML = player2_score   ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name  ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name  ;

function send()
{
    get_word = document.getElementById("word").value ;
    lower_word  = get_word.toLowerCase();
    console.log("word in lowercase : " + lower_word ) ;

    charAt1 = lower_word.charAt(1) ;
    console.log(charAt1) ;

    divide_word = Math.floor(lower_word.length/2) ;
    charAt2 = lower_word.charAt(divide_word) ;
    console.log(charAt2) ; 

    subtract_word = lower_word.length - 1 ;
    charAt3 = lower_word.charAt(subtract_word) ;
    console.log(charAt3) ;
    
    replace_1 = lower_word.replace(charAt1 , "_");
    replace_2 = replace_1.replace(charAt2 , "_");
    replace_3 = replace_2.replace(charAt3 , "_");

    console.log(replace_3);

    question_word = "<h4 id = 'word_display'> Q:  " + replace_3 + "</h4>";

    answer_word = "<br> <h4> Answer </h4> <input type='text' id = 'ans_text'> <br> <br> <br>";

    check_button = "<br> <button type = 'button' id = 'ch_button' class = 'btn btn-info' onclick = 'check();' > Check </button>"

    output_box = question_word + answer_word + check_button ;

    document.getElementById("output").innerHTML = output_box ;

    document.getElementById("word").value = "" ;

}



question_turn = "player1" ; 
answer_turn = "player2" ;



function check ()
{
    get_answer = document.getElementById("ans_text").value ;
    answer = get_answer.toLowerCase() ;


    if (answer == lower_word)
    {
        if (answer_turn == "player1")
        {
            player1_score += 1 ;
            document.getElementById("player1_score").innerHTML = player1_score ;

        }

        else 
        {
            player2_score += 1 ;
            document.getElementById("player2_score").innerHTML = player2_score ;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2" ;
        document.getElementById("player_question").innerHTML = "Question turn : " + player2_name ;
    }

    else
    {
        question_turn = "player1" ;
        document.getElementById("player_question").innerHTML = "Question turn : " + player1_name ;
    }

    if (answer_turn == "player1")
    {
        answer_turn = "player2" ;
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_name ;
    }

    else
    {
        answer_turn = "player1" ;
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player1_name ;
    }

    document.getElementById("output").innerHTML = "" ;
    
}