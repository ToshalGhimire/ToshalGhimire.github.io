var elem = document.getElementById('Container');
elem.style.width =  70+ "%";

function toggleMenu(){
	var x = document.getElementById("navbarList");
	var menu = document.getElementById("handle");
	
	if(x.className == "navbar"){
		
		x.className += "responsive";
	}else{
		x.className = "navbar";
	}
	
}

