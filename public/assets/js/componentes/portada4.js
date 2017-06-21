const Portada4=(update)=>{
  console.log('portada4');
  const divP4=$('<div class="port4"></div>');
  const img=$('<img src="assets/image/icons/lockone.png"/>');
  const strong=$('<strong class="fuentL">Crea tu usuario Yape</strong>');
  const parrafo=$('<p class="fuentL">Ingresa un nombre, email y clave de usuario </p>');
  const divI1=$('<div class="input2"></div>');
	const input1=$('<input type="text" placeholder="Nombre">');
	const imgI1=$('<img src="assets/image/icons/user.png" width="60%"/>');
  const divI2=$('<div class="input2"></div>');
	const input2=$('<input type="text" placeholder="correo@ejemplo.com">');
	const imgI2=$('<img src="assets/image/icons/message-gray.png" width="60%"/>');
  const divI3=$('<div class="input2"></div>');
	const input3=$('<input type="text" placeholder="Ingresa clave de 6 dígitos">');
	const imgI3=$('<img src="assets/image/icons/lock.png" width="60%"/>');
  const parrafo1=$('<p class="fuentL">Cuida esta clave como oro, es tu acceso a Yape.</p>');
  const button=$('<button class="btn btn-info lg" disabled>Continuar</button>');

  divP4.append(img);
  divP4.append(strong);
  divP4.append(parrafo);
  divP4.append(divI1);
  divI1.append(imgI1);
  divI1.append(input1);
  divP4.append(divI2);
  divI2.append(imgI2);
  divI2.append(input2);
  divP4.append(divI3);
  divI3.append(imgI3);
  divI3.append(input3);
  divP4.append(parrafo1);
  divP4.append(button);

  function text(e){
    if(e.target.getAttribute("type")=="text"){
      var txt="";
      var separa=e.target.value.split(" ");
    	separa.forEach(function(e){
        return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
      var imp=txt.trim();
      e.target.style.borderBottom="1px solid green";
    	return e.target.value=imp;

    }
  }

  function email(e){
    var correo=e.target.value;
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    console.log("no válido");
    e.target.style.borderBottom="1px solid red";
  }else{
    console.log("válido");
    e.target.style.borderBottom="1px solid green";
  }
}

  function contrasena(e){
    console.log(e.target);
    var clave=$(e.target).val();
    console.log(clave);
    console.log(input2.val().length);
    if(clave.length==6 && input1.val().length!=0 && input2.val().length != 0){
      console.log('tiene 6 dígitos, correo validado y nombre completado');
      e.target.style.borderBottom="1px solid green";
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

  input3.on('keyup',contrasena);
}

  input1.on('blur',text);
  input2.on('blur',email);
  input3.on('keypress',num);

  button.on('click',()=>{
    state.pantalla="portada5";
    var codigoP=state.code;
    console.log(codigoP);
    console.log(codigoP.responseJSON.data.phone);
    console.log(input1.val());
    console.log(input2.val());
    console.log(input3.val());
    var user=$.post('api/createUser',{phone:codigoP.responseJSON.data.phone, name:input1.val(),
                             email:input2.val(), password:input3.val()},(response)=>{
			console.log(response);
		},'json');

    update();
    state.user=user;
  })


  return divP4;

}
