var player1 = parseInt(1);
var player2 = parseInt(0);
var buttonValue1 = "val1";
var buttonValue2 = "val2";
var buttonValue3 = "val3";
var buttonValue4 = "val4";
var buttonValue5 = "val5";
var buttonValue6 = "val6";
var buttonValue7 = "val7";
var buttonValue8 = "val8";
var buttonValue9 = "val9";
var counterTurns = 0;

function button1() {
    if (player1 == 1 && buttonValue1 != "First" && buttonValue1 != "Second") {
        document.getElementById("button1").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue1 = "First";
        counterTurns+=1;
    } else if (player1 == 0 && buttonValue1 != "First" && buttonValue1 != "Second") {
        document.getElementById("button1").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue1 = "Second";
        counterTurns+=1;
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue1 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue1 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue1 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue1 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue1 =="First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue1 =="Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button2() {
    if (player1 == 1 && buttonValue2 != "First" && buttonValue2 != "Second") {
        document.getElementById("button2").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue2 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue2 != "First" && buttonValue2 != "Second") {
        document.getElementById("button2").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue2 = "Second";
        counterTurns+=1;
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue2 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue2 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue2 == "First"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue2 == "Second"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button3() {
    if (player1 == 1 && buttonValue3 != "First" && buttonValue3 != "Second") {
        document.getElementById("button3").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue3 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue3 != "First" && buttonValue3 != "Second") {
        document.getElementById("button3").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue3 = "Second";
        counterTurns+=1;
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue1 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue2 && buttonValue2 == buttonValue3 && buttonValue1 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue3 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue3 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue3 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue3 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button4() {
    if (player1 == 1 && buttonValue4 != "First" && buttonValue4 != "Second") {
        document.getElementById("button4").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue4 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue4 != "First" && buttonValue4 != "Second") {
        document.getElementById("button4").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue4 = "Second";
        counterTurns+=1;
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue4 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue4 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue4 == "First"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue4 == "Second"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button5() {
    if (player1 == 1 && buttonValue5 != "First" && buttonValue5 != "Second") {
        document.getElementById("button5").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue5 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue5 != "First" && buttonValue5 != "Second") {
        document.getElementById("button5").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue5 = "Second";
        counterTurns+=1;
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue5 == "First"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue5 == "Second"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue5 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue5 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue5 =="First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue5 =="Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue5 == "First"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue5 == "Second"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button6() {
    if (player1 == 1 && buttonValue6 != "First" && buttonValue6 != "Second") {
        document.getElementById("button6").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue6 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue6 != "First" && buttonValue6 != "Second") {
        document.getElementById("button6").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue6 = "Second";
        counterTurns+=1;
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue6 == "First"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue4 == buttonValue5 && buttonValue5 == buttonValue6 && buttonValue6 == "Second"){
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue6 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue6 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button7() {
    if (player1 == 1 && buttonValue7 != "First" && buttonValue7 != "Second") {
        document.getElementById("button7").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue7 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue7 != "First" && buttonValue7 != "Second") {
        document.getElementById("button7").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue7 = "Second";
        counterTurns+=1;
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue7 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue5 && buttonValue5 == buttonValue7 && buttonValue7 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue7 == "First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue4 && buttonValue4 == buttonValue7 &&buttonValue7 == "Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button4").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue7 == "First"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue7 == "Second"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button8() {
    if (player1 == 1 && buttonValue8 != "First" && buttonValue8 != "Second") {
        document.getElementById("button8").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue8 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue8 != "First" && buttonValue8 != "Second") {
        document.getElementById("button8").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue8 = "Second";
        counterTurns+=1;
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue8 == "First"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue8 == "Second"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue8 == "First"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue2 == buttonValue5 && buttonValue5 == buttonValue8 && buttonValue8 == "Second"){
        document.getElementById("button2").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}

function button9() {
    if (player1 == 1 && buttonValue9 != "First" && buttonValue9 != "Second") {
        document.getElementById("button9").innerHTML = "<img src='images/iron_sword.png'>";
        player1 = 0;
        player2 = 1;
        buttonValue9 = "First";
        counterTurns+=1;

    } else if (player1 == 0 && buttonValue9 != "First" && buttonValue9 != "Second") {
        document.getElementById("button9").innerHTML = "<img src='images/iron_shield.png'>";
        player1 = 1;
        player2 = 0;
        buttonValue9 = "Second";
        counterTurns+=1;
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue9 == "First"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue7 == buttonValue8 && buttonValue8 == buttonValue9 && buttonValue9 == "Second"){
        document.getElementById("button7").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button8").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue9 == "First"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue3 == buttonValue6 && buttonValue6 == buttonValue9 && buttonValue9 == "Second"){
        document.getElementById("button3").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button6").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue9 =="First"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_sword.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_sword.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 1 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(buttonValue1 == buttonValue5 && buttonValue5 == buttonValue9 && buttonValue9 =="Second"){
        document.getElementById("button1").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button5").innerHTML = "<img src='images/diamond_shield.png'>";
        document.getElementById("button9").innerHTML = "<img src='images/diamond_shield.png'>";
        counterTurns-=1;
        setTimeout(alert("Player 2 WINS! ... resetting game in 3 seconds"),2000);
        setTimeout(function(){window.location.reload()},3000)
    }
    if(counterTurns==9){
        if(!alert('DRAW!')){window.location.reload();}
    }
}
