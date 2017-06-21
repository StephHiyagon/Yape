const Portada8=(update)=>{
  console.log('portada 8');
  const divG=$('<div class="final"></div>');
  const divSup=$('<div></div>');
  const vineta=$('<img src="assets/image/icons/engine.png"/>');
  const cara=$('<img src="assets/image/icons/happy-face.png"/>');
  const parrafo=$('<p>Hola</p>');
  const saldo=$('<div></div>');
  const vin=$('<img src="assets/image/icons/eye.png"/>');
  const span=$('<span>Mostrar Saldos</span>');
  const divMe=$('<div></div>');
  const span2=$('<span>ULTIMOS MOVIMIENTOS</span>');
  const vin2=$('<img src="assets/image/icons/right-arrow-circular-button.png"/>');
  const divPe=$('<div></div>');
  const des=$('<img src="assets/image/icons/icon.png"/>');
  const parrades=$('<p>¿Aún no realizas tu primer pago?</p>');
  const parrades1=$('<p>Es rápido y sencillo</p>');
  const vin3=$('<img src="assets/image/icons/send.png"/>');
  const vin4=$('<img src="assets/image/icons/code-qr.png"/>');

  divG.append(divSup);
  divSup.append(vineta);
  divSup.append(cara);
  divSup.append(parrafo);
  divSup.append(saldo);
  saldo.append(vin);
  saldo.append(span);
  divG.append(divMe);
  divMe.append(span2);
  divMe.append(vin2);
  divG.append(divPe);
  divPe.append(des);
  divPe.append(parrades);
  divPe.append(parrades1);
  divPe.append(vin3);
  divPe.append(vin4);

  return divG;

}
