// JavaScript Document
window.addEventListener("load", resetear, false);

function resetear() {
	
	
	
	var mensaje = confirm("¿Seguro que quiere borrar los datos? ");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		
		localStorage.removeItem('Saldo');
		
		localStorage.removeItem("PrecioEmt");
		localStorage.removeItem("PrecioMetro");
		localStorage.removeItem("PrecioCons");
		
		borrar_historial();
		borrar_recargas();
		
		alert("Borrado realizado");
		
		var boton = document.getElementById("aceptar");
		boton.addEventListener("click", volver, false);
						
	}	else {
		
		
		location.replace("index.html");
		
		
	}
	
	
	
			
}

function volver(){
	
	location.replace("index.html");
	
	
}

function borrar_historial(){
	
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
	
}


function borrar_recargas(){
	
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
	
}
