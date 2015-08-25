$(function(){

	var btnCategoria	=	$('.btn__categoria');

	$.getJSON("./data/categorias.json", function(objcategorias){
		$.each(objcategorias.categorias, function(posicion,categoria){
			if(categoria.id==2){
				$('#nameCategory').append(categoria.nombre);
				$.each(categoria.data, function(indice,cat){
					
					$('#coyuntura').append('<li><a href="'+cat.file+'">'+cat.nombre+'</a></li>');
				});
			}
			
		});
	});

});