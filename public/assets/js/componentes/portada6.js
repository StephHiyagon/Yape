const Portada6=(update)=>{
  console.log('pantalla6');
  const divP6=$('<div class="port"></div>');
  const img=$('<img src="assets/image/icons/bcp-logo.png"/>');
  const strong=$('<strong class="fuentL">Registra tu tarjeta debito BCP</strong>');
  const parrafo=$('<p class="fuentL">Por ahora solo aceptamos cuentas de ahorro y/o corrientes en soles </p>');
  const divI1=$('<div class="input2"></div>');
	const input1=$('<input type="text">');
	const imgI1=$('<img src="assets/image/icons/card.png" width="60%"/>');
  const divS=$('<div class="span"></div>');
  const imgS=$('<img src="assets/image/icons/scan.png" width="60%"/>');
  const span=$('<span class="turquesa">Escanear tarjeta</span>');
  const divPa=$('<div></div>');
  const divV=$('<div></div>');
  const parrafo1=$('<p>Fecha de vencimiento</p>');
  const inputM=$('<input id="mes" type="text">');
  const separa=$('<span>/</span>');
  const inputA=$('<input id="anio" type="text">');
  const button=$('<button class="btn btn-info lg" disabled>Continuar</button>');

  divP6.append(img);
  divP6.append(strong);
  divP6.append(parrafo);
  divP6.append(divI1);
  divI1.append(imgI1);
  divI1.append(input1);
  divP6.append(divS);
  divS.append(imgS);
  divS.append(span);
  divP6.append(divPa);
  divPa.append(parrafo1);
  divPa.append(divV);
  divV.append(inputM);
  divV.append(separa);
  divV.append(inputA);
  divP6.append(button);

  function valida(e){
    if(input1.val().length==16){
      input1.css('border-bottom','1px solid green');
    }else{
      return false;
    }

    if(inputM.val()>=01 && inputM.val()<=12){
      console.log(inputM.val());
      inputM.css('border-bottom','1px solid green');
    }else{
      return false;
    }

    if(inputA.val()>=17 && inputM.val()<=24){
      inputA.css('border-bottom','1px solid green');
    }else{
      return false;
    }

    if(input1.val().length==16 && inputM.val().length==2 && inputA.val().length==2){
      $('button').prop('disabled','');
    }
  }

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
			break;
    }
  }
  if(numeros.indexOf(teclado)==-1 && !teclado_especial){
			return false;
  }

  $(e.target).on('keyup',valida);
}

  input1.on('keypress',num);
  inputM.on('keypress',num);
  inputA.on('keypress',num);


  button.on('click',()=>{
    state.pantalla="portada7";
    state.card=input1.val();
    update();
  })
  return divP6;

}
