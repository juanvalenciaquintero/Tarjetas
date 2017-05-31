// JavaScript Document

window.addEventListener("load", empezar, false);



function empezar() {
	
	var linea = document.getElementById("lineas");
	
	var boton = document.getElementById("aceptar");
	
	boton.addEventListener("click", volver, false);
	
	var movimientos = +localStorage.getItem("Movimiento");
	
	for (i=(movimientos-1); i>=1; i--){
		
		var mov = "Movimiento" + i;
		
		var fecha = localStorage.getItem(mov);
		var texto = linea.innerHTML + "<div><strong>" + i + ":</strong> " + fecha + "</div>";
		
		
		linea.innerHTML=texto;
		
		
		
	}
	
	
	
}

function volver(){
	
	location.href = "index.html";
	
	
}