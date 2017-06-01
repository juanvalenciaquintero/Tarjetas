// JavaScript Document

window.addEventListener("load", empezar, false);



function empezar() {
	
	var linea = document.getElementById("lineas");
	
	var boton = document.getElementById("aceptar");
	
	boton.addEventListener("click", volver, false);
	
	var movimientos = +localStorage.getItem("Movimiento");
	
	var mov;
	var fecha;
	var texto;
	
	for (i=(movimientos-1); i>=1; i--){
		
		 mov = "Movimiento" + i;
		
		fecha = localStorage.getItem(mov);
		texto = linea.innerHTML + "<div id='lineas'><strong>" + i + ":</strong> " + fecha + "</div>";
		
		
		linea.innerHTML=texto;
		
		
		
	}
	
	
	
}

function volver(){
	
	
	location.replace("index.html");
	
	
}