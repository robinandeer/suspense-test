import { API, createResource } from "../utils/api"

import LoadingIndicator from "../components/loading-indicator"
import PokemonInfoResource from "../components/pokemon-info-resource"
import PokemonInfoSkeleton from "../components/pokemon-info-skeleton"

const initialResource = createResource(API.fetchPokemon('pikachu'))

function PokemonSearchComponent() {
  const [startTransition, isPending] = React.unstable_useTransition()
  const [pokemonResource, setPokemonResource] = React.useState(initialResource)
  const [pokemonName, setPokemonName] = React.useState('')

  function handleClick() {
    startTransition(() => {
      setPokemonResource(createResource(API.fetchPokemon(pokemonName)))
    })
  }

  return (
    <div>
      <LoadingIndicator visible={isPending} />
      <input value={pokemonName} onChange={({ target: { value } }) => setPokemonName(value)} />
      <button onClick={handleClick}>Search</button>

      <React.Suspense fallback={<PokemonInfoSkeleton />}>
        <PokemonInfoResource resource={pokemonResource} />
      </React.Suspense>
    </div>
  )
}

export default function Step4() {
  return <PokemonSearchComponent />
}
