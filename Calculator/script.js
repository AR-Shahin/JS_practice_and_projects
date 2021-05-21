
 let $ = (data) => document.querySelector(data)
 let print = (val) => console.log(val);



function getHistory(){
	return $('#history-value').innerText;
} 

function printHistory(num){
	$('#history-value').innerText = num
}

function getOutput(){
	return $('#output-value').innerText
}

function printOutput(num){
	num == "" ? $('#output-value').innerText = num : $('#output-value').innerText = getFormattedNumber(num)
}

function getFormattedNumber(num){
	return Number(num).toLocaleString('en')
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
let operators = document.getElementsByClassName('operator')

for(let i = 0; i< operators.length ; i++){
	operators[i].addEventListener('click', function(){
		if(this.id == 'clear'){
			printOutput("")
			printHistory("")
		}else if(this.id == 'backspace'){

			var output = reverseNumberFormat(getOutput()).toString()
			if(output){
				output = output.substr(0,output.length-1)
				printOutput(output)
			}
		}
		else{
//

		var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output ==""? output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}


//
		}

	})
}

let numbers = document.getElementsByClassName('number')

for(let i = 0;i< numbers.length;i++){
	numbers[i].addEventListener('click',function(){
		let output = reverseNumberFormat(getOutput())
		if(output !=NaN){
			output =  output+ this.id 
			printOutput(output)
		}
	})
}