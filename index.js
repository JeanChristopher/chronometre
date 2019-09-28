var time = 0;
var interval;
var started = false ;

setUp();

function countDown(){
        interval = setInterval(function(){
            time++;
            document.getElementById("compteur").innerHTML = time;
        },1000)
        started = true;
}

function setUp (){

    document.getElementById('reset').addEventListener('click', function(){
        location.reload();
    });

    document.getElementById('record').addEventListener('click', function(){
        document.getElementById("recorded").innerHTML += "<tr>" + time + "</tr>";

    });

    document.getElementById('start').addEventListener('click', function(){
    
    if (started == false){          
        countDown();
    } else{
        clearInterval(interval);
        started = false ;
    }
    
    })     
       
       
}
