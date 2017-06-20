'use strict';
const Portada1 = (update)=>{
	var images=[{image:"assets/image/icons/icon-people.png", principal:"Paga a tus amigos", parrafo:"Paga a quien quieras desde donde quieras, sin usar efectivo"},
{image:"assets/image/icons/happy-person.png", principal:"Sin número de cuenta", parrafo:"Elige a quién pagar desde tu lista de contactos"},
{image:"assets/image/icons/group-people.png", principal:"Gratis y Seguro", parrafo:"La transferencia es inmediata y gratuita de una cuenta a otra"}];
	const divP=$('<div id="slide"></div>');
	const ul=$('<ul></ul>');
	images.forEach((elem)=>{
		const li=$('<li></li>');
		const img=$('<img src="'+elem.image+'"/>');
		const divCap=$('<div class="caption"></div>');
		const strong=$('<h2>'+elem.principal+'</h2>');
		const parrafo=$('<h3>'+elem.parrafo+'</h3>');
		li.append(img);
		li.append(divCap);
		divCap.append(strong);
		divCap.append(parrafo);
		ul.append(li);
	})
	console.log(images.length);
	const ol=$('<ol id="indicator"></ol>');
	const botonR=$('<button class="btn btn-warning" id="registro">Registarme</button>')
	for(var i=1;i<=images.length;i++){
		const liI=$('<li role-slide="'+i+'"><span class="icon-radio-unchecked"></span></li>');
		ol.append(liI);
	}

	divP.append(ul);
	divP.append(ol);
	divP.append(botonR);
	ol.on('click','li',(e) => {
		console.log(e.target);
		console.log(e.currentTarget);
    var role=$(e.currentTarget).attr("role-slide");
    console.log("role",role);

    $("#slide ul li").hide();
    $("#slide ul li:nth-child("+ role +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    $(e.currentTarget).css({opacity:"1"});

  });

	botonR.on('click',()=>{
		console.log(state.pantalla);
		state.pantalla='portada2';
		update();
	})
	return divP;
}
