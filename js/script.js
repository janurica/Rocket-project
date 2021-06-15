// this is invisible comment

/*

*/
setTimeout(function(){
  location.href = 'rocket.html';
},4000);

var doCoolStuff = function(){
  var currenClassName = document.getElementById('cool').className;
  if(currenClassName ==="cool"){
    currenClassName = document.getElementById('cool').className='cool red';
  }else{
    currenClassName = document.getElementById("cool").className='cool';
  }

}
var sayMyName = function (name){
  alert("My name is: "+name);
}

var car = {
  make: "VW",
  type: "Polo",
  color:"blue",
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
    'seat1',
    'seat2',
    'seat3',
    'seat4'
  ],
  turnOn: function(){
    this.isTurnedOn = true;
  },
  fly: function(){
    alert('fly');
  },
  switchCar: function(isOn){
    console.log("turn car " + isOn);
    if(isOn === true){
      this.isTurnedOn = true;
    }else{
      this.isTurnedOn = false;
    }
  }
};
  console.log("Hello dear Friends");
