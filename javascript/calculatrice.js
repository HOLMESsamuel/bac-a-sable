var nombre = document.getElementsByClassName("nombre");
for(var i =0;i<nombre.length;i++){
	nombre[i].addEventListener('click',function(){
		var input=reverseNumberFormat(getinput());
		if(input!=NaN){ //if input is a nombre
			input=input+this.id;
			printInput(input);
		}
	});
}

function getHistory(){
	return document.getElementById("valeur-historique").innerText;
}
function printHistory(num){
	document.getElementById("valeur-historique").innerText=num;
}
function getinput(){
	return document.getElementById("valeur-input").innerText;
}
function printInput(num){
	if(num==""){
		document.getElementById("valeur-input").innerText=num;
	}
	else{
		document.getElementById("valeur-input").innerText=getFormattedNumber(num);
	}	
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}


var operateur = document.getElementsByClassName("operateur");
for(var i =0;i<operateur.length;i++){
	operateur[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printInput("");
		}
		else{
			var input=getinput();
			var history=getHistory();
			if(input==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(input!="" || history!=""){
				input= input==""?input:reverseNumberFormat(input);
				history=history+input;
				if(this.id=="="){
					var result=eval(history);
					printInput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printInput("");
				}
			}
		}
	});
}