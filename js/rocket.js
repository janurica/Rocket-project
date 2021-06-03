var timer = null;
var countDownNumber = 10;

var changeState = function (state){
    document.body.className = "body-state"+ state;
    clearInterval(timer);
    countDownNumber = 10;


if (state === 2){
  timer = setInterval(function(){
    countDownNumber = countDownNumber-1;
   document.getElementById('countdown').innerHTML = countDownNumber;

   if(countDownNumber <=0){

     changeState(3);
   }
 },500);

}else if(state ===3){
   var success = setTimeout(function(){
     var randomNumber = Math.round(Math.random()*10);
     console.log("random number: "+randomNumber);
    if(randomNumber >5){
      ///do something  - success
      changeState(4);
    } else {
      //do something else   oh no
      changeState(5);
    }

   },2000);

}
};
