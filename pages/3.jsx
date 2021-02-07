import { API, createResource } from "../utils/api"

import PokemonInfo from "../components/pokemon-info"
import PokemonInfoSkeleton from "../components/pokemon-info-skeleton"
import Container from "../components/container"

// create a "resource" by passing our pokemon promise
const pokemonResource = createResource(API.fetchPokemon('pikachu'))

function PokemonComponent() {
  // attempt to read the data from the resource
  const pokemon = pokemonResource.read()

  return <PokemonInfo pokemon={pokemon} />
}

export default function Level3() {
  return (
    <Container back title="Level 3">
      <React.Suspense fallback={<PokemonInfoSkeleton />}>
        <PokemonComponent />
      </React.Suspense>
    </Container>
  )
}
