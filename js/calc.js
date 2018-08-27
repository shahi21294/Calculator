			
			
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
						var percentNum=numberArray[numberArray.length-1];
						if((lastChar)){
								percentNum=(percentNum*percentNum)/100;
								document.getElementById("res").innerHTML = res+percentNum;
						}else{
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
					case "radical":
						var percentNum=numberArray[numberArray.length-1];
						if((lastChar)){
								percentNum=Math.sqrt(percentNum);
								document.getElementById("res").innerHTML = res+percentNum;
						}else{
								var numL=(-1)*percentNum.toString().length;
								resSlice = res.slice(0, numL);
								percentNum=Math.sqrt(percentNum);
								document.getElementById("res").innerHTML = resSlice+""+percentNum;
						}
					break;
					case "power":
						var percentNum=numberArray[numberArray.length-1];
						if((lastChar)){
								percentNum=Math.pow(percentNum,2);
								document.getElementById("res").innerHTML = res+percentNum;
						}else{
								var numL=(-1)*percentNum.toString().length;
								resSlice = res.slice(0, numL);
								percentNum=Math.pow(percentNum,2);
								document.getElementById("res").innerHTML = resSlice+""+percentNum;
						}
					break;
					case "division":
						var percentNum=numberArray[numberArray.length-1];
						if((lastChar)){
								percentNum=(1/percentNum);
								document.getElementById("res").innerHTML = res+percentNum;
						}else{
								var numL=(-1)*percentNum.toString().length;
								resSlice = res.slice(0, numL);
								percentNum=(1/percentNum);
								document.getElementById("res").innerHTML = resSlice+""+percentNum;
						}
					break;
					case "negPos":
						var percentNum=numberArray[numberArray.length-1];
						if((lastChar)){
								percentNum=(-1)*percentNum;
								document.getElementById("res").innerHTML = res+percentNum;
						}else{
								var numL=(-1)*percentNum.toString().length;
								resSlice = res.slice(0, numL);
								percentNum=(-1)*percentNum;
								document.getElementById("res").innerHTML = resSlice+""+percentNum;
						}
					break;
					case "backSpace":
								if(isNaN(res)){
									if((res.toString().length) != 1 ){
										resSlice = res.slice(0, -1);
										document.getElementById("res").innerHTML = resSlice;
									}else{
										document.getElementById("res").innerHTML = "0";
									}
								}else{
									if((res.length) != 1 && (res.length) != 0){
										resSlice = res.slice(0, -1);
										document.getElementById("res").innerHTML = resSlice;
									}else{
										document.getElementById("res").innerHTML = "0";
									}
								}
					break;
					default:
								if(isNaN(objButton)){
									if(res!=0){
										var claclRes=Math.round(calcString(res)*100)/100;
										if (claclRes=='Infinity')
											document.getElementById("res").innerHTML = "Cannot division by zero";
										else 
											document.getElementById("res").innerHTML = claclRes+objButton;
									}else{
										document.getElementById("res").innerHTML = "0";
									}
								}
				}
				
			}
			function calc(){  
				var res = document.getElementById('res').innerHTML;
				var claclRes=Math.round(calcString(res)*100)/100;
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