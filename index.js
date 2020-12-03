const urlBase = 'https://api.punkapi.com/v2/beers';

async function getBeers() {
  const beerAPI = await fetch(urlBase);
  const beer = await beerAPI.json();
  const beerDiv = document.querySelector('.beers');

  for (item of beer) {
    const div = document.createElement('div');
    div.innerHTML = item.name;
    beerDiv.appendChild(div);
  }
}

getBeers();
