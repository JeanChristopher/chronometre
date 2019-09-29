/**
 * @file a file for simulating a countdown
 * @author Jean Christopher AMANY
 * @license MIT
 * @copyright Copyright (c) 2019 REV; J.C. Amany
 */


var time = 0;
var interval;
var started = false ;

setUp();

function countDown(){
        interval = setInterval(function(){
            time++;
            document.getElementById("compteur").innerHTML = (time/100).toFixed(2);
        },10)        
        started = true;
}

/**
 * Set up the application running environnement
 */

function setUp (){

    // execute different actions on keydown event
    document.addEventListener('keydown', function(event){
        
        if(event.key == "s" ){
            if (started == false){
                countDown();
            } else{
                clearInterval(interval);
                started = false ;
            }
        }
        if(event.key == "t" ){
            if (started == true){
                document.getElementById("recorded").innerHTML += "<table><tr><td>" + (time/100) + "</td></tr><table>";
            }
        }
        if(event.key == "r" ){
            location.reload();
        }
    });

    // reset the countdown and erase the recorded time when we click the reset button

    document.getElementById('reset').addEventListener('click', function(){
        location.reload();
    });

    // record the current number on the countdown if we click on the record button

    document.getElementById('record').addEventListener('click', function(){
        if (started==true){
        document.getElementById("recorded").innerHTML += "<table><tr><td>" + (time/100) + "</td></tr><table>";
        }
    });

    // start the countdown if we click on the start button
    document.getElementById('start').addEventListener('click', function(){
    
    if (started == false){          
        countDown();
    } else{
        clearInterval(interval);
        started = false ;
        }
    })     
}
