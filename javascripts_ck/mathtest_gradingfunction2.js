
//check all the answered to the correct answer array

var answersKey = new Array("1b", "2a", "3b", "4c", "5c", "6b", "7b", "8d", "9b", "10a");

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
function calTotal(message){
      var AcheckButton1 = isButtonChecked("answer1")
	  var AcheckButton2 = isButtonChecked("answer2")
      var AcheckButton3 = isButtonChecked("answer3")
	  var AcheckButton4 = isButtonChecked("answer4")
	  var AcheckButton5 = isButtonChecked("answer5")
	  var AcheckButton6 = isButtonChecked("answer6")
	  var AcheckButton7 = isButtonChecked("answer7")
	  var AcheckButton8 = isButtonChecked("answer8")
	  var AcheckButton9 = isButtonChecked("answer9")
	  var AcheckButton10 = isButtonChecked("answer10")
 
	//alert(" AcheckButton1: "+AcheckButton1+" AcheckButton2: "+AcheckButton2)
	if ((message == "submit") && (AcheckButton1 !== -1)&& (AcheckButton2 !== -1)&&(AcheckButton3 !== -1)&&(AcheckButton4 !== -1)&&(AcheckButton5 !== -1)&&(AcheckButton6 !== -1)&&(AcheckButton7 !== -1)&&(AcheckButton8 !== -1)&&(AcheckButton9 !== -1)&&(AcheckButton10 !== -1)) {
	calRcount();
//alert(Rtotal);
document.write("<h3 align='center'>You got: ", Rtotal, " correct answers out of total of 10 questions</h3>");
document.write("<h3 align='center'>Here is what you did:</h3>")
for (i=1; i<=Rcount.length; i++){
	var resultQ=new Array();
	if(Rcount[i-1]==1){
		resultQ[i-1]="right";
	}
	if(Rcount[i-1]==0){
		resultQ[i-1]="wrong";
	}
	document.write("<p align='center'>question", i, ": ",resultQ[i-1], "</p>")
}
document.write("<h3 align='center'>Your score is: ", Rtotal*10, "%</h3>")
if (Rtotal >=8){
	document.write("<h3 align='center'>Great! You are ready for this class!</h3>")
} else{
	document.write("<h3 align='center'>Well, you are probably not ready for this class yet.</h3>")
}
document.body.style.backgroundColor="#f3f5f8";
document.fgColor="red";
document.write("<h3  align='center'>You can review the questions here: <a href='mathtest_result1.html'> answer sheet</a><h3>")
	} else {
		if (AcheckButton1 == -1)
		alert("You have not answered question 1, please answer it and resubmit the form")
		if (AcheckButton2 == -1)
		alert("You have not answered question 2, please answer it and resubmit the form")
		if (AcheckButton3 == -1)
		alert("You have not answered question 3, please answer it and resubmit the form")
		if (AcheckButton4 == -1)
		alert("You have not answered question 4, please answer it and resubmit the form")
		if (AcheckButton5 == -1)
		alert("You have not answered question 5, please answer it and resubmit the form")
		if (AcheckButton6 == -1)
		alert("You have not answered question 6, please answer it and resubmit the form")
		if (AcheckButton7 == -1)
		alert("You have not answered question 7, please answer it and resubmit the form")
		if (AcheckButton8 == -1)
		alert("You have not answered question 8, please answer it and resubmit the form")
		if (AcheckButton9 == -1)
		alert("You have not answered question 9, please answer it and resubmit the form")
		if (AcheckButton10 == -1)
		alert("You have not answered question 10, please answer it and resubmit the form")
	}
	//return false
}
