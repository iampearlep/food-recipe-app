const apiId = "028baa6c";
const apiKey = "57b94ecb6556ba4a4a044aec5c228e0d";
const apiUrl = "https://api.edamam.com/search?q=${}&app_id=${}&app_key=${}&from=0&to=9";
const searchBtn = document.querySelector("form");
const container = document.querySelector(".container");
let search = "";



searchBtn.addEventListener("submit", function (e) {
	e.preventDefault();

	search = e.target.querySelector('input').value;

	getRecipe();

	
});



async function getRecipe() {
	
	const res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${apiKey}&from=0&to=9`);
	const data = await res.json();
	console.log(data.hits);
	generateHtml(data.hits);
}

function generateHtml (result) {
	let newHtml = "";
	result.map((results) => {
		newHtml += `
		<div>
        <img src="${results.recipe.image}"/>
        <h4>${results.recipe.label}</h4>
		<p>${results.recipe.ingredientLines}</p>
    </div>
		`;

	})
	container.innerHTML = newHtml;
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f1a1123731mshcf9c4b5a9ed6bbcp16a670jsn6151e0758537',
// 		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
// 	}
// };

// const apiUrl = 'https://edamam-recipe-search.p.rapidapi.com/search?q=salad';
// async function getRecipe() {
//   const response = await fetch(apiUrl, options);
//   const data = await response.json();
//   document.getElementById("img").src = data.hits[1].recipe.image;
//   document.getElementById("label").innerHTML = data.hits[1].recipe.label;
//   document.getElementById("img2").src = data.hits[2].recipe.image;
//   document.getElementById("label2").innerHTML = data.hits[2].recipe.label;
//   document.getElementById("img3").src = data.hits[3].recipe.image;
//   document.getElementById("label3").innerHTML = data.hits[3].recipe.label;
//   document.getElementById("img4").src = data.hits[4].recipe.image;
//   document.getElementById("label4").innerHTML = data.hits[4].recipe.label;
//   document.getElementById("img5").src = data.hits[5].recipe.image;
//   document.getElementById("label5").innerHTML = data.hits[5].recipe.label;
//   document.getElementById("img6").src = data.hits[6].recipe.image;
//   document.getElementById("label6").innerHTML = data.hits[6].recipe.label;
//   document.getElementById("img7").src = data.hits[7].recipe.image;
//   document.getElementById("label7").innerHTML = data.hits[7].recipe.label;
//   document.getElementById("img8").src = data.hits[8].recipe.image;
//   document.getElementById("label8").innerHTML = data.hits[8].recipe.label;
//   document.getElementById("img9").src = data.hits[9].recipe.image;
//   document.getElementById("label9").innerHTML = data.hits[9].recipe.label;
// }

 // getRecipe();
