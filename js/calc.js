			
			
			function getKey(objButton){  
				var opr = ["+", "-", "/", "*"];
				var res = document.getElementById('res').innerHTML;
				var numberArray = res.match(/\d+/g);
				if(res==0)
					res=""
				var lastInput=res.substr(res.length - 1);
				var lastChar = opr.find(function(element) {
				  return element ==lastInput;
				});
				var lastInout = opr.find(function(element) {
				  return element ==objButton;
				});
				if (lastChar && lastInout){
					res = res.substring(0, res.length - 1);
					res =res+objButton;
					document.getElementById("res").innerHTML = res;	
				}else {
					document.getElementById("res").innerHTML = res+objButton;	
				}
				switch(objButton){
					case "percent":
						if((lastChar)){
							var percentNum=numberArray[numberArray.length-1];
							percentNum=(percentNum*percentNum)/100;
							document.getElementById("res").innerHTML = res+percentNum;
						}else{
							var percentNum=numberArray[numberArray.length-1];
							var pPercentNum=numberArray[numberArray.length-2];
							if(pPercentNum){
								var numL=(-1)*percentNum.toString().length;
								resSlice = res.slice(0, numL);
								percentNum=(percentNum*pPercentNum)/100;
								document.getElementById("res").innerHTML = resSlice+""+percentNum;
							}else{
								document.getElementById("res").innerHTML = "0";
							}
						}
					break;
					/*case isNaN(objButton):
						var claclRes=Math.round(calcString(res)*100)/100;
						if (claclRes=='Infinity')
							document.getElementById("res").innerHTML = "Cannot division by zero";
						else 
							document.getElementById("res").innerHTML = claclRes+objButton;
					break;*/
					
				}
			}
			function calc(){  
				var res = document.getElementById('res').innerHTML;
				var claclRes=Math.round(calcString(res)*100)/100;
				console.log(claclRes);
				if (claclRes=='Infinity')
					document.getElementById("res").innerHTML = "Cannot division by zero";
				else 
					document.getElementById("res").innerHTML = claclRes;	
			}
			function clearDiv(){  
				document.getElementById("res").innerHTML = "0";
			}
			function calcString(fn) {
			  return new Function('return ' + fn)();
			}