/*function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}*/
function empty()
{
	var t=document.getElementById(tf1);
	if(t=="")
	{
		alert("Enter the field");
	}
}