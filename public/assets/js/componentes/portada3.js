const Portada3=(update)=>{
  console.log('estas en la portada3');
  var codeG;
  alert('token en consola');
  setTimeout(function(){
    var codigo=state.code;
    console.log(state.code);
    console.log(codigo.responseJSON);
    console.log(codigo.responseJSON.data.code);
    codeG=codigo.responseJSON.data.code;
    console.log(codeG);
    comparar(codeG);
    // if(!comparar(codeG)){
    //   setInterval( function code(){
    //     var phone=spanP.text();
    //     console.log(phone);
    //     $.post('api/resendCode',{phone:phone} ,(resp) =>{
    //       console.log(resp);
    //       console.log(resp.data)})
    //       var codeN=resp.data;
    //       console.log(codeN);
    //       comparar(codeN);
    //       // return codeG=
    //   }
    //   ,21000);
    // }

  },21000);

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
  parrafo.append(spanP);
  divP3.append(divI);
  divI.append(imgI);
  divI.append(input);
  divP3.append(parrafo1);

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
        var phone=spanP.text();
        var nuevoCode;
        $.post('api/resendCode',{phone:phone} ,(resp) =>{
            console.log(resp);
            console.log(resp.data);
            return nuevoCode=resp.data;
          })

        setTimeout(function(){
          alert('Token:' + nuevoCode);
          console.log(nuevoCode);
          comparar(nuevoCode);
        },20000);
        // comparar(nuevoCode);
      }

      // if(input.val().length!=6 || input.val()!=elem){
      //   setInterval( function code(){
      //    var phone=spanP.text();
      //    console.log(phone);
      //    $.post('api/resendCode',{phone:phone} ,(resp) =>{
      //    console.log(resp);
      //    console.log(resp.data);
      //    comparar(resp.data);})
      //  },21000);
      // }
    // })
  }
  // setInterval( function code(){
  //   var phone=spanP.text();
  //   console.log(phone);
  //   $.post('api/resendCode',{phone:phone} ,(resp) =>{
  //     console.log(resp);})
  // }
  // ,21000);

  return divP3;
}
