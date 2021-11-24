

// function createCard(data){
//     const liEl = document.createElement('li')
//     liEl.setAttribute('class', 'card')

//     const h2El = document.createElement('h2')
//     h2El.setAttribute('class', 'card--title')
//     h2El.textContent = data.name
  
//     const avatarEl = document.createElement('img')
//     avatarEl.setAttribute('class', 'card--img')
//     avatarEl.setAttribute('width', '256')
//     avatarEl.setAttribute('src', `${data.sprites.other["official-artwork"].front_default}`)

//     const ulEl = document.createElement('ul')
//     ulEl.setAttribute('class', 'card--text')

//     const li1El = document.createElement('li')
//     li1El.textContent=`HP: ${data.stats[0].base_stat}`

//     const li2El = document.createElement('li')
//     li2El.textContent=`ATTACK: ${data.stats[1].base_stat}`

//     const li3El = document.createElement('li')
//     li3El.textContent=`DEFENSE ${data.stats[2].base_stat}`

//     const li4El = document.createElement('li')
//     li4El.textContent=`SPECIAL-ATTACK: ${data.stats[3].base_stat}`

//     const li5El = document.createElement('li')
//     li5El.textContent=`SPECIAL-DEFENSE: ${data.stats[4].base_stat}`

//     const li6El = document.createElement('li')
//     li6El.textContent=`SPEED: ${data.stats[5].base_stat}`
  
//     liEl.append(h2El, avatarEl, ulEl)

//     ulEl.append(li1El, li2El, li3El, li4El, li5El, li6El)
  
//     const ulistEl = document.querySelector('.cards')
//     ulistEl.append(liEl)

// }

// function createPokemon() {
//     for (const data of datas) {
//       createCard(data)
//     }
//   }
  
//   createPokemon()

function createPokemon (pokemon) {
    // get image source
    const image = pokemon.sprites.other['official-artwork'].front_default
  
    // create main li element
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'card')
  
    // create pokemon title
    const titleEl = document.createElement('h2')
    titleEl.textContent = pokemon.name
  
    // create pokemon image
    const imageEl = document.createElement('img')
    imageEl.setAttribute('width', '256')
    imageEl.setAttribute('class', 'card--img')
    imageEl.setAttribute('src', image)
  
    // create pokemon attributes ul
    const attributesEl = document.createElement('ul')
    attributesEl.setAttribute('class', 'card--text')
  
    // create pokemon attributes li for each stat
    for (const statData of pokemon.stats) {
      const text = `${statData.stat.name.toUpperCase()}: ${statData.base_stat}`
  
      const attributeEl = document.createElement('li')
      attributeEl.textContent = text
  
      attributesEl.append(attributeEl)
    }
  
    // add li's children
    liEl.append(titleEl, imageEl, attributesEl)
  
    // add pokemon li to .cards ul
    const ulEl = document.querySelector('.cards')
    ulEl.append(liEl)
  }
  
  for (const pokemon of pokemons) {
    createPokemon(pokemon)
  }
  