$(document).ready(function () {
    // handle form submission
    $('#recipe-search-form').submit(function (event) {
        event.preventDefault(); // prevent form from submitting normally
        var query = $('#query').val(); // get the user's query from the form
        var app_id = '320d2983'; // replace with your own app ID
        var app_key = '6549f872637bf3f69ab7cd456cff1711'; // replace with your own app key
        var api_url = 'https://api.edamam.com/search?q=' + query + '&app_id=' + app_id + '&app_key=' + app_key;
        // make AJAX request to Edamam API
        console.log(query);
        $.ajax({
            url: api_url,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                // handle successful response from API
                var results = data.hits;
                var html = '';
                for (var i = 1; i < results.length; i++) {
                    var recipe = results[i].recipe;
                    html += '<h4>' + recipe.label + '</h4>';
                    html += '<a href="' + recipe.url + '"><img src="' + recipe.image + '"></a>';
                    // html += '<img src="' + recipe.image + '">';
                    // html += '<p>' + recipe.source + '</p>';
                    // html += '<p>' + recipe.url + '</p>';
                    html += '<hr>';
                }
                $('#results').html(html);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // handle error response from API
                $('#results').html('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    });
});
