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
  root.append(wrapper);

}

const state = {
  pantalla: null,

};



$(_=>{

      const root = $('#root');
      render(root);


});
