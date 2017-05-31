// JavaScript Document
window.addEventListener("load", empezar,false);


function empezar(){
	
	var saldoinicial ;
	var precioemt ;
	var preciometro ;
	var preciocons;
	
	var saldoini=document.getElementById("saldoI");
	var precemt = document.getElementById("precEMT");
	var precmetr = document.getElementById("precMetro");
	var preccon = document.getElementById("precCons")
	
	if (localStorage.Saldo == undefined){
		
		saldoinicial = document.getElementById("saldoI").value;
		
		
	} else {
		
		saldoinicial = +localStorage.getItem("Saldo");
		saldoinicial = saldoinicial.toFixed(2);
		saldoini.value=saldoinicial;	
	};
	
	if (localStorage.PrecioEmt== undefined) {
		
		precioemt = document.getElementById("precEMT").value;
		
		
	} else {
		
		precioemt=localStorage.getItem("PrecioEmt");
		precemt.value=precioemt;
		
	};
	
	if (localStorage.PrecioMetro==undefined){
		
		preciometro = document.getElementById("precMetro").value;
		
	} else {
		
		preciometro = localStorage.getItem("PrecioMetro");	
		precmetr.value=preciometro;
	};
	
	if (localStorage.PrecioCons==undefined){
			
		preciocons = document.getElementById("precCons").value;
	} else {
		preciocons=localStorage.getItem("PrecioCons");	
		preccon.value=preciocons;
	};
	
	
	var boton = document.getElementById("aceptar");
	boton.addEventListener("click", grabar, false);
	
	
	
}


function grabar(){
	
	var saldoini=document.getElementById("saldoI");
	var precemt = document.getElementById("precEMT");
	var precmetr = document.getElementById("precMetro");
	var preccon = document.getElementById("precCons")
	
	

	if (saldoini.value == 0) {
		
		alert("Debe ingresar un saldo inicial");
		
	} else if (precemt.value==0){
		
		alert("Debe ingresar un precio para los viajes de EMT");
			
	} else if (precmetr.value==0){
		
		alert("Debe ingresar un precio para los viajes de Metro");
			
	} else if (preccon.value==0){
		
		alert("Debe ingresar un precio para los viajes de Consorcio");
			
	} else {
		
		localStorage.setItem("Saldo",saldoini.value);
		localStorage.setItem("PrecioEmt",precemt.value);
		localStorage.setItem("PrecioMetro",precmetr.value);
		localStorage.setItem("PrecioCons",preccon.value);	
		
		location.href ="index.html";
						
	}
	
	
	
}