function roomPlus(){
var room= parseInt(document.getElementById('room').value);
var adult=parseInt(document.getElementById('adult').value);
  if(room<5)
  {
   document.getElementById('room').value=room+1;
   document.getElementById('adult').value=adult+1;
  }
}
function roomMinus()
{
        	var room= parseInt(document.getElementById('room').value);
        	var adult=parseInt(document.getElementById('adult').value);
        	var child=parseInt(document.getElementById('child').value);
      		var roomcapacity=room*4;
      		var people=adult+child;
      			if(room==1)
      			{
						document.getElementById('rminus').disable=true;
						
      			}
      			else if((roomcapacity>=people)&&(child>0)&&(room>0)){
			document.getElementById('room').value=room-1;
            		var roomcount=parseInt(document.getElementById('room').value);							          				
								document.getElementById('adult').value=roomcount*4;
			document.getElementById('child').value=0;
			}
			else if((roomcapacity>=people)&&(room>0))
			{
			document.getElementById('room').value=room-1;
			var roomcount=parseInt(document.getElementById('room').value);
			document.getElementById('adult').value=roomcount*4;
			}

			
			
 }
function adultPlus(){
	 	
        	var room=parseInt(document.getElementById('room').value);
        	var adult=parseInt(document.getElementById('adult').value);
        	var child=parseInt(document.getElementById('child').value);
      		var roomcapacity=room*4;
      		var people=adult+child;
      			if((people>=roomcapacity)&&(room<5))
      			{
      			document.getElementById('room').value=room+1;
      		     	document.getElementById('adult').value=adult+1;
      			}
      			else if(people<20)
      			{
            		document.getElementById('adult').value=adult+1;
        		}
}
		function adultMinus(){

					var room=parseInt(document.getElementById('room').value);
        	var adult=parseInt(document.getElementById('adult').value);
        	var child=parseInt(document.getElementById('child').value);
         	
					 if((adult==room)&&(room>1)&&(child==0))
					 {
						 document.getElementById('room').value=room-1;
						 document.getElementById('adult').value=adult-1;
					 }
					else if((room>=1)&&(adult>1)){
						document.getElementById('adult').value=adult-1;
					 }
					
					 
		
    		
}
		function childPlus(){
		var room=parseInt(document.getElementById('room').value);
        	var adult=parseInt(document.getElementById('adult').value);
        	var child=parseInt(document.getElementById('child').value);
    		var roomcapacity=room*4;
    		var people=adult+child;
			if((adult>=1)&&(people>=roomcapacity)&&(room<5))
      			{
      			 $('#room').val(room+1);
      		     	$('#child').val(child+1);
      			}
      			else if((adult>=1)&&(people<20))
      			{
            		$('#child').val(child+1);
        		}
}
function childMinus(){
	 var child=parseInt(document.getElementById('child').value);
	 var room=parseInt(document.getElementById('room').value);
if((room>=1)&&(child>0))
{
	document.getElementById('child').value=child-1;
}
else if((child==room)&&(room>=1)){
document.getElementById('child').value=child-1;
document.getElementById('room').value=room-1;
}

}




