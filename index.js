

function createCard(data){
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'card')

    const h2El = document.createElement('h2')
    h2El.setAttribute('class', 'card--title')
    h2El.textContent = data.name
  
    const avatarEl = document.createElement('img')
    avatarEl.setAttribute('class', 'card--img')
    avatarEl.setAttribute('width', '256')
    avatarEl.setAttribute('src', `${data.sprites.other["official-artwork"].front_default}`)

    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class', 'card--text')

    for (const statData of data.stats) {
      const text = `${statData.stat.name.toUpperCase()}: ${statData.base_stat}`
  
      const li1El = document.createElement('li')
      li1El.textContent = text
  
      ulEl.append(li1El)
    }

    liEl.append(h2El, avatarEl, ulEl)
  
    const ulistEl = document.querySelector('.cards')
    ulistEl.append(liEl)

}

function createPokemon() {
    for (const data of datas) {
      createCard(data)
    }
  }
  
  createPokemon()




// function createPokemon (pokemon) {
//     // get image source
//     const image = pokemon.sprites.other['official-artwork'].front_default
  
//     // create main li element
//     const liEl = document.createElement('li')
//     liEl.setAttribute('class', 'card')
  
//     // create pokemon title
//     const titleEl = document.createElement('h2')
//     titleEl.textContent = pokemon.name
  
//     // create pokemon image
//     const imageEl = document.createElement('img')
//     imageEl.setAttribute('width', '256')
//     imageEl.setAttribute('class', 'card--img')
//     imageEl.setAttribute('src', image)
  
//     // create pokemon attributes ul
//     const attributesEl = document.createElement('ul')
//     attributesEl.setAttribute('class', 'card--text')
  
//     // create pokemon attributes li for each stat
//     for (const statData of pokemon.stats) {
//       const text = `${statData.stat.name.toUpperCase()}: ${statData.base_stat}`
  
//       const attributeEl = document.createElement('li')
//       attributeEl.textContent = text
  
//       attributesEl.append(attributeEl)
//     }
  
//     // add li's children
//     liEl.append(titleEl, imageEl, attributesEl)
  
//     // add pokemon li to .cards ul
//     const ulEl = document.querySelector('.cards')
//     ulEl.append(liEl)
//   }
  
//   for (const pokemon of pokemons) {
//     createPokemon(pokemon)
//   }
  