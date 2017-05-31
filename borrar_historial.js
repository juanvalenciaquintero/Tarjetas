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
		var texto = linea.innerHTML + "<div><strong>" + i + ": </strong>" + fecha + "</div>";
		
		
		linea.innerHTML=texto;
		
		
		
	}
	
	
	var botonBorrar = document.getElementById("borrar");
	
	botonBorrar.addEventListener("click", borrar, false);
		
		
	
	
	
}

function borrar(){
	
	var movimientos = +localStorage.getItem("Movimiento");

	var mensaje = confirm("¿Seguro que quiere borrar el historial de movimientos?");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		
		for (i=(movimientos-1); i>=1; i--){
		
		var mov = "Movimiento" + i;
		
		localStorage.removeItem(mov);
		
	}
	 	alert("Historial borrado");
	 
		localStorage.Movimiento=1;
		
	}
	location.href = "index.html";
}

function volver(){
	
	location.href = "index.html";
	
	
}