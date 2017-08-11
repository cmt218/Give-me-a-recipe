function submit(input){
	if(event.keyCode == 13){	
		var data = {};
		data.title = 'title';
		data.message = 'message';
		data.ingredient = input.value
;
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
}

function appendResults(response){
	console.log(response);
	$('#putResults').html('');
	response.results.forEach(function(recipe){
		var resultDiv = $('<div />', {'class': 'result'});
		var anchor = $('<a />', {'href': recipe.href});
		resultDiv.append(anchor);
		anchor.html(recipe.title);
		var recipeImg = $('<img />', {'class': 'resultImg'});
		recipeImg.attr('src', recipe.thumbnail);
		resultDiv.append(recipeImg);
		$('#putResults').append(resultDiv);
	});
}