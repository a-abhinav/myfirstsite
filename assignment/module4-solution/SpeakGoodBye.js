
(function(window){
	var speakWord="good bye";
	var byeSpeaker=function(name){
		console.log(speakWord+" "+name);
	}
	window.byeSpeaker=byeSpeaker

})(window);