// 'use strict';
const Portada2=(update)=>{
	console.log('portada2 entraste!!!');
	const div2=$('<div class="port"></div>');
	const img2=$('<img src="assets/image/icons/phone.png"/>');
	const h2=$('<h2 class="h2">Para comenzar validamos tu número</h2>');
	const h4=$('<h4 class="h4">Recibirás un SMS con un código de validación</h4>');
	const divInp=$('<div class="input"></div>');
	const input=$('<input  class="input" type="text">');
	const imgInput=$('<img src="assets/image/icons/phoneandnumber.png" width="40%" />');
	const divCheck=$('<div class="checkdiv"></div>');
	const check=$('<input type="checkbox" value="1">Acepto los <span class="turquesa">términos y condiciones</span>');
	const buttonCont=$('<button id="lg" class="btn btn-default" disabled>Continuar</button>');

	div2.append(img2);
	div2.append(h2);
	div2.append(h4);
	div2.append(divInp);
	divInp.append(imgInput);
	divInp.append(input);
	div2.append(divCheck);
	divCheck.append(check);
	div2.append(buttonCont);

	function num(e){
  console.log(e.which);
  var key=e.keyCode;
  console.log(key);
	var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var numeros="0123456789";
  var especiales="8-37-38-46-164-96-97";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
			teclado_especial=true;
			console.log('estas borrando caracteres');
			input.on('keyup',validaInput(regPhone));
			break;
    }
  }
  if(numeros.indexOf(teclado)==-1 && !teclado_especial){
			return false;
  }

	input.on('keydown',validaInput(regPhone));
	// validaAmbos($('input[type="checkbox"]'));

  }


function validaAmbos(e){
		console.log(check[0].checked);
		// console.log(e.target);
		if(check[0].checked && (input.val().length==9)){
			console.log('seleccionado e input lleno');
			// $('button').removeAttr('disabled');
			$('button').prop('disabled','').css('background',' #fbd43b');
		}else{
			console.log('deshabilita');
			$('button').prop('disabled','disabled');
		}
	};

check.on('click',validaAmbos);
	var regPhone = /^[9]\d{7}$/;

	function validaInput(regEx){
    var input = event.target;
		console.log(input);
    if(!regEx.test(input.value)){
      console.log('tiene menos de 9 dígitos');
			input.style.borderBottom="1.5px solid red";
			if(check[0].checked){
				$('button').prop('disabled','disabled');
			}
    }else{
    	console.log('tiene 9 dígitos');
			input.style.borderBottom="1.5px solid #37c603";
			if(check[0].checked){
				$('button').prop('disabled','').css('background',' #fbd43b');;
			}
			console.log("entraste a validar checked");
    }
	};

	// if(input.val().length==9 && )

	input.on({'keypress':num});

	// var code;
	buttonCont.on('click',()=>{
		console.log(state.pantalla);
		console.log(input.val());

		var code = $.post('api/registerNumber',{phone:input.val(), terms:true},(response)=>{
			console.log(response);
			console.log(response.message);

			if(response.message == "El número ya existe"){
				alert('Error: '+ response.message);
				state.pantalla="portada2";
				update();
			}else{
				console.log(response.data.phone);
				state.pantalla='portada3';
				state.code=code;

				update();
			}

			return response;

		},'json');


	})

	return div2;

}
