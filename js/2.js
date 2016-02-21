var alert = `<div class="alert alert-danger alert-dismissible fade in" id="wrong" role="alert">
	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    	<span aria-hidden="true">&times;</span>
    </button>
	<strong>答錯囉</strong> 再聽一次 JJ
</div>`;
$(document).ready(function(){
	$('#submit').click(function(){
		if(document.getElementById('answer').checked){
			window.location.href = 'index.html';
		}
		else {
			$('#info').append(alert);
			setTimeout(function(){
				$("#wrong").remove();
			}, 1500);
		}
	});

});