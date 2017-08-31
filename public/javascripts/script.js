function sendYummly(){
	var data = {};
	data.urlString = 'http://api.yummly.com/v1/api/recipes?&q=onion+soup';

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:6969/getYummly',
		success: function(data){
			console.log(data);
		}
	});
}

/*
function sendIngredients(){

	if(!checkInputs()){
		return;
	}

	var ingredients = $('#ingredients').material_chip('data');
	var query = $('#query').material_chip('data');

	var data = {};
	data.title = 'title';
	data.message = 'message';
	data.urlString = "http://www.recipepuppy.com/api/";
	if(ingredients.length > 0){
		data.urlString += "?i=";
		ingredients.forEach(function(chip){
			data.urlString += chip.tag+",";
		});
	}
	if(query.length > 0){
		data.urlString += "&q="
		query.forEach(function(chip){
			data.urlString += chip.tag+",";
		});
	}

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

function checkInputs(){
	var ingredients = $('#ingredients').material_chip('data');
	var query = $('#query').material_chip('data');

	if(ingredients.length == 0 || query.length > 1){
		alert("bad input");
		return false;
	}
	else{
		return true;
	}
}

function appendResults(response){
	if(response == "null"){
		alert("nothing found");
	}
	else{
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
}
*/


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
