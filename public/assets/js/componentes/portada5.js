const Portada5=(update)=>{
  console.log('pantalla5');
  const divP5=$('<div class="yape"></div>');
  const imgP=$('<img src="assets/image/icons/check.png"/>');
  const parra1=$('<p class="fuent6">¡Bien!</p>');
  const parra2=$('<p class="fuent5">Ahora puedes usar Yape</p>');

  divP5.append(imgP);
  divP5.append(parra1);
  divP5.append(parra2);

  setTimeout(function(){
    state.pantalla="portada6";
    update();
  },3000);

  return divP5;
}
