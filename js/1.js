$(document).ready(function(){
  //產生選單
for(i=0; i<24; i++) {
  $("#hours").append('<option value="' + i + '">' + i + '</select>');
}
for(i=0; i<60; i++) {
  $("#minutes").append('<option value="' + i + '">' + i + '</select>');
}
power = true;
});
//開始鬧鐘
function start_alarm() {
  time = document.querySelector("#hours").value*60 + document.querySelector("#minutes").value;
  sleep(time*1000);
  if (power) {
    document.location.href = "index2.html"
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function turn(val) {
  if (val) {
    power=true
  }else{
    power=false
  }
}
