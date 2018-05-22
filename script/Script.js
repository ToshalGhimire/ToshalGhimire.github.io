function toggleMenu(){
	var x = document.getElementById("navbarList");
	
	if(x.className == "navbar"){
		x.className += "responsive";
	}else{
		x.className = "navbar";
	}
	
}