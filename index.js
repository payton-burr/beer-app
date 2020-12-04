const urlBase = 'https://api.punkapi.com/v2/beers';

async function getBeers() {
  const beerAPI = await fetch(urlBase);
  const beers = await beerAPI.json();
  const beerDiv = document.querySelector('.beers');
  let beerHTML = '';
  console.log(beers[0]);

  beers.forEach((beer) => {
    beerHTML += `
    <div class="beer-wrapper card">
        <div class="beer">
            <img class="beer__img" src="${beer.image_url}">
            <h3>${beer.name}</h3>
            <span class="beer__info">
                <span>ABV: ${beer.abv}%</span>
                <span>IBU: ${beer.ibu}</span>
            </span>
        </div>
        <div class="beer__content">
            <div class="beer__name">${beer.name}</div>
            <div class="beer__tagline">${beer.tagline}</div>
            <div class="beer__description">${beer.description}</div>
            <div class="beer__food-pairing">
                Pair with: ${beer.food_pairing.join(', ')}
            </div>
        </div>
    </div>
    `;

    beerDiv.innerHTML = beerHTML;
  });
}

getBeers();
