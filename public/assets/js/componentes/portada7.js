const Portada7=(update)=>{
  console.log('portada7');
  const divP7=$('<div class="port"></div>');
  const img=$('<img src="assets/image/icons/bcp-logo.png"/>');
  const strong=$('<strong class="h2">Ingresa la clave de tu tarjeta</strong>');
  const parrafo=$('<p class="h4">Tarjeta ****3263</p>');
  const divI1=$('<div class="input"></div>');
	const input1=$('<input type="password" class="input" placeholder="----">');
	const imgI1=$('<img class="icoinp" src="assets/image/icons/lock.png" width="40%"/>');
  const button=$('<button class="btn btn-info" id="bp7" disabled>Registrar</button>');

  divP7.append(img);
  divP7.append(strong);
  divP7.append(parrafo);
  divP7.append(divI1);
  divI1.append(imgI1);
  divI1.append(input1);
  divP7.append(button);

  function valida(e){
    if(input1.val().length==4){
      $('button').prop('disabled','').css('background',' #fbd43b');
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
  // console.log(state.code);

  button.on('click',()=>{
    console.log(state.user);
    var phone=state.user.responseJSON.data.phone;
    state.pantalla="portada8";
    console.log(state.card);
    $.post('api/registerCard',{phone:phone, card:state.card, cardPassword:input1.val()},(response)=>{
			console.log(response);
		},'json');
    update();
  })

  return divP7;

}
