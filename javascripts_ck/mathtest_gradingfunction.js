
//check question1

var Rcount1=0;
function setValue1(inputVal){
	var as1 = inputVal;
if (as1=="1b"){
	Rcount1++;
} else{
    Rcount1=0;
}
return Rcount1;
}

//check question2
var Rcount2=0;
function setValue2(inputVal2){
	var as2 = inputVal2;
if (as2=="2c"){
	Rcount2++;
} else{
    Rcount2=0;
}
return Rcount2;
}

//check question3
var Rcount3=0;
function setValue3(inputVal3){
	var as3 = inputVal3;
if (as3 =="3b"){
	Rcount3++;
} else{
    Rcount3=0;
}
return Rcount3;
}

var Rcount4=0;
function setValue4(inputVal4){
	var as4 = inputVal4;
if (as4 =="4c"){
	Rcount4++;
} else{
    Rcount4=0;
}
return Rcount4;
}
var Rcount5=0;
function setValue5(inputVal5){
	var as5 = inputVal5;
if (as5 =="5a"){
	Rcount5++;
} else{
    Rcount5=0;
}
return Rcount5;
}

var Rcount6=0;
function setValue6(inputVal6){
	var as6 = inputVal6;
if (as6 =="6d"){
	Rcount6++;
	//alert("value set "+inputVal6+" is : "+Rcount6)
} else{
    Rcount6=0;
}
return Rcount6;
}

var Rcount7=0;
function setValue7(inputVal7){
	var as7 = inputVal7;
if (as7 =="7d"){
	Rcount7++;
	//alert("value set "+inputVal7+" is : "+Rcount7)
} else{
    Rcount7=0;
}
return Rcount7;
}

var Rcount8=0;
function setValue8(inputVal8){
	var as8 = inputVal8;
if (as8 =="8c"){
	Rcount8++;
	//alert("value set "+inputVal8+" is : "+Rcount8)
} else{
    Rcount8=0;
}
return Rcount8;
}


var Rcount9=0;
function setValue9(inputVal9){
	var as9 = inputVal9;
if (as9 =="9b"){
	Rcount9++;
} else{
    Rcount9=0;
}
return Rcount9;
}

var Rcount10=0;
function setValue10(inputVal10){
	var as10 = inputVal10;
if (as10 =="10c"){
	Rcount10++;
} else{
    Rcount10=0;
}
return Rcount10;
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
		var Rtotal=Rcount1+Rcount2+Rcount3+Rcount4+Rcount5+Rcount6+Rcount7+Rcount8+Rcount9+Rcount10;
//alert(Rtotal);
document.body.style.backgroundColor="#f3f5f8";
document.fgColor="red";
document.write("<h3 align='center'>You got: ", Rtotal, " correct answers out of total of 10 questions</h3>");
if (Rtotal < 8) {
	document.fgColor="red";
	document.body.style.backgroundColor="#f3f5f8";
	document.write("<h3  align='center'>Your score is: ", Rtotal, "0%, you probably are not ready for this class yet.<h3>")
document.write("<h3  align='center'>You can review the questions here: <a href='mathtest_result1.html'> answer sheet</a><h3>")
} else {
	document.fgColor="red";
	document.body.style.backgroundColor="#f3f5f8";
	document.write("<h3  align='center'>Your score is: ", Rtotal, "0%, THIS IS COULD BE THE CLASS FOR YOU.<h3>")
	document.write("<h3  align='center'>Return to homepage: <a href='index.html'> Go Home</a><h3>")
}
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
}

