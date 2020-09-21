$(document).ready(function(){

	//SLIDER
	if(window.location.href.indexOf('index') > -1) {
		$('.galeria').bxSlider({ //extraido de https://bxslider.com/examples/image-slideshow-captions/
	    mode: 'fade', //tipo de animacion en la transicion
	    captions: true,
	    slideWidth: 1200, //tamaño foto
	    auto: true, //mas opciones visitar https://bxslider.com/options/
      });
	}

	

    //POSTS
    if(window.location.href.indexOf('index') > -1) {
    var posts =[
	    {
	    	title: 'Prueba de título 1',
	    	date: 'Publicado el ' + moment()./*date()*/format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),//añadir metodo .moment y dar formato a la fecha ("MMM Do YYYY") ver codigo HTML linea 15
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
	    },
    	{
    		title: 'Prueba de título 2',
	    	date: 'Publicado el ' + moment().format("DD") + " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
    	},
	    {
	    	title: 'Prueba de título 3',
	    	date: 'Publicado el ' + moment().format("DD") + " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
	    },
	    {	
	    	title: 'Prueba de título 4',
	    	date: 'Publicado el ' + moment().format("DD") + " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
	    },
	    {	
	    	title: 'Prueba de título 5',
	    	date: 'Publicado el ' + moment().format("DD") + " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
	    },
	    {	
	    	title: 'Prueba de título 6',
	    	date: 'Publicado el ' + moment().format("DD") + " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, efficitur et auctor non, dictum sed nisi. Integer commodo erat sit amet vulputate pretium. Vivamus vel venenatis ligula. Ut facilisis elit eu arcu ornare tincidunt. Suspendisse potenti. Nullam condimentum nisi sit amet mollis tincidunt. Quisque imperdiet sagittis tortor, eu posuere lorem consequat sed. Donec vitae aliquet odio, at vehicula urna. Donec lobortis suscipit purus, et lobortis erat porttitor a. Donec justo mauris, efficitur et eros eu, hendrerit pharetra orci.'
	    },
	    ];
	    //INCLUIR LOS POSTS EN LA PAGINA
	    posts.forEach((item, index) => { //usamos forEach para recorrer el JSON
	    	var post = /*establecemos una plantilla de texto con 
	    	`, incluimos el metodo ${.....} para incrustar el elemento y la caracteristica que deseemos*/
	    	` 
	    		<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content} 
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;		

	    	$('#posts').append(post); //mediante jquery y el metodo append podemos incrustar el texto en la pagina

	    });
	}

	 //SELECTOR DE TEMAS
	 var theme = $('#theme');
	 	
	 $('#to-green').click(function(){
	 	theme.attr('href', 'css/green.css');
	 	//Guardar el tema en el localStorage prueba mia
	 	var selTema = theme.attr('href');
	 	localStorage.setItem("tema", selTema);
		// console.log(selTema);	
//*******************************************		
	 	// console.log("Tema verde");
	 }); 	

	 $('#to-red').click(function(){
	 	theme.attr('href', 'css/red.css');	
	 	//Guardar el tema en el localStorage prueba mia
	 	var selTema = theme.attr('href');
	 	localStorage.setItem("tema", selTema);
		// console.log(selTema);
//*******************************************
		// console.log("Tema rojo");
		 }); 

	 $('#to-blue').click(function(){
	 	theme.attr('href', 'css/blue.css');	
	 	//Guardar el tema en el localStorage prueba mia
	 	var selTema = theme.attr('href');
	 	localStorage.setItem("tema", selTema);
		// console.log(selTema);
//*******************************************
	 	// console.log("Tema azul");
	 }); 	

	 $('#to-dark').click(function(){
	 	theme.attr('href', 'css/dark.css');	
	 	//Guardar el tema en el localStorage prueba mia
	 	var selTema = theme.attr('href');
	 	localStorage.setItem("tema", selTema);
		// console.log(selTema);
//*******************************************
	 	// console.log("Tema oscuro");
	 }); 


	 //Guardar en el localStorage el tema elegido y aplicarlo al refrescar la pagina
	 var recuTema = localStorage.getItem("tema");
	 
	 window.onload = function(){
	 	$('#theme').attr('href', recuTema);
	 	// console.log(recuTema);
  		};
	
  	//SCROLL AUTOMATICO SUAVIZADO
	$('.subir').click(function(e){ //capturamos el evento click
		e.preventDefault();//como el ancla tiene href="#" va a recargar la pagina cada vez que hagamos click le metemos un parametro a la funcion que sea (e){e.preventDefault();

		$('html, body').animate({ //seleccionamos todo el html y el body y le aplicamos el evento .animate
			scrollTop: 0 //indicamos hasta donde sera el scroll, 0=al inicio
		}, 700); //como segundo parametro al eevento animate le decimos el tiempo que va a tardar el scroll en subir

		return false;//para asegurarnos de que el elemento "a" no nos recarga la pagina hacemos que la funcion nos returne false
	});

	//LOGIN FALSO

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});	


	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){ //En caso de que el campo sea distinto a null o indefinido mostraremos en login, de lo contrario no se mostrara ( solo se mostrara bienvenido, "usuario")
		var about_parrafo = $("#about p");
		
		about_parrafo.html("<br><strong>Bienvenido, " + form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");//de esta manera incluimos un elemento "a" que nos sirve para cerrar sesion
		$("#login form").hide();

		$('#logout').click(function(){//establecemos la funcion para logout, en este caso, nos vacia el localStorega y recarga la pagina gracias a location.reload();
			localStorage.removeItem("form_name");
			location.reload();
		});
	}

	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$('#acordeon').accordion();
	}

	//RELOJ
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
						var reloj = moment().format('hh:mm:ss');
						$('#reloj').html(reloj);
				}, 1000);
				
		}
	
	//VALIDACION FORMULARIO POR MEDIO DE JQUERY
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',//activarmos el plugin de jquery
			errorMessagePosition: 'top',
			scrollToTopOnError: true//  IMPORTANTE podemos configurar la posicion de los mensajes de error asi como que la pantalla haga scroll directamente al error
		});	
	}
});				 

			

	 
	 	
	 


			
