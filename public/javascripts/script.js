function sendYummly(){
	var data = {};
	data.urlString = generateURL();

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		//url: 'http://localhost:6969/getYummly',
		url: 'https://thawing-headland-77204/getYummly'
		success: function(data){
			appendResults(data);
		}
	});
}

function generateURL(){
	var url = 'http://api.yummly.com/v1/api/recipes?';
	
	var ingredients = $('#ingredients').material_chip('data');
	ingredients.forEach(function(ingredient){
		url += '&allowedIngredient[]='+ingredient.tag;
	});

	var queries = $('#query').material_chip('data');
	queries.forEach(function(query){
		url += '&q='+query.tag;
	});

	url += '&requirePictures=true';
	url += '&maxResult=12&start=0';
	return url;
}

function fetchURL(button){
	var id = $(button).attr('id');
	var data = {};
	data.urlString = 'http://api.yummly.com/v1/api/recipe/' +id+ '?';

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		//url: 'http://localhost:6969/getRecipe',
		url: 'https://thawing-headland-77204/getRecipe',
		success: function(data){
			//console.log(data.source);
			window.location.href = data.source.sourceRecipeUrl;
		}
	});
}

function appendResults(response){
		//$('#putResults').html('');

		var gridIndex=1;
		response.matches.forEach(function(recipe){
			var cardClone = $('#card_template').clone(true);
			cardClone.css('display', 'unset');
			$('#putCard'+gridIndex).append(cardClone);
			gridIndex++;
			$('img', cardClone).attr('src', recipe.smallImageUrls);
			$('.card-title' ,cardClone).html(recipe.recipeName);
			$('button', cardClone).attr('onclick', 'fetchURL(this)').html('go to recipe');
			$('button', cardClone).attr('id', recipe.id);
		});
}

function clearYummly() {
	$('.grid').each(function(x){
		$(this).html('');
	});
	$('.chip').each(function(x){
		this.remove();
	});
	//clear chip data arrays
	while($('#ingredients').material_chip('data').length){
		$('#ingredients').material_chip('data').pop();
	}
	while($('#query').material_chip('data').length){
		$('#query').material_chip('data').pop();
	}
	console.log($('#ingredients').material_chip('data'));
	console.log($('#query').material_chip('data'));
}



//materialize chip logic

$('#ingredients.chips').material_chip({
  placeholder: 'Enter Ingredients.',
  secondaryPlaceholder: '+',
});

$('#query.chips').material_chip({
  placeholder: 'Ex: Casserole',
  secondaryPlaceholder: '+',
});



