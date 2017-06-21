'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }

  if(state.pantalla==null){
  wrapper.append(Portada1(update));
  }

  if(state.pantalla=='portada2'){
  wrapper.append(Portada2(update));
  }

  if(state.pantalla=='portada3'){
  wrapper.append(Portada3(update));
  }

  if(state.pantalla=='portada4'){
  wrapper.append(Portada4(update));
  }

  if(state.pantalla=='portada5'){
  wrapper.append(Portada5(update));
  }

  if(state.pantalla=='portada6'){
  wrapper.append(Portada6(update));
  }

  if(state.pantalla=='portada7'){
  wrapper.append(Portada7(update));
  }

  if(state.pantalla=='portada8'){
  wrapper.append(Portada8(update));
  }


  root.append(wrapper);

}

const state = {
  pantalla: null,
  code:null,
  user:null,
  card:null
};



$(_=>{

      const root = $('#root');
      render(root);


});
