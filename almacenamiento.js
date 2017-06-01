// JavaScript Document
window.addEventListener("load", comenzar, false);



function comenzar() {
	
	var clave = 'Saldo';
	
	if (localStorage.Saldo == undefined){
		
		location.href ="datosIniciales.html";
		
	}
	
	if (localStorage.Movimiento==undefined){
		
		localStorage.Movimiento=1;
			
	} else {
		
		var ultimomovimiento = +localStorage.getItem("Movimiento");
		
	}
	
	if (localStorage.Recarga==undefined){
		
		localStorage.Recarga=1;
	} 
	
	var zonaSaldo = document.getElementById("zonaSaldo");
		
	leer_mostrar(clave);
			
	var emt=document.getElementById("zonaEmt");
	
	emt.addEventListener("click", pagarEmt, false);
	
	var metro = document.getElementById("zonaMetro");
	
	metro.addEventListener("click", pagarMetro, false);
	
	var cons = document.getElementById("zonaConsorcio");
	
	cons.addEventListener("click", pagarConsorcio, false);
	
		var apagado = document.getElementById("apagado");
	
	apagado.addEventListener("click", apagar, false);
	
}


function apagar(){
	
	var mensaje = confirm("¿Seguro que quiere abandonar la aplicación?");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		
		window.close();	
			
		}
	
	
}
function pagarEmt(){
	
	var precio = localStorage.getItem("PrecioEmt"); 
	
	var clave='Saldo';
	
	var saldo =  localStorage.getItem(clave);
	
	saldo = saldo - precio;
	
	if (saldo<0){
		
		alert("Ha habido un error en los calculos. El saldo es 0€");
		saldo =0;
			
	}
	
	
	localStorage.setItem(clave,saldo);
	
	var origen="Emt";
	
	grabar_historico(origen);
	
	
	leer_mostrar(clave);
		
}

function pagarMetro(){
	
	var precio = localStorage.getItem("PrecioMetro"); 
	
	var clave='Saldo';
	
	
	var saldo =  localStorage.getItem(clave);
	
	saldo = saldo - precio;
	
	if (saldo<0){
		
		alert("Ha habido un error en los calculos. El saldo es 0€");
		saldo =0;
			
	}
	
	localStorage.setItem(clave,saldo);
	
	var origen="Metro";
	
	grabar_historico(origen);
	
	leer_mostrar(clave);
		
}

function pagarConsorcio(){
	
	var precio = localStorage.getItem("PrecioCons"); 
	
	var clave='Saldo';
	
	
	var saldo =  localStorage.getItem(clave);
	
	saldo = saldo - precio;
	
	if (saldo<0){
		
		alert("Ha habido un error en los calculos. El saldo es 0€");
		saldo =0;
			
	}
	
	localStorage.setItem(clave,saldo);
	
	var origen="Consorcio";
	
	grabar_historico(origen);
	
	leer_mostrar(clave);
		
}

function grabar_historico(origen){
	
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
	
	fecha = fecha + "  -  " + hora + "  -  " + origen;

	
	var mov = localStorage.getItem("Movimiento");
	
	var proximomovimiento = "Movimiento"+mov;
	
	localStorage.setItem(proximomovimiento,fecha);
	
	mov = +mov + 1;
	
	localStorage.setItem("Movimiento",mov);
	
	
}

function leer_mostrar(clave){
	
	
	
	var contenidosaldo = +localStorage.getItem(clave);
	
	var cont = contenidosaldo.toFixed(2);
	
	zonaSaldo.innerHTML="<div>" + clave + ": " + cont + "</div>";
	
	
}

function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
}

	