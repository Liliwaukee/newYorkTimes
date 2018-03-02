
$('.modal').modal();

const pokemonGallery = document.getElementById('pokemon-gallery');

const handleResponse = data => {
    const pokemon = data.pokemon_entries;
    printPokemon(pokemon);
}

const printDom = data => {
    console.log(data);
}

const printPokemon = character => { character.forEach(pokemon =>{

  const numberSpecies = pokemon.entry_number;
  const species = pokemon.pokemon_species;
	const eachPokemon = `

    <div class="card">
      <div class="card-image">
        <img src = "https://dummyimage.com/150x200/000000/fff"/>
      </div>
      <div class="card-content">
  	     <h6 class="pokemon-name">${species.name}</h6>
         <a href="${species.url}">+info</a>

         <a id ="modalPokemon" class="waves-effect waves-light btn modal-trigger" href="#modal1">modal</a>
      </div>
    </div>

	`;
	const containerPokemon = document.createElement("div");
  containerPokemon.classList.add("col");
  containerPokemon.classList.add("m3");
	containerPokemon.innerHTML = eachPokemon;
	pokemonGallery.appendChild(containerPokemon);

const url = species.url;

  $.ajax({
      url: url
  }).done(printDom);

  })

}




/*

modalNamePokemon.innerHTML = species.name;
*/

$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1`

}).done(handleResponse);






/*
		let containerPokemon = document.createElement("div");
		const photoPokemon = document.createElement("img")
		let namePokemon = document.createElement("h5");
		let moreInfo = document.createElement("a");


		photoPokemon.src = "https://dummyimage.com/150x250/000000/fff";
		moreInfo.innerHTML = "+ info";
		moreInfo.href = pokemon.url;
		namePokemon.innerHTML = pokemon.name;

		containerPokemon.appendChild(photoPokemon);
		containerPokemon.appendChild(namePokemon);
		containerPokemon.appendChild(moreInfo);
		pokemonGallery.appendChild(containerPokemon);
*/
