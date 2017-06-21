const Portada3=(update)=>{
  console.log('estas en la portada3');
  var codeG;
  setTimeout(function(){
    var codigo=state.code;
    console.log(state.code);
    console.log(codigo.responseJSON);
    console.log(codigo.responseJSON.data.code);
    codeG=codigo.responseJSON.data.code;
    console.log(codeG);
    comparar(codeG);
  },6000);

  const divP3=$('<div class="port3"></div>');
  const img=$('<img src="assets/image/icons/message.png"/>');
  const strong=$('<strong>Ahora ingresa tu código</strong>');
  const parrafo=$('<p>Enviamos un SMS con el código de validación al número </p>');
  const spanP=$('<span class="phone"></span>');

  divP3.append(img);
  divP3.append(strong);
  divP3.append(parrafo);
  parrafo.append(spanP);

  function comparar(elem){
    alert('elem:' + elem);
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
