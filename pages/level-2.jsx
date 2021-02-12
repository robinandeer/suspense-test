import React from 'react'
import { API } from '../utils/api'
import PokemonInfo from '../components/pokemon-info'
import PokemonInfoSkeleton from '../components/pokemon-info-skeleton'
import Container from '../components/container'

// assign variable to hold the resolved data
let pokemon
const pokemonPromise = API.fetchPokemon('pikachu').then((data) => (pokemon = data))

function PokemonComponent() {
  // throw the (unresolved) promise unless data is available
  if (!pokemon) {
    throw pokemonPromise
  }

  return <PokemonInfo pokemon={pokemon} />
}

export default function Level2() {
  return (
    <Container back title="Level 2">
      {/* include a Suspense boundary with a fallback loading component */}
      <React.Suspense fallback={<PokemonInfoSkeleton />}>
        <PokemonComponent />
      </React.Suspense>
    </Container>
  )
}
