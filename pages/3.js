import { API, createResource } from "../utils/api"

import PokemonInfo from "../components/pokemon-info"
import PokemonInfoSkeleton from "../components/pokemon-info-skeleton"

const pokemonResource = createResource(API.fetchPokemon('pikachu'))

function PokemonComponent() {
  const pokemon = pokemonResource.read()
  return <PokemonInfo pokemon={pokemon} />
}

export default function Step2() {
  return (
    <React.Suspense fallback={<PokemonInfoSkeleton />}>
      <PokemonComponent />
    </React.Suspense>
  )
}
