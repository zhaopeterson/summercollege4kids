// JavaScript Document

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

addEvent(window, "load", playVideo, false);
function playVideo(){
document.getElementById("videoplaybutton").onclick=openVideo;
//function to close the form upon cancel button
document.getElementById("video_close").onclick=function(){
	//alert("cancel button clicked");
	//document.getElementById("pmform").style.display="none";
document.getElementById("video_container").style.display="none";
document.getElementById("video_overlay").style.display="none";
var videoContainer=document.getElementById("video_container");
var galleryBox=document.getElementById("gallery_box");
//alert (galleryBox);
videoContainer.removeChild(galleryBox);
	
}//end of video close function


}//end of play video function

function openVideo(){
	
	//alert ("I am clicked");
	//document.getElementById("video_container").style.display="none";
	document.getElementById("video_overlay").style.display="block";
	document.getElementById("video_container").style.display="block";
	var videoContainer=document.getElementById("video_container");
	var galleryBox=document.createElement("div");
galleryBox.id="gallery_box";
	//var video=document.createElement("div");

	galleryBox.innerHTML="<iframe id='embeddedvideo' width='400' height='225' src='http://www.youtube.com/embed/RwZiZYhR8Uc' frameborder='0' allowfullscreen></iframe>";
	videoContainer.appendChild(galleryBox);
}
