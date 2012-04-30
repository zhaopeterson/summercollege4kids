//this function checks the user selected answer to the correct answer key array
var answersKey = new Array("1b", "2c", "3b", "4c", "5a", "6d", "7d", "8c", "9b", "10c");

var as = new Array()
var Rcount = new Array();
function setValue(inputVal){
	var i = parseInt(inputVal.substr(0,2))-1
	//alert(i+" "+typeof(i))
	as[i] = inputVal;
	if (as[i] == answersKey[i]){
		Rcount[i] =1;
		//alert("Rcount["+i+"] is: "+Rcount[i]+" "+typeof(Rcount[i]))
	} else{
		Rcount[i] =0;
	}	
	return Rcount[i]
}



function isButtonChecked(groupName) {
	var buttons = document.getElementsByName(groupName);
	checkButton = -1
	for (var i=0; i<buttons.length; i++){
		if (buttons[i].checked){
	    checkButton = i
		//alert("checkButton2:"+checkButton2)

		}
	}
	//alert("you did not answer question")
	return checkButton;	
}

var Rtotal=0;
function calRcount(){
for(var i=0; i<=9; i++){
	//document.write(Rcount[i],"<br />")
	Rtotal=Rtotal+Rcount[i];
		}
	//document.write("<br />", Rtotal)
	return Rtotal;
}
//calculate total of correct answers
//var Rtotal=0;
//preload images
var clearImage= new Image();
clearImage.src="../images_math/answer_blank.jpg"
var correctImage = new Image();
correctImage.src="../images_math/answer_correct.jpg";
var wrongImage= new Image();
wrongImage.src="../images_math/answer_wrong.jpg"

var imagename=new Image();
function swapAImage(imagename, newSrc){
	imagename.src=newSrc;
}
//preload display answers images
var clearDisplayImage=new Image();
clearDisplayImage.src="../images_math/display_blank.jpg"
var displayImage1=new Image();
displayImage1.src="../images_math/display1_ag1.jpg"
var displayImage2=new Image();
displayImage2.src="../images_math/display2_ag1.jpg"
var displayImage3=new Image();
displayImage3.src="../images_math/display3_ag1.jpg"
var displayImage4=new Image();
displayImage4.src="../images_math/display4_ag1.jpg"
var displayImage5=new Image();
displayImage5.src="../images_math/display5_ag1.jpg"
var displayImage6=new Image();
displayImage6.src="../images_math/display6_ag1.jpg"
var displayImage7=new Image();
displayImage7.src="../images_math/display7_ag1.jpg"
var displayImage8=new Image();
displayImage8.src="../images_math/display8_ag1.jpg"
var displayImage9=new Image();
displayImage9.src="../images_math/display9_ag1.jpg"
var displayImage10=new Image();
displayImage10.src="../images_math/display10_ag1.jpg"

//this function is to display the correct answer to the questions the user made wrong
function displayAImage(imageDname, displaySrc){
	imageDname.src=displaySrc;
}


//this function is to clear all the grading images on reset


// the following function is to output message containing score and guidance
//the ist is for above 80%
function outputMessageP(nameField) {
	nameField.value="Your score is: "+Rtotal+"0%, this is could be the class for you!";
	nameField.style.backgroundColor="#add591";
	nameField.style.textAlign="center";
	nameField.style.fontWeight="bold";
	nameField.style.color="#B40605";
}
//the second is for below 80%
function outputMessageNP(nameField) {
	nameField.value="Your score is: "+Rtotal+"0%, you are probably not ready for this class yet.";
	nameField.style.backgroundColor="#ffff99";
	nameField.style.textAlign="center";
	nameField.style.fontWeight="bold";
	nameField.style.color="#B40605";
}

//this function is to figure out which button groups were missing answers)
var buttonGroups = new Array()

function isButtonGroupsChecked(groupName){
	var j=parseInt(groupName.substr(6,2))-1;
	if (isButtonChecked(groupName) == -1){
	buttonGroups[j] = j+1;
	//alert(buttonGroups[j]);
	alertMsg = "You forgot to answer question: ";
	alertMsg += buttonGroups[j] + " ";
		}
		else{
			buttonGroups[j] = 0;
		}
	
	return buttonGroups[j]
}
//create an array which stores the answer keys are empty
var errorMsg = "";
var i=0;
var groupsNames = new Array()
function notAnswered(){
	for (var k=0; k<=9; k++){
 	if (buttonGroups[k] != 0){
		groupsNames[i] = buttonGroups[k]
			 //alert("you missed: question "+groupsNames[i]);		
		 i++;
		}
	}
return groupsNames[i];
}

// build error message
var errorMsg="";
var displayError ="";
function displayErrorMessage(){
	for(i=0;i<groupsNames.length;i++){
	errorMsg += groupsNames[i]; //use this errorMsg to validate if there are missing questions
	displayError += groupsNames[i] + " "; // use this error to display

	}
	return errorMsg;
	
}

function clearErrorMessage(){
	for (i=0; i<groupsNames.length; i++){
		groupsNames[i]="";
		errorMsg="";
		displayError="";
	}
	return errorMsg;
	return displayError;
}


//This function is to disable buttons after submit
function disableButtons(){
		document.mathtest.submit1.disabled="disabled";
		document.mathtest.submit1.value="Test Submitted";
		//the follwoing is to lop through all ten answer array to set each of their 4 buttons to "enabled".
		for (i=1; i<=10; i++){
			var answerButtons = document.getElementsByName("answer"+i)
			for (j=0; j<answerButtons.length; j++){
				answerButtons[j].disabled="disabled";
			}
		}
}

function ableButtons(){
		document.mathtest.submit1.disabled="";
		document.mathtest.submit1.value="Submit Test";
		for (i=1; i<=10; i++){
			var answerButtons = document.getElementsByName("answer"+i)
			for (j=0; j<answerButtons.length; j++){
				answerButtons[j].disabled="";
			}
		}
}

//Use with RESET button on click, this function to clear all the grading images and set the output field to blank
function clearAnswerImage(){
	var clearIt=confirm("Are you sure you want to clear the form?")
	if(clearIt){
		//loop through the 10 questions images to clear them
		for (i=1;i<=10;i++){
		var clearImagename = document.getElementById("an"+i); 
		var clearDisplayname = document.getElementById("dp"+i);
			swapAImage(clearImagename, clearImage.src);
			displayAImage(clearDisplayname, clearDisplayImage.src);
		}
		Rtotal=0;
		document.mathtest.scoreField.style.backgroundColor="";
		document.mathtest.submit1.disabled="";
		ableButtons();
	}
	return clearIt;

}

function calTotal(message){
     	for (k=1;k<=10;k++){
		isButtonGroupsChecked("answer"+k);// this part has problems, undefined undefined
	}
      notAnswered();
	  displayErrorMessage();
    if ((message == "submit") && (errorMsg =="" )) {
	calRcount();
	for (i=1; i<=10; i++){
		var Ranswer=document.getElementById("an"+i);//this is working! get the document objects instead previously jus using strings
		var Cdisplay=document.getElementById("dp"+i);
	//alert(Ranswer+" and "+Cdisplay);
	if(Rcount[i-1]==1){	
		swapAImage(Ranswer,correctImage.src);
			//alert(Ranswer+" and "+Cdisplay);
	}
	if(Rcount[i-1]==0){	
		var displayCimage="../images_math/display"+i+"_ag1.jpg";
		//alert(displayCimage);
		swapAImage(Ranswer,wrongImage.src);  
		displayAImage(Cdisplay, displayCimage) //this part works when use the srting of the image source
			
	}
	}
	if (Rtotal>=8){
	alert("You got: "+Rtotal+" out of 10 questions. \n" +"You are ready for this class!");
	outputMessageP(document.mathtest.scoreField);
	   
	
	} else{
		alert("You got: "+Rtotal+" out of 10 questions. \n" +"You are probably NOT ready for this class yet.");
		outputMessageNP(document.mathtest.scoreField);
           
	}
	 disableButtons();
	} else {
		if (errorMsg !==""){
			if (displayError.indexOf(" ") != 0){
				alert("You have NOT answered the following questions: "+displayError+".\n"+"Please answer them and submit again!");
			}
			else{
		var myRegExp=/\d/;
      var numPosition=displayError.search(myRegExp);
     //alert("numPosition is:"+numPosition);
     var displayErrorFinal = displayError.substr(numPosition);
		alert("You have NOT answered the following questions: "+displayErrorFinal+".\n"+"Please answer them and submit again!"); 
			}
		}
	}
clearErrorMessage(); //no difference here or a step ahead

}
