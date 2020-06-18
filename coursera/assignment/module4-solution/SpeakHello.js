
(function(window){
	var speakWord="hello";
	var helloSpeaker=function(name){
		console.log(speakWord+" "+name);
	}
	window.helloSpeaker=helloSpeaker;
})(window);