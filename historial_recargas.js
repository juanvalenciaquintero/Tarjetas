// JavaScript Document
window.addEventListener("load", empezar, false);



function empezar() {
	
	var linea = document.getElementById("lineas");
	
	var boton = document.getElementById("aceptar");
	
	boton.addEventListener("click", volver, false);
	
	var recargas = +localStorage.getItem("Recarga");
	
	for (i=(recargas-1); i>=1; i--){
		
		var rec = "Recarga" + i;
		
		var fecha = localStorage.getItem(rec);
		var texto = linea.innerHTML + "<div><strong>" + i + ":</strong> " + fecha + "</div>";
		
		
		linea.innerHTML=texto;
		
		
		
	}
	
	
	
}

function volver(){
	
	
	location.replace("index.html");
	
	
}