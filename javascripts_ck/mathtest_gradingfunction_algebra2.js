//check all the answered to the correct answers' array

var answersKey = new Array("1b", "2d", "3c", "4c", "5a", "6d", "7c", "8b", "9a", "10c");


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
displayImage1.src="../images_math/display1_ag2.jpg"
var displayImage2=new Image();
displayImage2.src="../images_math/display2_ag2.jpg"
var displayImage3=new Image();
displayImage3.src="../images_math/display3_ag2.jpg"
var displayImage4=new Image();
displayImage4.src="../images_math/display4_ag2.jpg"
var displayImage5=new Image();
displayImage5.src="../images_math/display5_ag2.jpg"
var displayImage6=new Image();
displayImage6.src="../images_math/display6_ag2.jpg"
var displayImage7=new Image();
displayImage7.src="../images_math/display7_ag2.jpg"
var displayImage8=new Image();
displayImage8.src="../images_math/display8_ag2.jpg"
var displayImage9=new Image();
displayImage9.src="../images_math/display9_ag2.jpg"
var displayImage10=new Image();
displayImage10.src="../images_math/display10_ag2.jpg"

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

function disableButtons(){
		document.mathtest.submit1.disabled="disabled";
		document.mathtest.submit1.value="Test Submitted";
		document.mathtest.answer1[0].disabled="disabled";
		document.mathtest.answer1[1].disabled="disabled";
		document.mathtest.answer1[2].disabled="disabled";
		document.mathtest.answer1[3].disabled="disabled";
		document.mathtest.answer2[0].disabled="disabled";
		document.mathtest.answer2[1].disabled="disabled";
		document.mathtest.answer2[2].disabled="disabled";
		document.mathtest.answer2[3].disabled="disabled";
		document.mathtest.answer3[0].disabled="disabled";
		document.mathtest.answer3[1].disabled="disabled";
		document.mathtest.answer3[2].disabled="disabled";
		document.mathtest.answer3[3].disabled="disabled";
		document.mathtest.answer4[0].disabled="disabled";
		document.mathtest.answer4[1].disabled="disabled";
		document.mathtest.answer4[2].disabled="disabled";
		document.mathtest.answer4[3].disabled="disabled";
		document.mathtest.answer5[0].disabled="disabled";
		document.mathtest.answer5[1].disabled="disabled";
		document.mathtest.answer5[2].disabled="disabled";
		document.mathtest.answer5[3].disabled="disabled";
		document.mathtest.answer5[0].disabled="disabled";
		document.mathtest.answer6[1].disabled="disabled";
		document.mathtest.answer6[2].disabled="disabled";
		document.mathtest.answer6[3].disabled="disabled";
		document.mathtest.answer7[0].disabled="disabled";
		document.mathtest.answer7[1].disabled="disabled";
		document.mathtest.answer7[2].disabled="disabled";
		document.mathtest.answer7[3].disabled="disabled";
		document.mathtest.answer8[0].disabled="disabled";
		document.mathtest.answer8[1].disabled="disabled";
		document.mathtest.answer8[2].disabled="disabled";
		document.mathtest.answer8[3].disabled="disabled";
		document.mathtest.answer9[0].disabled="disabled";
		document.mathtest.answer9[1].disabled="disabled";
		document.mathtest.answer9[2].disabled="disabled";
		document.mathtest.answer9[3].disabled="disabled";
		document.mathtest.answer10[0].disabled="disabled";
		document.mathtest.answer10[1].disabled="disabled";
		document.mathtest.answer10[2].disabled="disabled";
		document.mathtest.answer10[3].disabled="disabled";
}

function ableButtons(){
		document.mathtest.submit1.disabled="";
		document.mathtest.submit1.value="Submit Test";
		document.mathtest.answer1[0].disabled="";
		document.mathtest.answer1[1].disabled="";
		document.mathtest.answer1[2].disabled="";
		document.mathtest.answer1[3].disabled="";
		document.mathtest.answer2[0].disabled="";
		document.mathtest.answer2[1].disabled="";
		document.mathtest.answer2[2].disabled="";
		document.mathtest.answer2[3].disabled="";
		document.mathtest.answer3[0].disabled="";
		document.mathtest.answer3[1].disabled="";
		document.mathtest.answer3[2].disabled="";
		document.mathtest.answer3[3].disabled="";
		document.mathtest.answer4[0].disabled="";
		document.mathtest.answer4[1].disabled="";
		document.mathtest.answer4[2].disabled="";
		document.mathtest.answer4[3].disabled="";
		document.mathtest.answer5[0].disabled="";
		document.mathtest.answer5[1].disabled="";
		document.mathtest.answer5[2].disabled="";
		document.mathtest.answer5[3].disabled="";
		document.mathtest.answer5[0].disabled="";
		document.mathtest.answer6[1].disabled="";
		document.mathtest.answer6[2].disabled="";
		document.mathtest.answer6[3].disabled="";
		document.mathtest.answer7[0].disabled="";
		document.mathtest.answer7[1].disabled="";
		document.mathtest.answer7[2].disabled="";
		document.mathtest.answer7[3].disabled="";
		document.mathtest.answer8[0].disabled="";
		document.mathtest.answer8[1].disabled="";
		document.mathtest.answer8[2].disabled="";
		document.mathtest.answer8[3].disabled="";
		document.mathtest.answer9[0].disabled="";
		document.mathtest.answer9[1].disabled="";
		document.mathtest.answer9[2].disabled="";
		document.mathtest.answer9[3].disabled="";
		document.mathtest.answer10[0].disabled="";
		document.mathtest.answer10[1].disabled="";
		document.mathtest.answer10[2].disabled="";
		document.mathtest.answer10[3].disabled="";
}


function clearAnswerImage(){
	var clearIt=confirm("Are you sure you want to clear the form?")
	if(clearIt){
		swapAImage(document.an1, clearImage.src);
		swapAImage(document.an2, clearImage.src);
		swapAImage(document.an3, clearImage.src);
		swapAImage(document.an4, clearImage.src);
		swapAImage(document.an5, clearImage.src);
		swapAImage(document.an6, clearImage.src);
		swapAImage(document.an7, clearImage.src);
		swapAImage(document.an8, clearImage.src);
		swapAImage(document.an9, clearImage.src);
		swapAImage(document.an10, clearImage.src);
		displayAImage(document.dp1, clearDisplayImage.src);
		displayAImage(document.dp2, clearDisplayImage.src);
		displayAImage(document.dp3, clearDisplayImage.src);
		displayAImage(document.dp4, clearDisplayImage.src);
		displayAImage(document.dp5, clearDisplayImage.src);
		displayAImage(document.dp6, clearDisplayImage.src);
		displayAImage(document.dp7, clearDisplayImage.src);
		displayAImage(document.dp8, clearDisplayImage.src);
		displayAImage(document.dp9, clearDisplayImage.src);
		displayAImage(document.dp10, clearDisplayImage.src);
		Rtotal=0;
		document.mathtest.scoreField.style.backgroundColor="";
		document.mathtest.submit1.disabled="";
		ableButtons();
	}
	return clearIt;

}

function calTotal(message){
     isButtonGroupsChecked("answer1");
	 isButtonGroupsChecked("answer2");
     isButtonGroupsChecked("answer3");
	 isButtonGroupsChecked("answer4");
	 isButtonGroupsChecked("answer5");
	 isButtonGroupsChecked("answer6");
	 isButtonGroupsChecked("answer7");
	 isButtonGroupsChecked("answer8");
	 isButtonGroupsChecked("answer9");
	 isButtonGroupsChecked("answer10");
	 
      notAnswered();
	  displayErrorMessage();
	  //alert("ErrorMsg is: "+errorMsg)
	//alert(" AcheckButton1: "+AcheckButton1+" AcheckButton2: "+AcheckButton2)
	if ((message == "submit") && (errorMsg =="" )) {
	calRcount();
	if(Rcount[0]==1){	
		swapAImage(document.an1,correctImage.src);
		
	}
	if(Rcount[0]==0){
		swapAImage(document.an1,wrongImage.src);
		displayAImage(document.dp1, displayImage1.src)
	}
	
	if(Rcount[1]==1){	
		swapAImage(document.an2,correctImage.src);
	}
	if(Rcount[1]==0){
		swapAImage(document.an2,wrongImage.src);
		displayAImage(document.dp2, displayImage2.src)
	}
	
	if(Rcount[2]==1){	
	swapAImage(document.an3,correctImage.src);
	}
	if(Rcount[2]==0){
		swapAImage(document.an3,wrongImage.src);
		displayAImage(document.dp3, displayImage3.src)
	}
	
	if(Rcount[3]==1){	
		swapAImage(document.an4,correctImage.src);
	}
	if(Rcount[3]==0){
		swapAImage(document.an4,wrongImage.src);
		displayAImage(document.dp4, displayImage4.src)
	}
	
	if(Rcount[4]==1){	
		swapAImage(document.an5,correctImage.src);
	}
	if(Rcount[4]==0){
		swapAImage(document.an5,wrongImage.src);
		displayAImage(document.dp5, displayImage5.src)
	}
	//
		if(Rcount[5]==1){	
		swapAImage(document.an6,correctImage.src);
	}
	if(Rcount[5]==0){
		swapAImage(document.an6,wrongImage.src);
		displayAImage(document.dp6, displayImage6.src)
	}
	
	if(Rcount[6]==1){	
		swapAImage(document.an7,correctImage.src);
	}
	if(Rcount[6]==0){
		swapAImage(document.an7,wrongImage.src);
		displayAImage(document.dp7, displayImage7.src)
	}
	
	if(Rcount[7]==1){	

		swapAImage(document.an8,correctImage.src);
	}
	if(Rcount[7]==0){
		swapAImage(document.an8,wrongImage.src);
		displayAImage(document.dp8, displayImage8.src)
	}
	
	if(Rcount[8]==1){	
		swapAImage(document.an9,correctImage.src);
	}
	if(Rcount[8]==0){
		swapAImage(document.an9,wrongImage.src);
		displayAImage(document.dp9, displayImage9.src)
	}
	
	if(Rcount[9]==1){	
		swapAImage(document.an10,correctImage.src);
	}
	if(Rcount[9]==0){
		swapAImage(document.an10,wrongImage.src);
		displayAImage(document.dp10, displayImage10.src)
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