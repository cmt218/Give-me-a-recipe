function sendIngredients(){
	var input = $('.chips-placeholder').material_chip('data');
	
	var data = {};
	data.title = 'title';
	data.message = 'message';
	data.ingredient = "";
	input.forEach(function(chip){
		data.ingredient += chip.tag;
	});

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:6969/getres',
		success: function(data){
			appendResults(data);
		}
	});
}

function appendResults(response){
	console.log(response);
	$('#putResults').html('');
	response.results.forEach(function(recipe){
		var cardClone = $('#card_template').clone(true);
		cardClone.css('display', 'unset');
		$('#putResults').append(cardClone);
		$('img', cardClone).attr('src', recipe.thumbnail);
		$('.card-content' ,cardClone).html('<h2>'+recipe.title+'</h2>');
		$('a', cardClone).attr('href', recipe.href).html('go to recipe');
	});
}

//materialize chip logic
$('.chips').material_chip();

$('.chips-placeholder').material_chip({
  placeholder: 'Enter Ingredients.',
  secondaryPlaceholder: '+Ingredient',
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
