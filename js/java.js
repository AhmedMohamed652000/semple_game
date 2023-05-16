// var imgContainer = document.getElementsByClassName('.img-container');
var bullet = document.querySelector('#bullet');
var imgg = document.querySelector('#imgg');

var imgLeft = 0;
var imgBottom = 0;
document.addEventListener('keydown' , function(e){
    if(e.code=='ArrowRight'){
     var widr =imgg.style.left = imgLeft;
    if(widr>(innerWidth-150)){
        imgg.style.left ="90%";
    }
    
    else{
        imgLeft += 50;
        var widr =imgg.style.left = imgLeft;
        }   
    }

    else if(e.code=='ArrowLeft'){
        var widl=imgg.style.left = imgLeft ;   
        if(widl<1){
            imgg.style.left="0%";
        } 
        
        else{ 
            imgLeft -= 50;
          var widl=imgg.style.left = imgLeft ; 
        }
    }

    else if(e.code=='ArrowUp'){
        var heiup = imgg.style.bottom = imgBottom;
        if(heiup > (innerHeight-150)){
            imgg.style.bottom = "90%";
        }
        else{
            imgBottom += 100;
            var heiup =  imgg.style.bottom = imgBottom;
        }
        
       
    }
    else if(e.code=='ArrowDown'){
       var heiup= imgg.style.bottom = imgBottom; 
       if(heiup<1){
        imgg.style.bottom="0%"; 


       }
       else{

        imgBottom -= 100;
       var heiup= imgg.style.bottom = imgBottom; 
       }

        
    }

    else if(e.code=='Space'){

            // bullet.style.bottom =800;
            var moov = document.getElementById("bullet");
            moov.classList.replace('none' , 'infinite');
            document.getElementById('bulletAudio').play(); 
        
    }

    
    else if(e.code=='KeyX'){

        var moov = document.getElementById("bullet");
        moov.classList.replace('infinite' , 'none');     
    }

})

// var click = document.getElementById('click');

// click.addEventListener('click' , function(){
//     bullet.style.bottom =500; 
// })
