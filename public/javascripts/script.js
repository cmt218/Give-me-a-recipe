function sendYummly(){
	var data = {};
	data.urlString = 'http://api.yummly.com/v1/api/recipes?&q=onion+soup';

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:6969/getYummly',
		success: function(data){
			appendResults(data);
		}
	});
}

function fetchURL(button){
	var id = $(button).attr('id');
	var data = {};
	data.urlString = 'http://api.yummly.com/v1/api/recipe/' +id+ '?';

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:6969/getRecipe',
		success: function(data){
			//console.log(data.source);
			window.location.href = data.source.sourceRecipeUrl;
		}
	});
}

function appendResults(response){
		$('#putResults').html('');
		response.matches.forEach(function(recipe){
			var cardClone = $('#card_template').clone(true);
			cardClone.css('display', 'unset');
			$('#putResults').append(cardClone);
			$('img', cardClone).attr('src', recipe.smallImageUrls);
			$('.card-content' ,cardClone).html('<h2>'+recipe.recipeName+'</h2>');
			$('button', cardClone).attr('onclick', 'fetchURL(this)').html('go to recipe');
			$('button', cardClone).attr('id', recipe.id);
		});
}




//materialize chip logic
$('.chips').material_chip();

$('#ingredients').material_chip({
  placeholder: 'Enter Ingredients.',
  secondaryPlaceholder: '+',
});

$('#query').material_chip({
  placeholder: 'Ex: Casserole',
  secondaryPlaceholder: '+',
});

var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
};

/*
$('.chips').on('chip.add', function(e, chip){
});

$('.chips').on('chip.delete', function(e, chip){
});


$('.chips').on('chip.select', function(e, chip){

});
*/
