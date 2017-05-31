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
	
	
	
	var botonBorrar = document.getElementById("borrar");
	
	botonBorrar.addEventListener("click", borrar, false);
		
		
	
	
	
}

function borrar(){
	
	var recargas = +localStorage.getItem("Recarga");

	var mensaje = confirm("¿Seguro que quiere borrar el historial de recargas?");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		
		for (i=(recargas-1); i>=1; i--){
		
		var rec = "Recarga" + i;
		
		localStorage.removeItem(rec);
		
	}
	 	alert("Historial borrado");
	 
		localStorage.Recarga=1;
		
	}
	location.href = "index.html";
}

function volver(){
	
	location.href = "index.html";
	
	
}