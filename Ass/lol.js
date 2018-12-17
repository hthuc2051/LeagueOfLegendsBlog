	var pos = 0; // vị trí hiện hành !
	var cur = 0;
var roledetails = [
	{
		name:"ASSASSINS CRAVE THE HUNT",
		detail:"Masters of precision, Assassins are agile hunters on the lookout for the perfect kill."
	},
	{
		name:"FIGHTERS LOVE TO DUEL",
		detail:"A balance of power and defence, Fighters are born to brawl, preferring their bouts up close and personal."
	},
	{
		name:"MAGES SURGE WITH POWER",
		detail:"Aggressive casters, Mages seek to destroy opponents through a range of mystical attacks, spells and abilities."
	},
	{
		name:"MARKSMEN BRING THE PAIN",
		detail:"Ranged fighters, Marksmen are powerful but fragile. While they rely on their team to soak up damage, teams rely on them to deal it."
	},
	{
		name:"SUPPORTS HAVE YOUR BACK",
		detail:"Stalwart defenders, Supports control the battlefield by augmenting allies and locking down enemies."
	},
	{
		name:"TANKS CAN TAKE IT",
		detail:"Resilient bruisers, Tanks excel at shrugging off blows that would obliterate lesser allies."
	}	
];
function pre(){
		if(pos ==0)
			return;
		pos = pos+1350;
		cur--;
		var back = document.getElementById("trong");
		back.style.transform="translateX("+pos+"px)";
		back.style.transition="all 0.5s";
		showrole(cur);
	
		var div_list=document.getElementById("roleicon");
		var arr=div_list.getElementsByTagName("img"); // arr dc xem là 1 mảng !!
		for(var i = 0; i<arr.length;i++){
			arr[i].style.opacity=0.4;
			arr[i].style.transform="scale(1,1)";
			arr[cur].style.opacity=1;
			arr[cur].style.transform="scale(1.2,1.2)";	
		}
}
	function next(){
		if(pos ==-6750)
			return;
		cur++;
		pos = pos-1350;
		var go = document.getElementById("trong");
		go.style.transform="translateX("+pos+"px)";
		go.style.transition="all 0.5s";
		showrole(cur);
		var div_list=document.getElementById("roleicon");
		var arr=div_list.getElementsByTagName("img"); // arr dc xem là 1 mảng !!
		for(var i = 0; i<arr.length;i++){
			arr[i].style.opacity=0.4; // toàn bộ phần tử trong mảng arr bị opacity = 0.4 nhưng dòng dưới mình ép 
			arr[i].style.transform="scale(1,1)";// thằng arr[cur] cho nó opacity =1 vs phóng to lên !
			arr[cur].style.opacity=1;
			arr[cur].style.transform="scale(1.2,1.2)";
		}
		
}
function showrole(x){
	var detailroles_name = document.getElementsByClassName("detailroles_name");
	var detailroles_details = document.getElementsByClassName("detailroles_details");
	detailroles_name[0].innerHTML = roledetails[x].name;
	detailroles_details[0].innerHTML = roledetails[x].detail;
}

function movedown(){
	window.scrollTo(0,770);
}