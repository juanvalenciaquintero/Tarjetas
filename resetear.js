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
		
		alert("Borrado realizado");
		
		
		
	}	
	
	location.href ="index.html";
	
	
	
	
}