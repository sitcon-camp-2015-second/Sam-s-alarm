var power = true;   // Global, Power on

$(document).ready(function() {
	// 產生選單
	for (var i = 0; i < 24; i++) {
		$("#hours").append('<option value="' + i + '">' + i + '</select>');
	}

	for (i = 0; i < 60; i++) {
		$("#minutes").append('<option value="' + i + '">' + i + '</select>');
	}
});

function start_alarm() {   // When trun on alarm
	var time = document.querySelector("#hours").value * 60 + document.querySelector("#minutes").value;
	time *= 1000;
	if (power) {
    setTimeout(function(){
		  document.location.href = "index2.html";
    }, time);
	}
}