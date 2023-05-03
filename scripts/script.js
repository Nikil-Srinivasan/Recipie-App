$(document).ready(function () {
    // handle form submission
    $('#recipe-search-form').submit(function (event) {
        event.preventDefault(); // prevent form from submitting normally
        var query = $('#query').val(); // get the user's query from the form
        var appId = '320d2983'; // replace with your own app ID
        var appKey = '6549f872637bf3f69ab7cd456cff1711'; // replace with your own app key
        var apiUrl = 'https://api.edamam.com/search?q=' + query + '&app_id=' + appId + '&app_key=' + appKey;
        var recipeGrid = $(".recipe-grid");
        var loadingSpinner = $(".loading-spinner"); // get a reference to the loading spinner

        // show the loading spinner before sending the AJAX request
        loadingSpinner.show();

        // make AJAX request to Edamam API
        $.ajax({
            url: apiUrl,
            type: "GET",
            data: {
                app_id: appId,
                app_key: appKey,
                q: query,
            },
            success: function (result) {
                // Handle the API response here
                for (var i = 1; i < result.hits.length - 1; i++) {
                    var recipe = result.hits[i].recipe;
                    // var html = "<div class='recipe-card'>" +
                    //     '<a href="' + recipe.url + '"><img src="' + recipe.image + '" height=200 width=200 ></a>' +
                    //     "<h6>" + recipe.label + "</h6>" +
                    //     "</div>";
                    // recipeGrid.append(html);
                    var recipeCard = $("<div></div>").addClass("recipe-card");
                    var recipeImage = $("<img>").attr("src", recipe.image);
                    var recipeLink = $("<a></a>").attr("href", recipe.url).append(recipeImage);
                    var overlay = $("<div></div>").addClass("overlay");
                    var overlayContent = $("<div></div>").addClass("overlay-content");
                    var recipeTitle = $("<h2></h2>").text(recipe.label);
                    var recipeDescription = $("<p></p>").text(recipe.source);

                    overlayContent.append(recipeTitle);
                    overlayContent.append(recipeDescription);
                    overlay.append(overlayContent);
                    recipeLink.append(overlay); // Append the overlay to recipe link instead of recipe card
                    recipeCard.append(recipeLink);
                    recipeGrid.append(recipeCard);
                }
                loadingSpinner.hide();
            },
            error: function () {
                alert("Error retrieving data from API.");
            },
        });
    });
});