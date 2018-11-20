// #snd 접근법
//$("#snd") -> Jquery
//document.getElementById("snd") -> 순수자바스크립트. ES5
//document.querySelector("snd") -> 순수자바스트립트. ES6. 파이어베이트 등에서 접근

// $("#snd").paly(); 오류. 자바로 접근하라는 이유가 뜸.
// document.getElementById("snd").play();
// console.log($("#snd")[0]);
// console.log(document.querySelector("snd"));

/*
$("#bt_play").click(function() {
	if($(this).hasClass("fa-paly-circle")) {
		$("#snd")[0].play();
		$(this).removeClass("fa-paly-circle").addClass("fa-pause-circle");
	}
	else {
		$("#snd")[0].pause();
		$(this).removeClass("fa-pause-circle").addClass("fa-paly-circle");
	}	
});

또는
$("#bt_play").click(function() {
	if($("#snd")[0].paused) {
		$("#snd")[0].play();
		$(this).removeClass("fa-paly-circle").addClass("fa-pause-circle");
	}
	else {
		$("#snd")[0].pause();
		$(this).removeClass("fa-pause-circle").addClass("fa-paly-circle");
	}	
});
*/
//순수자바 1
document.querySelector("#bt_play").addEventListener("click", function() {
	if(document.querySelector("#snd").paused) {
		document.querySelector("#snd").play();
		this.classList.toggle("fa-play-circle", false);
		this.classList.toggle("fa-pause-circle", true);
	}
	else {
		document.querySelector("#snd").pause();
		this.classList.toggle("fa-play-circle", true);
		this.classList.toggle("fa-pause-circle", false);
	}
});
/*
순수자바 2
var snd = document.querySelector("#snd");
var btplay = document.querySelector("#bt_play");
btplay.addEventListener("click", soundPlay);
function soundPlay() {
	if(snd.paused) {
		snd.play();
		this.classList.toggle("fa-play-circle", false);
		this.classList.toggle("fa-pause-circle", true);
	}
	else {
		snd.pause();
		this.classList.toggle("fa-play-circle", true);
		this.classList.toggle("fa-pause-circle", false);
	}
}
*/