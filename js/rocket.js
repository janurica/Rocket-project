var timer = null;
var countDownNumber = 10;

var changeState = function (state){
    document.body.className = "body-state"+ state;
    clearInterval(timer);
    countDownNumber = 10;

/*Countdown*/

if (state === 2){
  timer = setInterval(function(){
    countDownNumber = countDownNumber-1;
   document.getElementById('countdown').innerHTML = countDownNumber;
  if (countDownNumber <= 7  && countDownNumber > 4 ){
   // be nervous
   document.getElementById('nervous').className = 'nervous show';
 } else{
     document.getElementById('nervous').className = 'nervous';


  }
  if ( countDownNumber <=4  && countDownNumber >1) {
    // can't wait
    document.getElementById('cant-wait').className = 'cant-wait show';} else{
      document.getElementById('cant-wait').className = 'cant-wait';

  }


   if(countDownNumber <=0){

     changeState(3);
   }
 },500);

}else if(state ===3){
   var success = setTimeout(function(){
     var randomNumber = Math.round(Math.random()*10);
     console.log("random number: "+randomNumber);
    if(randomNumber >9){
      ///do something  - success
      changeState(4);
    } else {
      //do something else   oh no
      changeState(5);
    }

   },2000);

}
};
