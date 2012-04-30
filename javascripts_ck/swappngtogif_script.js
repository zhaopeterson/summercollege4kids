// This fucntion is written for IE6, whenever there is a png image substitute it with the .gif version
function swapPngGif() {
	var imageName = document.getElementsByTagName("img");
	//alert(imageName.length);
	for(i=0; i<imageName.length; i++) {
	    var  oldSrc = imageName[i].src;
	//check if the image is png
	var myRegExp =/.png/;
	var numPosition = oldSrc.search(myRegExp);
	//alert("this is image: "+i+" src is: "+oldSrc);
	//alert("image: "+i+"its file ext position is: "+numPosition);
	if (numPosition !== -1){
		var newSrc = oldSrc.slice(0, numPosition) + ".gif";
		//alert("image:" +i+" new src is:"+newSrc);
		imageName[i].src= newSrc;		
	}	
		
}
}