import React from 'react'
import Container from '../components/container'
import PokemonInfo from '../components/pokemon-info'
import PokemonInfoSkeleton from '../components/pokemon-info-skeleton'
import { API } from '../utils/api'

// fire request as early as possible
const pokemonPromise = API.fetchPokemon('pikachu')

function PokemonComponent() {
  // keep track of the state of the request
  const [pokemon, setPokemon] = React.useState(null)

  // update the state when the request resolves
  React.useEffect(() => {
    pokemonPromise.then((data) => setPokemon(data))
  }, [])

  // conditionally render a loading component
  return pokemon ? <PokemonInfo pokemon={pokemon} /> : <PokemonInfoSkeleton />
}

export default function Level1() {
  return (
    <Container back title="Level 1">
      <PokemonComponent />
    </Container>
  )
}
