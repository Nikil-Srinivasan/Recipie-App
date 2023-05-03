// $(document).ready(function () {
//     var appId = "320d2983"; // Replace with your own app ID
//     var appKey = "6549f872637bf3f69ab7cd456cff1711"; // Replace with your own app key
//     var searchTerm = $('#query').val();  // get the user's query from the form
//     var recipeGrid = $(".recipe-grid");
//     var favoriteRecipes = $(".favorite-recipes ul");

//     // Load the favorite recipes from local storage
//     loadFavoriteRecipes();

//     function loadFavoriteRecipes() {
//         var favoriteRecipesData = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
//         favoriteRecipes.empty();

//         for (var i = 0; i < favoriteRecipesData.length; i++) {
//             var favoriteRecipe = $("<li></li>").text(favoriteRecipesData[i].label);
//             favoriteRecipes.append(favoriteRecipe);
//         }
//     }

//     function saveFavoriteRecipe(recipe) {
//         var favoriteRecipesData = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
//         favoriteRecipesData.push(recipe);
//         localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipesData));
//     }

//     function removeFavoriteRecipe(recipe) {
//         var favoriteRecipesData = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

//         for (var i = 0; i < favoriteRecipesData.length; i++) {
//             if (favoriteRecipesData[i].uri === recipe.uri) {
//                 favoriteRecipesData.splice(i, 1);
//                 localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipesData));
//                 break;
//             }
//         }
//     }

//     function isRecipeFavorite(recipe) {
//         var favoriteRecipesData = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

//         for (var i = 0; i < favoriteRecipesData.length; i++) {
//             if (favoriteRecipesData[i].uri === recipe.uri) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     function updateFavoriteButtonState(favoriteBtn, recipe) {
//         if (isRecipeFavorite(recipe)) {
//             favoriteBtn.addClass("active");
//             favoriteBtn.text("Remove from Favorites");
//         } else {
//             favoriteBtn.removeClass("active");
//             favoriteBtn.text("Add to Favorites");
//         }
//     }

//     function createRecipeCard(recipe) {
//         var recipeCard = $("<div></div>").addClass("recipe-card");
//         var recipeImage = $("<img>").attr("src", recipe.image);
//         var recipeLink = $("<a></a>").attr("href", recipe.url).append(recipeImage);
//         var overlay = $("<div></div>").addClass("overlay");
//         var overlayContent = $("<div></div>").addClass("overlay-content");
//         var recipeTitle = $("<h3></h3>").text(recipe.label);
//         var favoriteBtn = $("<button></button>").addClass("favorite-btn").text("Add to Favorites");

//         updateFavoriteButtonState(favoriteBtn, recipe);

//         favoriteBtn.click(function () {
//             if (isRecipeFavorite(recipe)) {
//                 removeFavoriteRecipe(recipe);
//                 updateFavoriteButtonState(favoriteBtn, recipe);
//             } else {
//                 saveFavoriteRecipe(recipe);
//                 updateFavoriteButtonState(favoriteBtn, recipe);
//             }

//             loadFavoriteRecipes();
//         });

//         overlayContent.append(recipeTitle, favoriteBtn);
//         overlay.append(overlayContent);
//         recipeCard.append(recipeLink, overlay);
//         return recipeCard;
//     }

//     // Fetch the recipes from the API
//     $.ajax({
//         url: "https://api.edamam.com/search?q=" + searchTerm + "&app_id=" + appId + "&app_key=" + appKey,
//         method: "GET",
//         dataType: "json",
//         beforeSend: function () {
//             recipeGrid.empty();
//             recipeGrid.append("<div class='loading'>Loading...</div>");
//         },
//         success: function (data) {
//             recipeGrid.empty();

//             // Loop through the recipe data and create recipe cards for each one
//             for (var i = 0; i < data.hits.length; i++) {
//                 var recipe = data.hits[i].recipe;
//                 var recipeCard = createRecipeCard(recipe);
//                 recipeGrid.append(recipeCard);
//             }
//         },
//         error: function () {
//             recipeGrid.empty();
//             recipeGrid.append("<div class='error'>An error occurred while fetching the recipes.</div>");
//         }
//     });
// });

