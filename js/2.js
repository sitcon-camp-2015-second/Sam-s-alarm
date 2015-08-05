$(document).ready(function(){

	$('#submit').click(function(){
		if(document.getElementById('answer').checked){
			window.location.href = 'index.html';
		}
		else {
			$('#warn').append("<div style = 'color:red'>答錯囉，再聽一次JJ</div>");
		}
	});

});
