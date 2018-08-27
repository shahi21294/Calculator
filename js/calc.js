			function getKey(objButton){  
				var opr = ["+", "-", "/", "*"];
				var res = document.getElementById('res').innerHTML;
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
			}
			function calc(){  
				var res = document.getElementById('res').innerHTML;
				var claclRes=calcString(res);
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