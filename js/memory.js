var image=[];
image[0]="image/image0.png";
image[2]="image/image1.jpg";
image[4]="image/image2.png";
image[6]="image/image3.png";
image[8]="image/image4.png";
image[10]="image/image5.png";
image[12]="image/image6.png";
image[14]="image/image7.png";

var previous,current;
var previousid,currentid;
var count=0;

var listy=[];
var unicheck=[];
for (var i = 0;i<16;i++) 
{
	unicheck[i]=1;	
}

//check for uniqueness
var j=0;
while(j<16)
{
	var ran=Math.floor(Math.random() * (16));
	if(unicheck[ran] != 0)
	{
		listy[j]= ran;
		unicheck[ran] = 0;
		j++;
	}
}
for (var i = 0;i<16;i++) 
{
	console.log(listy[i]);	
} 

function index(member)
{
	for (var i = 0; i <16; i++) {
		if(listy[i]==member)
			return i;
	}
}

function change(changeit)
{
	var x=changeit.split("-");
	//var y=listy.indexOf(x[1]);
	var y=index(x[1]); 
	console.log(x[1]);
	console.log(y);

		if(count>1)
		{
			previous=current;
			previousid=currentid;
		
			if(y % 2 == 0)
			{
				current=image[y];
				document.getElementById(changeit).src=image[y];
			}
			else
			{
				current=image[y-1];
				document.getElementById(changeit).src=image[y-1];
			}
			currentid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);
	  }
	  else if(count==0)          //when 1st and 2nd turn
	  {
	 		
			if(y%2==0)
			{
				previous=image[y];
				document.getElementById(changeit).src=image[y];
			}
			else
			{
				previous=image[y-1];
				document.getElementById(changeit).src=image[y-1];
			}
			previousid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(previousid).src="image/pattern.jpg"},500);
	  }
	  else if(count==1)
	  {
	  
			if(y%2==0)
			{
				current=image[y];
				document.getElementById(changeit).src=image[y];
			}
			else
			{
				current=image[y-1];
				document.getElementById(changeit).src=image[y-1];
			}
			currentid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);
	  }



	if(count>1)
	{
		if(previous==current && previousid != currentid)						//so that on 2 clicks over the same div it should not click.
		{
		//document.getElementById(previousid).src='image/tick.png';
		//document.getElementById(currentid).src='image/tick.png';
		console.log(count);
		console.log(previousid);
		console.log(currentid);
		console.log(previous);
		console.log(current);
			
			// document.getElementById(previousid).disabled=true;
			// document.getElementById(currentid).disabled=true;
			document.getElementById(previousid).onclick="";
			document.getElementById(currentid).onclick="";
			document.getElementById(previousid).src=previous;
			document.getElementById(currentid).src=current;
			document.getElementById(changeit).id=" ";

		// document.getElementById(previousid).setAttribute('disabled','disabled');
		// document.getElementById(currentid).setAttribute('disabled','disabled');

		// $("previousid").attr("disabled","disabled");
		// $("currentid").attr("disabled","disabled");

		}
		else if(previous!=current && previousid!=currentid)
		{
		//console.log(count);
		console.log(previousid);
		console.log(currentid);
		console.log(previous);
		console.log(current);
			document.getElementById(previousid).src=previous;
			document.getElementById(currentid).src=current;
			window.setTimeout(function (){document.getElementById(previousid).src="image/pattern.jpg"},500);
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);  
		}

	}
}

