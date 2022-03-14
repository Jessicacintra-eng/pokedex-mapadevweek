const listaSelecaoPokemon = document.querySelectorAll('.pokemon')

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto =  document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado =  pokemon.attributes.id.value
        
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem =document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
        
    })

})
