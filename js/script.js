if (window.SimpleSlide){
    new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portfolio', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
     auto: false, // se o slide deve passar automaticamente
     time: 10000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });
}
