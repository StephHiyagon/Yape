const Portada8=(update)=>{
  console.log('portada 8');
  const divG=$('<div class="final"></div>');
  const divSup=$('<div class="morClaro"></div>');
  const vineta=$('<img class="vineta" src="assets/image/icons/engine.png"/>');
  const cara=$('<img class="face" src="assets/image/icons/happy-face.png"/>');
  const parrafo=$('<p class="hola">Hola</p>');
  const saldo=$('<div class="saldo"></div>');
  const vin=$('<img src="assets/image/icons/eye.png"/>');
  const span=$('<span class="turquesa">Mostrar Saldos</span>');
  const divMe=$('<div class="movi"></div>');
  const span2=$('<span class="marg">ULTIMOS MOVIMIENTOS</span>');
  const vin2=$('<img class="imgM" src="assets/image/icons/right-arrow-circular-button.png"/>');
  const divPe=$('<div class="peque"></div>');
  const des=$('<img class="des" src="assets/image/icons/icon.png"/>');
  const divParra=$('<div class="divPar"></p>');
  const parrades=$('<p>¿Aún no realizas tu primer pago?</p>');
  const parrades1=$('<p>Es rápido y sencillo</p>');
  const vin3=$('<img class="vin3" src="assets/image/icons/send.png"/>');
  const vin4=$('<img class="vin4" src="assets/image/icons/code-qr.png"/>');

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
  divPe.append(divParra);
  divParra.append(parrades);
  divParra.append(parrades1);
  divPe.append(vin3);
  divPe.append(vin4);

  return divG;

}
