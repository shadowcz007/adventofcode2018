//01
let qs=document.body.innerText.split('\n');

let start=0;

for(var i=0;i<qs.length;i++){

	start=start+(~~qs[i]);

};

console.log(start)



//02

var s=document.body.innerText.split('\n');
s=s.slice(0,s.length-1);

var j=0;res={0:1};

var isDone=false;
var i=0;
var c=0;

while(isDone==false){

	j=j+(~~s[i]);

	if(res[j]){

		console.log('!!!--'+j,c);
		isDone=true;

	}else{
		
		res[j]=1;

	};

	i++;
	c++;
	//console.log(i);

	if(i>=s.length){i=0;}
}

