//01
function count(_str){

var ss=_str.split('');
var c={};

ss.forEach((s)=>{
	if(c[s]){
		c[s]+=1;
	}else{
		c[s]=1;
	};
});
let ks=Object.keys(c);
let res={2:{},3:{}};

ks.forEach((k)=>{		
		if(c[k]==2){
			res[2][k]=1
		};
		if(c[k]==3){
			res[3][k]=1
		};
});

//console.log(c);
return res;

};

var all=document.body.innerText.split('\n');;
var res={2:0,3:0};
all.forEach((a)=>{

	let r=count(a);
	console.log(r,Object.keys(r[2]).length)
	if(Object.keys(r[2]).length){
		res[2]+=1
	};
	if(Object.keys(r[3]).length){
		res[3]+=1
	};
});

var result=res[2]*res[3];
console.log(result);



//02
var all=document.body.innerText.split('\n');

for(var i=0;i<all.length;i++){
	
	var a=all[i];
	
	for(var j=0;j<all.length;j++){

		var b=all[j];

		if(i!=j){
			let check=a.length;
			for(var t=0;t<a.length;t++){

				if(a[t]==b[t]){
	
					check-=1;

				};

			};
			
			if(check==1){
				console.log(a,b)
			};
			
		};
	}
}
