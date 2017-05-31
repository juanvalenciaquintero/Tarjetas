// JavaScript Document

window.addEventListener("load", empezar, false);



function empezar() {
	
	var boton = document.getElementById("aceptar");
	
	boton.addEventListener("click", recargar, false);
	
	
	
	
}


function recargar(){
	
	var famNum = document.getElementById("familianum");
		
	var importerecarga = document.getElementById("recarga").value;
	
	var clave = 'Saldo';
		
	var contenidosaldo = localStorage.Saldo;
	
	var mensaje = confirm("Seguro que quiere recargar " + importerecarga + " euros?");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		
		if (famNum.checked==true){
			
			importerecarga=+importerecarga*1.20;
			
			
		}
		
		importerecarga= +importerecarga.toFixed(2);
		
		contenidosaldo = +contenidosaldo + (+importerecarga);
	
		localStorage.setItem(clave, contenidosaldo);
		
		alert("Recarga realizada");
		
		grabar_historico(importerecarga);
		
		location.href ="index.html";
		
	}	
	
	location.href ="index.html";
	
}

function grabar_historico(importe){
	
	var time = new Date();
	

	
	/*var fecha = time.toString();*/

	var fecha = formattedDate(time);
	
	var minut = time.getMinutes();
	var minutos = minut.toString();
	if (minutos.length<2){
		minutos= '0'+ minutos;
	}
	var segund = time.getSeconds();
	var segundos= segund.toString();
	if (segundos.length<2){
		segundos= '0'+ segundos;
	}
	var horas=time.getHours();
	
	
	var hora = horas + ":" + minutos + ":" + segundos;
	
	fecha = fecha + "  -  " + hora + "   -   " + importe + " Euros";

	
	var rec = localStorage.getItem("Recarga");
	
	var proximarecarga = "Recarga"+rec;
	
	localStorage.setItem(proximarecarga,fecha);
	
	rec = +rec + 1;
	
	localStorage.setItem("Recarga",rec);
	
	
}

function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
}