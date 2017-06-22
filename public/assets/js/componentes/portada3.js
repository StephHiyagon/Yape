const Portada3=(update)=>{
  console.log('estas en la portada3');
  const divP3=$('<div class="port"></div>');
  const img=$('<img src="assets/image/icons/message.png"/>');
  const strong=$('<strong class="h2">Ahora ingresa tu código</strong>');
  const parrafo=$('<p class="h4">Enviamos un SMS con el código de validación al número </p>');
  const spanP=$('<span class="phone"></span>');
  const divI=$('<div class="input"></div>');
	const input=$('<input class="input" type="text">');
	const imgI=$('<img class="icoinp" src="assets/image/icons/lock.png"width="40%"/>');
  const parrafo1=$('<p class="h4">Reintentar en <img src="assets/image/icons/clock.png" /> 21 segundos</p>');

  divP3.append(img);
  divP3.append(strong);
  divP3.append(parrafo);
  divP3.append(divI);
  divI.append(imgI);
  divI.append(input);
  divP3.append(parrafo1);

  setTimeout(function(){
    parrafo.append(spanP);
    $('.phone').text(phone);
  },2000);

  var codeG;
  var phone;
  alert('token en consola');
  setTimeout(function(){
    var codigo=state.code;
    console.log(state.code);
    console.log(codigo.responseJSON);
    console.log(codigo.responseJSON.data.code);
    codeG=codigo.responseJSON.data.code;
    phone=codigo.responseJSON.data.phone;
    console.log(codeG);

  setTimeout(function(){
    comparar(codeG);
  },6000);

  },1000);


  function comparar(elem){

    // input.on('keypress',()=>{
      console.log(input.val());
      if(input.val().length>1 && input.val()==elem){
        setTimeout(function(){
          state.pantalla="portada4";
          update();
        },1000);
      }

      if(input.val().length>=0 && input.val()!=elem){
        // var phone=spanP.text();
        console.log(phone);
        var nuevoCode;
        $.post('api/resendCode',{phone:phone} ,(resp) =>{
            console.log(resp);
            console.log(resp.data);
            return nuevoCode=resp.data;
          })

        setTimeout(function(){
          console.log(nuevoCode);
          comparar(nuevoCode);
        },20000);

      }

  }

  return divP3;
}
