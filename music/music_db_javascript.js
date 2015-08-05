function aCheck()		//檢查播放狀態
{
	var player = document.getElementById('audio_c'),  
    map =  ['error','src','currentSrc','networkState','readyState','preload','buffered','played','seekable','seeking','currentTime','startTime','duration','paused','defaultPlaybackRate','playbackRate','ended','autoplay','loop','controls','volume','muted'];  
    for(var i=0, j=map.length; i<j; i++) 
	{  
    	console.log(map[i] + ' : ' + audio_c[map[i]] + '\n')
	}
}

function aplay()		//播放方法
{
	var audio = document.getElementsByTagName('audio')[0];
	audio.play();
}

function apause()		//暫停
{
	var audio = document.getElementsByTagName('audio')[0];
	audio.pause();
}


var loadMusic = function(i)  //讀取音樂(未完成)
{
	var item = playlist[i],
	newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
	$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
	$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
	$('#playlist li').removeClass('playing').eq(i).addClass('playing');
	audio = newaudio[0];
	audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
	audio.addEventListener('progress', beforeLoad, false);
	audio.addEventListener('durationchange', beforeLoad, false);
	audio.addEventListener('canplay', afterLoad, false);
	audio.addEventListener('ended', ended, false);
}

/*
var shufflePlay = function()	//隨機撥放(未完成)
{
	var time = new Date(),
	lastTrack = currentTrack;
	currentTrack = time.getTime() % playlist.length;
	if (lastTrack == currentTrack) ++currentTrack;
	switchTrack(currentTrack);
}
*/




