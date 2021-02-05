import { API } from "../utils/api"
import PokemonInfo from "../components/pokemon-info"
import PokemonInfoSkeleton from "../components/pokemon-info-skeleton"

const pokemonPromise = API.fetchPokemon('pikachu')

function PokemonComponent() {
  const [pokemon, setPokemon] = React.useState(null)
  
  React.useEffect(() => {
    pokemonPromise.then((data) => setPokemon(data))
  }, [])

  return pokemon ? (
    <PokemonInfo pokemon={pokemon} />
  ) : (
    <PokemonInfoSkeleton />
  )
}

export default function Step1() {
  return (
    <PokemonComponent />
  )
}
