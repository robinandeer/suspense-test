import { API } from "../utils/api"
import PokemonInfo from "../components/pokemon-info"
import PokemonInfoSkeleton from "../components/pokemon-info-skeleton"

let pokemon
const pokemonPromise = API.fetchPokemon('pikachu').then((data) => (pokemon = data))

function PokemonComponent() {
  if (!pokemon) {
    throw pokemonPromise
  }

  return <PokemonInfo pokemon={pokemon} />
}

export default function Step2() {
  return (
    <React.Suspense fallback={<PokemonInfoSkeleton />}>
      <PokemonComponent />
    </React.Suspense>
  )
}
