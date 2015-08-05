
function aCT()
{
		

}



function aCheck()
{
	var player = document.getElementById('audio_c'),  
    map =  ['error','src','currentSrc','networkState','readyState','preload','buffered','played','seekable','seeking','currentTime','startTime','duration','paused','defaultPlaybackRate','playbackRate','ended','autoplay','loop','controls','volume','muted'];  
    for(var i=0, j=map.length; i<j; i++) 
	{  
    	console.log(map[i] + ' : ' + audio_c[map[i]] + '\n')
	}
}

function aCK()
{

}