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

if(window.SimpleAnime) {
    new SimpleAnime();
}

if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp",
    button: "#enviar",
    erro: "<div id='form-erro'><h2>Erro!</h2><p>Um erro Ocorreu, entr em contato pelo email usuario@usuario.com</p></div>",
    sucesso: "<div id='form-sucesso'><h2>Formulario enviado com sucesso</h2><p>entraremos em contato em breve</p></div>"
  });
}