
		function selecteddeals(){
			if(document.getElementById('s1').checked==false & document.getElementById('s2').checked==false & document.getElementById('s3').checked==false & document.getElementById('s4').checked==false & document.getElementById('s5').checked==false & document.getElementById('s6').checked==false  ){
alert("please select a deal");
			}
			else
			{
document.getElementById('delivery').style.display="block";
document.getElementById('delivery').scrollIntoView();
			}
		}
		function delivery2(){
			 if(document.getElementById('name').value=="" || document.getElementById('add').value=="" || document.getElementById('pho').value==""){
				alert("please enter your details");
			}
			else{
				alert("Thank you for your order! We will soon give you a confirmation call to confirm your order.");
				document.getElementById('name').value="";
				document.getElementById('add').value="";
				document.getElementById('pho').value=""
			}
		}


     function about(){
		if(document.getElementsByClassName('aboutt').style.display=="none"){
document.getElementsByClassName('aboutt').style.display="block";
}
if(document.getElementsByClassName('aboutt').style.display=="block"){
	document.getElementsByClassName('aboutt').style.display="none";
	}
     }
	 var s01=document.getElementById('s01');
	 var s02=document.getElementById('s02');
	 var s03=document.getElementById('s03');
	 var s04=document.getElementById('s04');
	 var s05=document.getElementById('s05');
	 var s06=document.getElementById('s06');
	 var s07=document.getElementById('s07');
	 var s08=document.getElementById('s08');
	 var s09=document.getElementById('s09');
	 var s010=document.getElementById('s010');

	 var q1=document.getElementById('q1');
	 var q2=document.getElementById('q2');
	 var q3=document.getElementById('q3');
	 var q4=document.getElementById('q4');
	 var q5=document.getElementById('q5');
	 var q6=document.getElementById('q6');
	 var q7=document.getElementById('q7');
	 var q8=document.getElementById('q8');
	 var q9=document.getElementById('q9');
	 var q10=document.getElementById('q10');

	 
	 function selectfood(){
		if(s01.checked==false & s02.checked==false 
		& s03.checked==false & s04.checked==false & s05.checked==false
		 & s06.checked==false & s07.checked==false
		 & s08.checked==false & s09.checked==false
		 & s010.checked==false){
alert("please select something to order");
		}
		else
			{
var bill=0;
var items=0;
if(s01.checked==true)  {bill=bill+440*q1.value;  items=items+1;  }
if(s02.checked==true)  {bill=bill+460*q2.value; items=items+1;  }
if(s03.checked==true)  {bill=bill+360*q3.value; items=items+1;  }
if(s04.checked==true)  {bill=bill+300*q4.value; items=items+1;  }
if(s05.checked==true)  {bill=bill+320*q5.value; items=items+1;  }
if(s06.checked==true)  {bill=bill+980*q6.value; items=items+1;  }
if(s07.checked==true)  {bill=bill+400*q7.value; items=items+1;  }
if(s08.checked==true)  {bill=bill+400*q8.value; items=items+1;  }
if(s09.checked==true)  {bill=bill+220*q9.value; items=items+1;  }
if(s010.checked==true)  {bill=bill+320*q10.value; items=items+1;  }

             


				document.getElementById('picture').style.display="none";
document.getElementById('deliveryfood').style.display="block";
document.getElementById('deliveryfood').scrollIntoView();
document.getElementById('items').innerText=items;
document.getElementById('bill').innerText=bill;

			}
	}