function showInput() {
    document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
                    
		document.getElementById('display1').innerHTML =
					document.getElementById("color_input").value;
					
		document.getElementById('display2').innerHTML =
					document.getElementById("fee").value;
					
				}



var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.getElementById('date').innerHTML=day+"/"+month+"/"+year;
